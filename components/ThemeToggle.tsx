"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

interface Props {
  scrolled?: boolean;
}

export default function ThemeToggle({ scrolled = true }: Props) {
  const { theme, toggleTheme } = useTheme();

  const iconColor = scrolled
    ? theme === "light"
      ? "var(--rp-dark)"
      : "#F8FAF9"
    : "#FFFFFF";

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Aktifkan mode gelap" : "Aktifkan mode terang"}
      className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-black/5 dark:hover:bg-white/10"
    >
      {theme === "light" ? (
        <Moon size={18} style={{ color: iconColor }} />
      ) : (
        <Sun size={18} style={{ color: iconColor }} />
      )}
    </button>
  );
}
