import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  variable: "--font-instrument",
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgroTucks — Grow What Lagos Can't Give You",
  description: "Countryside Farmstead Community. Your land. Your food. Your future.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${instrumentSerif.variable} ${outfit.variable} min-h-screen bg-[#0a0a0a] font-sans text-[#f7f3eb] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
