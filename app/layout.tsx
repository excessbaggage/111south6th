import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "111 S 6th St | Historic 3BD/3BA Home | Fernandina Beach, FL — $999,000",
  description:
    "Circa 1884 historic home in Fernandina Beach's National Register District. 3 bed, 3 bath, Thermador kitchen, two fireplaces. Featured on 2024 Garden Tours. $999,000.",
  keywords: [
    "Fernandina Beach real estate",
    "historic home for sale",
    "Amelia Island property",
    "luxury home Fernandina Beach",
    "National Register Historic District",
    "Silk Stocking District",
    "111 S 6th St",
    "Victorian home Florida",
  ],
  openGraph: {
    title: "111 S 6th St | Historic Home in Fernandina Beach, FL — $999,000",
    description:
      "Circa 1884 historic home in the Silk Stocking District. 3 bed, 3 bath, 2,189 sqft. Thermador kitchen, two working fireplaces. Featured on 2024 Amelia Island Cottages & Garden Tours.",
    url: "https://111south6th.com",
    siteName: "111 S 6th St — Fernandina Beach",
    images: [
      {
        url: "https://photos.zillowstatic.com/fp/a58f1d0b3943b31133d16105469b0c93-uncropped_scaled_within_1536_1152.webp",
        width: 1536,
        height: 1152,
        alt: "111 S 6th St — Historic home exterior in Fernandina Beach, FL",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "111 S 6th St | Fernandina Beach, FL — $999,000",
    description:
      "Circa 1884 historic home in the National Register District. 3BD/3BA, Thermador kitchen, two fireplaces.",
    images: [
      "https://photos.zillowstatic.com/fp/a58f1d0b3943b31133d16105469b0c93-uncropped_scaled_within_1536_1152.webp",
    ],
  },
  alternates: {
    canonical: "https://111south6th.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="bg-cream text-charcoal font-body antialiased">
        {children}
      </body>
    </html>
  );
}
