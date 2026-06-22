import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anastasia-liem-portfolio.vercel.app"),
  title: "Anastasia Liem — Talent Acquisition & HR Professional",
  description:
    "Portfolio Anastasia Liem. Talent Acquisition Specialist & HR Professional based in Tangerang, Indonesia. Expert in candidate sourcing, screening, and psychological assessment.",
  keywords: [
    "Anastasia Liem",
    "Talent Acquisition",
    "HR Professional",
    "Recruiter Indonesia",
    "Human Resources",
  ],
  authors: [{ name: "Anastasia Liem" }],
  openGraph: {
    title: "Anastasia Liem — Talent Acquisition & HR Professional",
    description:
      "Portfolio Anastasia Liem. Talent Acquisition Specialist & HR Professional based in Tangerang, Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-body antialiased text-navy bg-bg-base">{children}</body>
    </html>
  );
}
