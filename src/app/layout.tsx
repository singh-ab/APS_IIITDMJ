import { Inter } from "next/font/google";
import "./globals.css";
import LoaderWrapper from "../components/LoaderWrapper"; // Adjust the path if needed
import Footer from "../components/ui/footer/footer"; // Import the Footer component
import { Suspense } from "react";
import Loader from "../components/loader"; // Import the Loader component

const inter = Inter({ subsets: ["latin"] });
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "APS IIITDMJ",
  description: "Astronomy And Physics Society of IIITDM Jabalpur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loader />}>
          <LoaderWrapper>{children}</LoaderWrapper>
        </Suspense>
        <Footer /> {/* Add the Footer component here */}
      </body>
    </html>
  );
}
