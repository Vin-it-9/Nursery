import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Krushna Nursery satara | Plant Nursery in Satara",
  description:
    "Explore healthy indoor plants, outdoor plants, succulents, flowering plants, pots, and simple care guidance from a local nursery in Satara.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link
        href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800&f[]=satoshi@400,500,600,700&display=swap"
        rel="stylesheet"
      />
    </head>

    <body className="min-h-screen font-sans antialiased">
    <Navbar />
    {children}
    </body>
    </html>
  );
}
