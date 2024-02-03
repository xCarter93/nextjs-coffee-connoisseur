import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { getDomain } from "@/utils";

const outfit = Outfit({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Coffee Connoisseur",
  description: "Find great coffee shops near you!",
  metadataBase: getDomain(),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
