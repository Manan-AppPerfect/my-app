import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import { CartProvider } from "@/context/Cart/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini-Commerce",
  description: "E-commerce website for learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
          <CartProvider>
            <div className="container">
              <Navbar />
              <hr className="my-4 border-gray-300" />
              <main className="mt-6">
                {children}
              </main>
            </div>
          </CartProvider>
      </body>
    </html>
  );
}
