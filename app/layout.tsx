import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RumahPertama — Konsultan Properti #1 Anak Muda Indonesia",
  description:
    "Wujudkan rumah pertama kamu bareng RumahPertama. Konsultasi gratis, bank partner resmi, pendampingan sampai akad.",
  openGraph: {
    title: "RumahPertama — Konsultan Properti #1 Anak Muda Indonesia",
    description:
      "Wujudkan rumah pertama kamu bareng RumahPertama. Konsultasi gratis, bank partner resmi, pendampingan sampai akad.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
