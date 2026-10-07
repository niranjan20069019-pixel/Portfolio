import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NIRANJAN K — AI & ML Engineering Student",
  description:
    "Portfolio of Niranjan K — AI & ML Engineering student focused on software development and AI-powered applications.",
  openGraph: {
    title: "NIRANJAN K — AI & ML Engineering Student",
    description:
      "AI & ML Engineering student building practical projects in software development and AI-powered web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-950 font-[family-name:var(--font-body)] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
