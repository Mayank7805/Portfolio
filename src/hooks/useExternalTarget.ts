import { useState, useEffect } from "react";

/**
 * Returns `_blank` on desktop (≥1024px) and `_self` on mobile.
 * Updates live on window resize so it stays correct if the user
 * rotates their device or resizes the browser.
 */
export function useExternalTarget() {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    setIsDesktop(mq.matches);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return {
    target: isDesktop ? ("_blank" as const) : ("_self" as const),
    rel: isDesktop ? "noopener noreferrer" : undefined,
  };
}
