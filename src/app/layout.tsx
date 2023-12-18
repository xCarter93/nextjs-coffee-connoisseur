import type { Metadata } from "next";
import { Inter, Lilita_One } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });
const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffee Connoisseur",
  description: "An app to help you find the best cup of coffee near you!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="" lang="en">
      <body
        className={`flex min-h-[100vh] flex-col items-center justify-between bg-gradient-to-br from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% ${lilita.className}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
