import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Construction QA | Close the loop on quality",
  description:
    "AI-powered QA for residential builders. Capture issues with photos and voice, assign them to trades, verify corrections, and keep a permanent quality record.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
