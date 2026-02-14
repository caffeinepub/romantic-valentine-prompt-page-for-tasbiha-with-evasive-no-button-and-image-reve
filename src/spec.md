# Specification

## Summary
**Goal:** Create a lightweight, single-screen romantic Valentine prompt page addressed to Tasbiha with “Yes” and an effectively unclickable “No”, and reveal the provided image after “Yes”.

**Planned changes:**
- Build a single-page romantic prompt in English asking “Tasbiha” to be the user’s Valentine, showing exactly two buttons: “Yes” and “No”.
- Implement evasive behavior for the “No” button on both hover (desktop) and touch attempts (mobile/tablet), keeping it within the viewport while preventing successful clicks/taps.
- Keep the “Yes” button stable; on click/tap, transition to a celebratory confirmation view and display the user-provided image exactly as provided.
- Apply a cohesive pink-and-white romantic theme with responsive, touch-friendly layout for Chrome on iPad and phones.
- Ensure the experience is fully frontend-only with no backend dependencies.

**User-visible outcome:** The user sees a romantic Valentine question for Tasbiha with “Yes” and “No”; “No” playfully moves away on desktop and mobile, and tapping “Yes” shows a celebration view with the provided image.
