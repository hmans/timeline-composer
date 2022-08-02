---
"timeline-composer": patch
---

**Fixed:** Queued animation frames are now cancelled through `cancelAnimationFrame` on unmount of components using `useAnimationFrame`, fixing a bug where they would perform one extra frame after unmounting.
