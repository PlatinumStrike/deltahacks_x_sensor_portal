import type { Metadata } from "next";
import { inter } from "@/app/resources/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Community Environment Module Portal",
  description: "Keep track of your communitiy's environmental statistics!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
