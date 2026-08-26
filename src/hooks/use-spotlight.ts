import type { MouseEvent } from "react";

/**
 * Feeds the pointer position into `--mx` / `--my` so `.spotlight` can track it.
 * Attach to any element that also carries the `spotlight` class.
 */
export const onSpotlightMove = (event: MouseEvent<HTMLElement>) => {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  el.style.setProperty("--my", `${event.clientY - rect.top}px`);
};
