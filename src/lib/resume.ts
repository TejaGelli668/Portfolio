/**
 * Single source of truth for the resume download.
 *
 * Served as a real file link rather than a synthetic click, so the browser's own
 * affordances work: cmd-click, in-browser preview, hover URL, and a visible 404
 * if the file is ever missing instead of a silent no-op.
 */
export const RESUME_PATH = "/Teja-Gelli-Resume-2026-08.pdf";
export const RESUME_FILENAME = "Teja-Gelli-Resume.pdf";
