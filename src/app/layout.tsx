import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/aps.png";
//import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "APS IIITDMJ",
  description: "Astronomy And Physics Society of IIITDM Jabalpur",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "../../public/aps.png",
        href: "../../public/aps.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "../../public/aps.png",
        href: "../../public/aps.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
