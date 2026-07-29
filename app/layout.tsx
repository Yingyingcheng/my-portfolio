import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Only keep Montserrat
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dorischeng.dev"),
  title: "Doris Cheng — Software Designer & Developer",
  description:
    "Portfolio of Doris (Ying Ying) Cheng, a software designer and developer in San Francisco building clean, high-impact web experiences.",
  openGraph: {
    title: "Doris Cheng — Software Designer & Developer",
    description:
      "Portfolio of Doris (Ying Ying) Cheng, a software designer and developer in San Francisco.",
    url: "https://dorischeng.dev",
    siteName: "Doris Cheng",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Doris Cheng — Software Designer & Developer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doris Cheng — Software Designer & Developer",
    description:
      "Portfolio of Doris (Ying Ying) Cheng, a software designer and developer in San Francisco.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
