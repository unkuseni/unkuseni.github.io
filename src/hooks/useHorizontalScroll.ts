import { useEffect, useRef } from "react";

/**
 * Translates vertical wheel/trackpad events into horizontal scrolling
 * on the target element. Makes horizontal-scroll layouts feel natural —
 * the user just scrolls as usual and the container moves sideways.
 *
 * Only activates on devices with fine pointers (desktop with mouse/trackpad).
 * On touch devices, native horizontal swipe is preserved.
 */
export function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Only intercept wheel on non-touch devices
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const handleWheel = (e: WheelEvent) => {
      // If the user is intentionally scrolling horizontally (trackpad gesture),
      // let the native behavior handle it
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return containerRef;
}
