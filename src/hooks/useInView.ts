import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that tracks whether an element is visible in the viewport
 * using the Intersection Observer API.
 *
 * @param options - IntersectionObserver options (threshold, rootMargin, etc.)
 * @returns A tuple of [ref, isInView] - attach ref to the element to observe
 *
 * @example
 * const [ref, isInView] = useInView({ threshold: 0.2 });
 * return <div ref={ref}>{isInView ? "Visible!" : "Hidden"}</div>;
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = {}
): [React.RefObject<T | null>, boolean] {
  const elementRef = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isInView];
}
