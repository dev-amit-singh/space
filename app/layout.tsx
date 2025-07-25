import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/main/Navbar";
import "./globals.css";


const inter = Inter({subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code in Space",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black overflow-x-hidden overflow-y-scroll`}>
        {children}
        
        <Navbar/>
      </body>
    </html>
  );
}
