import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Construction QA | Prove the quality of every home", description: "Keep the evidence behind every approved fix. Photo and voice capture, account-free trade links and builder review for custom home builders. Join a founder-led pilot in Austin." };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
