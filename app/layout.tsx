import type { Metadata } from "next";
import { Italiana, DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Makeover by Jo | Jothi Arumugam",
  description:
    "Discover bridal makeup, hairstyling, and saree draping by Jothi Arumugam of Makeover by Jo. Thoughtful beauty styling for weddings and special occasions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${italiana.variable} ${dmSerifDisplay.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}