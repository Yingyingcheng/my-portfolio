import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Only keep Montserrat
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dorischeng.vercel.app"),
  title: "Doris Cheng — Software Designer & Developer",
  description:
    "Portfolio of Doris (Ying Ying) Cheng, a software designer and developer in San Francisco building clean, high-impact web experiences.",
  openGraph: {
    title: "Doris Cheng — Software Designer & Developer",
    description:
      "Portfolio of Doris (Ying Ying) Cheng, a software designer and developer in San Francisco.",
    url: "https://dorischeng.vercel.app",
    siteName: "Doris Cheng",
    images: [{ url: "/DorisCheng.png", width: 1728, height: 1526 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doris Cheng — Software Designer & Developer",
    description:
      "Portfolio of Doris (Ying Ying) Cheng, a software designer and developer in San Francisco.",
    images: ["/DorisCheng.png"],
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
