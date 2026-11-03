"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

// Baseline styles remain visible. Only a running animation temporarily hides content.
export default function Motion() {
    const pathname = usePathname();
    useLayoutEffect(() => {
        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (preference.matches || !("IntersectionObserver" in window)) return;
        const animations = new Set();
        // Refine CSS fallbacks only during the existing delay, never restart playback.
        // Subtract the current translation to measure the element's resting rectangle.
        document.querySelectorAll("[data-entrance]").forEach((element) => {
            const animation = element.getAnimations().find((item) => item.animationName === "cep-offscreen-enter");
            if (!animation || Number(animation.currentTime || 0) > animation.effect.getTiming().delay) return;
            const rect = element.getBoundingClientRect();
            const matrix = new DOMMatrixReadOnly(getComputedStyle(element).transform);
            const left = rect.left - matrix.m41;
            const top = rect.top - matrix.m42;
            const type = element.dataset.entrance;
            if (type === "heading" || type === "description") {
                element.style.setProperty("--cep-enter-x", `${-(left + rect.width + 16)}px`);
            } else if (type === "image") {
                element.style.setProperty("--cep-enter-x", `${window.innerWidth - left + 16}px`);
            } else if (type === "cta") {
                element.style.setProperty("--cep-enter-y", `${Math.max(70, window.innerHeight - top + 16)}px`);
            }
        });
        const offsetFor = (element) => {
            const rect = element.getBoundingClientRect();
            const type = element.dataset.reveal;
            // Only lateral groups cross a viewport edge. Vertical groups below the fold
            // travel just far enough to enter visibly, rather than another full screen.
            if (type === "heading" || type === "left") return `translateX(${-(rect.right + 16)}px)`;
            if (type === "right" || element.tagName === "IMG") return `translateX(${window.innerWidth - rect.left + 16}px)`;
            const minimum = type === "card" ? 100 : 80;
            return `translateY(${Math.max(minimum, window.innerHeight - rect.top + 16)}px)`;
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                if (!isIntersecting) return;
                observer.unobserve(target);
                if (!target.animate || preference.matches) return;
                try {
                    const animation = target.animate([
                        { transform: offsetFor(target) },
                        { transform: "translate(0px, 0px)" }
                    ], {
                        duration: 1300,
                        delay: Number(target.dataset.motionDelay || 0),
                        easing: "cubic-bezier(0.45,0,0.25,1)",
                        fill: "backwards"
                    });
                    animations.add(animation);
                    const release = () => animations.delete(animation);
                    animation.onfinish = release;
                    animation.oncancel = release;
                } catch {
                    // Unsupported animation APIs leave the baseline content visible.
                }
            });
        }, { threshold: 0.01, rootMargin: "0px 0px -24px 0px" });
        document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
        const reduce = () => {
            if (!preference.matches) return;
            observer.disconnect();
            animations.forEach((animation) => animation.cancel());
            animations.clear();
        };
        preference.addEventListener("change", reduce);
        return () => {
            observer.disconnect();
            animations.forEach((animation) => animation.cancel());
            preference.removeEventListener("change", reduce);
        };
    }, [pathname]);
    return null;
}
