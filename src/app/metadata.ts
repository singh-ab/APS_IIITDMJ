import type { Metadata } from "next";

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