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
  title: "Nivethitha Makeover Artistry",
  description:
    "Bridal makeup, hairstyling, saree draping and nail artistry by Nivethitha Makeover Artistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${italiana.variable} ${dmSerifDisplay.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}