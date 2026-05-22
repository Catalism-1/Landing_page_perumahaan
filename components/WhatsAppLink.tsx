"use client";

import { FB_PIXEL_ID } from "@/lib/fpixel";

interface Props {
  href: string;
  className?: string;
  source?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function WhatsAppLink({
  href,
  className,
  source = "whatsapp_button",
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  ariaLabel,
  onClick,
  style,
}: Props) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (onClick) onClick();

    if (FB_PIXEL_ID && typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "Ayyana Residence Pringgabaya",
        content_category: "Rumah Subsidi",
        lead_source: source,
      });
    }

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  }

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={handleClick}
      style={style}
    >
      {children}
    </a>
  );
}
