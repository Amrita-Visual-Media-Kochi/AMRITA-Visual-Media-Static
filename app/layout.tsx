import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Amrita Visual Media | Coming Soon",
  description:
    "Amrita Visual Media - Amrita Vishwa Vidyapeetham, Kochi Campus. Something amazing is coming soon.",
  keywords: [
    "Amrita",
    "Visual Media",
    "Kochi",
    "Amrita Vishwa Vidyapeetham",
    "Coming Soon",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
