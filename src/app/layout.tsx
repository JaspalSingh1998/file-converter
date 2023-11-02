import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alterigo - Free unlimited in-browser file converter.",
  description:
    "Welcome to Alterigo - Your Ultimate File Conversion Companion. Transform, modify, and adapt files effortlessly with our intuitive file converter application. Whether you need to switch formats, adjust settings, or enhance your documents, Alterigo is here to simplify the process. Experience seamless file transformations with Alterigo today!",
  creator: "Jaspal Singh",
  keywords:
    "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
          {children}
        </div>
      </body>
    </html>
  );
}
