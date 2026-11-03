# Phase 003B: Directional Entrance Motion

## Audit and changes

The old whole-page opacity animation compounded individual fades, with short 24/28px travel and a scale-only hero illustration. Reveal could start from opacity zero after visible baseline content entered the viewport, giving a blink-like impression. No state-driven motion reset was found; the effect depends on pathname, not navbar scroll state. Destination page mounts intentionally restart entrance.

Kept the CSS entrance + IntersectionObserver/WAAPI reveal architecture. Removed the whole-page fade; opacity now supports movement (.85 to 1) without turning the content off. No persistent hidden style. Backward fill holds the directional starting pose through stagger delays. Observer begins 120px before the viewport boundary and unobserves each target after first entry. No element is assigned both CSS entrance and observer reveal. Content boundaries use overflow-x: clip to contain rightward travel without creating a scroll container.

## Directions

Entrance duration 950ms, easing cubic-bezier(0.22,1,0.36,1):
- Navbar: Y -60px, delay 0.
- Heading: X -120px, delay 100ms.
- Description: X -100px, delay 250ms.
- Hero image: X +120px, delay 300ms.
- Existing Contact CTA: Y +70px, delay 450ms.

Scroll duration 900ms, same easing:
- Section heading X -90px.
- Description/default About content Y +60px.
- Feature/service cards Y +80px, stagger 120ms.
- Four partner logos alternate X -70/+70/-70/+70px, stagger 120ms.
- Contact controls/banner/footer contact Y +70px.

All end at normal position. No outgoing fade or navigation delay.

## Files changed during Phase 003B

app/components/home/motion.jsx
app/assets/scss/enhancements.scss
app/page.jsx
app/about/page.jsx
app/service/page.jsx
app/contact/page.jsx
app/components/home/footer.jsx
PHASE003B_DIRECTIONAL_QA.md

Only motion logic/styles/attributes changed; no content, routing, assets, Partituro identity or service list changes.

## Playwright evidence

Existing Python Playwright + Chromium; desktop 1440x900 and mobile 375x900. Used a source-synchronized temporary checkout because of the existing workspace .next lock. Recorded actual computed transforms each animation frame, not just final visibility. Samples below are actual live samples; intermediate samples are around 500ms after detection and include configured delay.

| Target | Desktop initial / intermediate / final | Mobile initial / intermediate / final |
| --- | --- | --- |
| Navbar Y | -60 / -2.16 / 0px | -60 / -1.87 / 0px |
| Heading X | -120 / -9.69 / 0px | -120 / -8.52 / 0px |
| Description X | -100 / -24.21 / 0px | -100 / -21.54 / 0px |
| Hero image X | +120 / +40.92 / 0px | +120 / +36.56 / 0px |
| Contact CTA Y | +70 / +54.22 / 0px | +70 / +54.23 / 0px |
| First service card Y | +80 / +25.47 / 0px | +80 / +25.47 / 0px |
| Fourth partner logo X | +70 / +26.91 / 0px | +70 / +18.83 / 0px |

Final computed transform is none. Home -> Services -> About -> Contact through actual desktop/mobile navigation produced destination entrance and scroll-reveal recordings. Same logo scrolled away/back retained one animation call at both widths. No invisible targets after completion. Zero console/page errors; no reported hydration mismatch. Per-frame document scrollWidth checks recorded zero overflow frames across the tested navigation sequence at each width.

All four routes at both widths: reduced motion has zero active animations and no hidden targets. Changing preference during playback cancelled 4 active animations and left zero hidden targets. With JavaScript disabled, CSS entrance completed and all targets remained visible without overflow.

Dev compilation and whitespace checks pass. No full build or unrelated Phase 001/002 QA repeated.

## Evidence and limits

Local artifacts (temporary):
C:/Users/pei/AppData/Local/Temp/segen-003b-qa/results.json
C:/Users/pei/AppData/Local/Temp/segen-003b-qa/fallback.json
C:/Users/pei/AppData/Local/Temp/segen-003b-qa/once-only.json
C:/Users/pei/AppData/Local/Temp/segen-003b-qa/desktop-1440.webm
C:/Users/pei/AppData/Local/Temp/segen-003b-qa/mobile-375.webm

Chromium only; Safari/Firefox, physical-device smoothness and a production build for this phase are unverified. A hero target initially below the fold (notably the existing Contact CTA on mobile) can complete its CSS entrance before it is scrolled into view; scroll-reveal targets use the observer. Horizontal slide content is intentionally clipped at page boundaries during entry. Existing unrelated Image warnings remain.

No dependency, Git/Vercel configuration, commit, push, merge or deployment changes.
