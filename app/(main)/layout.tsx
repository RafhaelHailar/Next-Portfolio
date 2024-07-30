import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Montserrat({ weight: ["700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafhael Hailar",
  description: "Rafhael Hailar Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " flex overflow-hidden dark"}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
