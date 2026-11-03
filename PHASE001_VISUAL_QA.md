# Phase 001 Visual QA

Date: 2026-11-04 (Asia/Jakarta)
Branch: feature/modern-ui-motion

## Environment and evidence

Used the existing Python Playwright installation with headless Chromium; no dependencies added. Ran Next.js development server on localhost:3107 from the existing temporary validation checkout to avoid the workspace .next trace lock. Compared every app file byte-for-byte with the workspace after the fix: identical.

Browser artifacts: C:/Users/pei/AppData/Local/Temp/segen-visual-qa/
- results.json: viewport, console, reduced-motion, overflow and mobile keyboard results.
- interactions.json: JavaScript-disabled visibility, navigation, focus, hover and recorded animation frames/timings.
- 12 full-page screenshots, named WIDTH-home/about/service/contact.png.
- mobile-menu-open.png.

## Results after fix

PASS means no blocking regression in the checks performed; existing warnings below remain.

| Page | 1440 x 900 | 768 x 900 | 375 x 900 |
| --- | --- | --- | --- |
| Home | PASS | PASS | PASS |
| About | PASS with notes | PASS with notes | PASS with notes |
| Service | PASS with notes | PASS with notes | PASS with notes |
| Contact | PASS with notes | PASS with notes | PASS with notes |

- All 12 page/viewport combinations: zero console errors, zero uncaught page errors and no reported hydration mismatch. No horizontal overflow or offscreen elements found by bounding-box checks.
- All reveal elements visible after scrolling. With JavaScript disabled, all reveal elements still rendered with nonzero height and visible styles; no horizontal overflow in all 12 combinations.
- Reduced motion emulation on every page/viewport: media query matched, zero active animations, no hidden reveal elements and scroll-behavior auto.
- Mobile menu on each page: Enter opens; Tab reaches first link; Escape closes and restores focus. Additional checks confirm outside-click dismissal and successful mobile link navigation with menu closed afterward.
- Desktop navigation successfully visits all four routes and updates aria-current.
- Card hover computed transform is translateY(-5px), with gold border highlight; returns to none after pointer exits.
- Keyboard focus outline is visible; contact Name-to-Email Tab order works.
- Recorded motion: opacity 0.35 to 1, translateY 16px to 0, duration 600ms, stagger delays 0/90/180ms. These are bounded entry effects rather than continuous motion. Screenshots show readable content after animation. Subjective motion quality still benefits from human review on a physical device.

## Fixed bug

The mobile toggle rendered a literal question mark in both open and closed states. Replaced the corrupted characters with inline SVG hamburger/close paths. Confirmed both paths and menu behavior in Chromium; screenshots show the corrected icon.

Source file changed during QA: app/components/home/header.jsx only.
Report added: PHASE001_VISUAL_QA.md.

## Existing findings and limits

- Next Image warnings: legacy layout/objectFit props, missing sizes, some dimension/position warnings. About's decorative Vision background has a zero-height parent and does not render; foreground illustration/text remain visible. Left unchanged as an existing visual issue.
- Contact's lower banner contains rasterized text and a CTA-like shape. On mobile its text is very small, and the shape is part of the image rather than an interactive link. Left unchanged to preserve existing structure and behavior.
- Existing contact submit handler still displays its placeholder alert; no delivery integration was changed or tested.
- ESLint remains unconfigured from the previous phase. No new lint setup, package changes or repeat production build. The SVG fix compiled successfully in the dev server and was exercised in browser.
- Browser coverage is Chromium only; Safari/Firefox and physical touch-device behavior remain unverified.
- Screenshots are local temporary artifacts, not committed assets.

## Preservation and readiness

Footer's commented email icon/mailto remain intact. Metadata remains title Segen Digital Indonesia and description Company profile PT Segen Digital Indonesia; browser DOM checks agree on all routes.

Ready for a reviewed commit and Vercel Preview with the nonblocking existing findings above. Previous production build passed before this small SVG-only fix; a new production build was not claimed. Preview itself is not deployed or validated. No commit, push, merge, deployment, business-logic change or Vercel configuration change performed.
