import "./globals.css";

import {Footer} from "@/components";
import {NavBar} from "@/components";

export const metadata = {
  title: "Carz",
  description: "Eplore the world of cars",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}