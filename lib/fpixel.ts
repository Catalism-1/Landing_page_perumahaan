export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1549309349959177";

declare global {
  interface Window {
    fbq: ((...args: unknown[]) => void) | undefined;
    _fbq: ((...args: unknown[]) => void) | undefined;
  }
}

export function pageview() {
  if (!FB_PIXEL_ID) return;
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
}

export function event(name: string, options: Record<string, string> = {}) {
  if (!FB_PIXEL_ID) return;
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", name, options);
  }
}

export function lead(source: string, extraParams: Record<string, string> = {}) {
  event("Lead", {
    content_name: "Ayyana Residence Pringgabaya",
    content_category: "Rumah Subsidi",
    lead_source: source,
    ...extraParams,
  });
}
