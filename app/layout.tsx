import "./globals.css";

import { BackgroundBeams, Footer } from "@/components";
import { NavBar } from "@/components";
import { NextUIProvider } from "@nextui-org/react";
export const metadata = {
  title: "Carz",
  description: "Eplore the world of cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-gray-800">
        <NextUIProvider>
          <NavBar />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
