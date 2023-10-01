import { useEffect, useState } from "react";

export function useResizeObserver(elementRef: HTMLElement | null) {
  const [entry, setEntry] = useState<ResizeObserverEntry>();

  const updateEntry = ([entry]: ResizeObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const hasROSupport = !!window.ResizeObserver;

    if (!elementRef || !hasROSupport) {
      return;
    }

    const resizeObserver = new ResizeObserver(updateEntry);

    resizeObserver.observe(elementRef);
    return () => {
      resizeObserver.disconnect();
    };
  }, [elementRef]);

  return entry;
}
