import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ["100", "400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Knell",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='light'>
      <body
        className={`${roboto.variable} antialiased bg-primaryBackground text-primaryTextColor dark:bg-darkBackground dark:text-darkTextColor`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
