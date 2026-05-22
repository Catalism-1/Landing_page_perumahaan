import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "RumahPertama — Konsultasi Rumah Pertama, Cari yang Cocok",
  description:
    "Cari rumah pertama? Konsultasi dulu biar tidak salah pilih. RumahPertama bantu cek kebutuhan, syarat, estimasi cicilan, dan arahkan ke proyek yang cocok.",
  openGraph: {
    title: "RumahPertama — Konsultasi Rumah Pertama, Cari yang Cocok",
    description:
      "Cari rumah pertama? Konsultasi dulu biar tidak salah pilih. RumahPertama bantu cek kebutuhan, syarat, estimasi cicilan, dan arahkan ke proyek yang cocok.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('rumahpertama-theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <MetaPixel />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
