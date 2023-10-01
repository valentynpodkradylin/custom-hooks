import { useIntersectionObserver } from ".";
import { useRef } from "react";

export function useVisibleIntersection<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit,
  freezeOnceVisible = false
) {
  const elementRef = useRef<T>(null);

  const entry = useIntersectionObserver(elementRef, {
    ...options,
    freezeOnceVisible,
  });

  const isVisible = entry?.isIntersecting;

  return { elementRef, isVisible };
}
