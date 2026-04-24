import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Globalink",
  description: "Globalink - Government-grade compliance, marketplace and consultancy platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}