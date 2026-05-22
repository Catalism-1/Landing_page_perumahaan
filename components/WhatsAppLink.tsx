"use client";

import { lead } from "@/lib/fpixel";

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
    lead(source);
    if (onClick) onClick();
    setTimeout(() => {
      window.open(href, target || "_blank", rel === "noopener noreferrer" ? "noopener,noreferrer" : undefined);
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
