# Phase 003C: Off-screen entrance

## Implementation

Kept CSS entrance and IntersectionObserver/WAAPI reveal. Removed all entrance/reveal opacity keyframes: opacity stays 1. Easing is cubic-bezier(0.45,0,0.25,1).

CSS fallback uses viewport and element dimensions rather than fixed 100px offsets: left = -(100vw + 100% of the element width); right = 100vw; navbar = -100% of its own height; CTA = 100vh + its own height. These conservative positions guarantee an off-screen start for the current page layout and work without JavaScript.

During layout effect, while an entrance is still in its existing delay, calculate its normal bounding rectangle by subtracting the current transform. Refine the starting X to -(normal right + 16px) for left entry or viewport width - normal left + 16px for right entry. For CTA, use max(70px, viewport height - normal top + 16px). Never replace/restart an already playing CSS animation when hydration is late; it retains the conservative CSS fallback. No per-scroll bounding-box listener was added.

Navbar: 1100ms / delay 0. Heading: 1600ms / delay 150ms. Description: 1500ms / delay 350ms. Image: 1700ms / delay 400ms. CTA: 1400ms / delay 650ms.

Observer reveal uses bounding rectangles too: headings/left logos start left of viewport, images/right logos start right of viewport, vertical groups start below the viewport when already visible or move 80-100px when just reaching the lower edge. Duration 1300ms; stagger 220ms. Trigger is 24px inside the bottom viewport boundary (well before the center), avoiding starting far below the fold and completing unseen. Observe once, unobserve on trigger, and cancel running effects for reduced motion. Content boundaries clip horizontal motion; resting layout is unchanged.

## Files changed

- app/components/home/motion.jsx
- app/assets/scss/enhancements.scss
- app/page.jsx (stagger attributes only)
- app/about/page.jsx (stagger attributes only)
- app/service/page.jsx (stagger attributes only)
- PHASE003C_OFFSCREEN_QA.md

No content, logo, services, routing, dependencies or deployment configuration changed.

## Actual Playwright recordings

Chromium at 1440x900 and 375x900 against the app-source-synchronized temporary checkout. requestAnimationFrame recorded geometry and transforms, opacity and document overflow. Midpoint sample is selected nearest to delay + duration/2, rather than wall time since navigation.

| Home target | Desktop start / midpoint / final translation | Mobile start / midpoint / final translation |
| --- | --- | --- |
| Navbar Y | -98 / -16.83 / 0px | -69 / -18.68 / 0px |
| Heading X | -2072 / -560.72 / 0px | -690 / -186.80 / 0px |
| Description X | -1904 / -515.25 / 0px | -690 / -186.80 / 0px |
| Image X | +1440 / +389.83 / 0px | +375 / +101.52 / 0px |
| Contact CTA Y | +199.44 / +53.98 / 0px | +70 / +18.95 / 0px |

On the recorded initial loads, hydration occurred too late to refine the entrance delay, so the conservative CSS distances above were retained without restart. The heading midpoint was recorded at animation clock 950ms (150ms delay + 800ms), exactly 50% active duration, with about 27% of the original distance still remaining.

Bounding-box evidence:
- Desktop heading initial right edge -1368px, fully outside left. Final left/right 72/704px.
- Mobile heading initial right edge -345px, fully outside left. Final left/right 30/345px.
- Desktop image initial left edge 2176px, beyond 1440px. Final left/right 736/1368px.
- Mobile image initial left edge 532.5px, beyond 375px. Final left/right 12/363px after responsive image layout settles.
- Desktop Contact CTA initial top 916px, below 900px viewport; final top 716.56px. Mobile CTA is already below the fold and uses a bounded extra 70px, rather than another full viewport.

All targets finish with transform none and opacity 1. Every recorded entrance/reveal frame retained opacity 1; zero opacity-error frames and zero horizontal-overflow frames. No console/page errors, no reported hydration mismatch. CSS animationstart counts were exactly one per target per route, including navbar rerenders during scrolling. Home -> Services -> About -> Contact produced new destination entrances. Observer recorded 26 reveal calls at each width.

All four routes at both widths with reduced motion: zero active animations, zero hidden targets and no overflow. Mid-playback preference switch cancelled 4 active animations; none left hidden. JavaScript-disabled checks after CSS completion also passed on all four routes and both widths. Dev compilation and diff whitespace check passed; no unrelated QA or production build was repeated.

## Video and raw evidence

C:/Users/pei/AppData/Local/Temp/segen-003c-qa/entrance-1440.webm
C:/Users/pei/AppData/Local/Temp/segen-003c-qa/entrance-375.webm
C:/Users/pei/AppData/Local/Temp/segen-003c-qa/results.json
C:/Users/pei/AppData/Local/Temp/segen-003c-qa/fallback.json

## Limits

Chromium only; Safari/Firefox, physical-device frame rate and production build remain unverified. Delayed hydration deliberately retains the larger CSS fallback distance instead of changing motion mid-flight; actual distance can therefore differ between full loads and fast client navigation. Existing responsive image/font layout can settle during initial loading; this task adds no layout-property animation. Below-fold CSS hero targets, notably Contact CTA on mobile, may complete before a visitor scrolls to them; observer reveal targets start on viewport entry. Videos and evidence are temporary local artifacts. No outgoing fade, navigation delay, commit, push, merge or deployment.
