import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Roboto({ weight: ["700"], subsets: ["latin"] });

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
      <body className={inter.className + " flex"}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
