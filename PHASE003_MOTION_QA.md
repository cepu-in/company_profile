# Phase 003: motion implementation and QA

Branch: feature/modern-ui-motion. Date: 2026-11-04.

## Audit

The previous IntersectionObserver did trigger (also confirmed by Phase 002B recordings). There was no evidence that CSS was preventing playback. Its first frame was already 35% opaque, with only 16px travel. Hero copy moved as one block rather than a heading/description sequence. Without backward fill, content stayed fully visible during stagger delays, then started fading. Phase 001 tests mostly checked final visibility and recorded animation parameters rather than interpolated visual states. The former 12% threshold also waited longer for large sections; it was not the primary cause.

## Changes

- app/components/home/motion.jsx: preserve observer/WAAPI architecture; opacity 0 to 1, Y 28px to 0, 680ms ease-out, backward fill during stagger, 1% threshold and 40px bottom root margin. Unobserve after first entry. Catch unsupported animation failures. Cancel running animations and disconnect the observer when reduced motion becomes active. Cleanup on route changes.
- app/assets/scss/enhancements.scss: CSS entrance at first paint, independent of hydration; navbar 400ms fade, heading 680ms/Y24px, description +120ms, illustration 720ms/scale .97 with +240ms delay, existing CTA +360ms. Destination content fade .65 to 1 over 420ms prevents an entirely blank content frame. CSS keyframes end at normal baseline with no permanent hidden state. Existing reduced-motion rules and no-preference media query suppress animation. Removed a corrupted encoding prefix from the opening comment.
- app/page.jsx: separate hero targets; heading/description reveal and four individually staggered partner logos. Existing partner appearance/content intact.
- app/about/page.jsx: separate hero targets; preserve Vision reveal, stagger values, reveal values heading and illustration.
- app/service/page.jsx: separate hero targets and 0/120/240ms card stagger. Three services retained.
- app/contact/page.jsx: separate heading/description/image/existing CTA entrance; reveal form controls and existing lower contact banner.
- app/components/home/header.jsx: motion attribute on navbar content.
- app/components/home/footer.jsx: reveal existing contact block; no new footer CTA or text.

All edits are motion attributes, motion logic or motion styles. JSX visible text comparison against the pre-Phase-003 snapshot found no changes. No asset writes, dependency changes, SEO changes, Blockchain restoration or Partituro identity changes.

## Navigation decision

Use destination fade-in only. Pages currently own their own header/content rather than a shared transition boundary. A reliable outgoing fade would require delaying/intercepting Link navigation, handling history/modifiers and pending routes. That would broaden architecture and could slow navigation. Native Next Link routing is unchanged; CSS entrance restarts on mounted destination elements and the observer reinitializes on pathname changes.

## Actual browser evidence

Used existing Playwright Python and Chromium. Tested 1440x900 and 375x900 against an app-source-identical temporary checkout on localhost:3107 to avoid the workspace .next lock. Recorded computed opacity/transform with requestAnimationFrame; initial CSS samples captured from first active animation frame. No reliance on only final visibility.

| Target | Initial | Intermediate | Final |
| --- | --- | --- | --- |
| Desktop Home heading | opacity 0, Y24px | opacity .909, Y2.18px | opacity 1, transform none |
| Mobile Home heading | opacity 0, Y24px | opacity .786, Y5.15px | opacity 1, transform none |
| Desktop logo after scroll | opacity 0, Y28px | opacity .858, Y3.98px | opacity 1, transform none |
| Mobile logo after scroll | opacity 0, Y28px | opacity .858, Y3.97px | opacity 1, transform none |
| Desktop navbar | opacity 0 | opacity .488 | opacity 1 |
| Destination content | opacity .65 | opacity about .92-.94 | opacity 1 |

- Before scroll, the Partituro logo was below the viewport (top about 1500px desktop / 2168px mobile), unanimated and at normal baseline opacity. Crossing the early observer boundary started its recorded animation. Its icon/wordmark layout is unchanged.
- Home -> Services -> About -> Contact through actual desktop/mobile navigation: entrance samples start at opacity 0, interpolate, and end at 1 on each destination. Observer records also confirm destination card/content reveals.
- Same logo scrolled away/back: animation call count stays 1 on desktop and mobile. An earlier aggregate-count probe included newly revealed footer elements; the per-element check resolves that test ambiguity.
- All tested destination content finishes visible; zero console/page errors or reported hydration mismatch. No horizontal overflow in tested routes/widths.
- All four routes at both widths with reduced motion: zero active animations and zero invisible motion targets.
- Dynamic reduced motion: 5 active animations before changing preference; 0 afterward, with no invisible targets.
- All four routes at both widths with JavaScript disabled: CSS entrance completes, no hidden motion targets or horizontal overflow. Observer targets have no persistent hidden style.
- Dev compilation and diff whitespace check pass. Production build and unrelated Phase 001/002 QA were not repeated.

Evidence files (local temporary artifacts):
C:/Users/pei/AppData/Local/Temp/segen-003-qa/frame-evidence.json
C:/Users/pei/AppData/Local/Temp/segen-003-qa/fallback.json
C:/Users/pei/AppData/Local/Temp/segen-003-qa/once-only.json

## Limits

Chromium only; physical devices, Safari/Firefox and production build for this phase were not tested. CSS entrance starts even without JavaScript and completes within 1.04 seconds; content is temporarily transparent during that intentional entrance, never permanently hidden. Below-viewport CSS hero targets may finish before a visitor reaches them; scroll-reveal targets trigger on entry. No outgoing fade. Existing unrelated Image warnings remain outside this motion-only task.

No commit, push, merge or deployment performed.
