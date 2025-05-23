import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Mobilenav from "@/components/Navbarcomponent/Mobilenav";
import HotelFooter from "@/components/Footercomponents/Footer";
import Nav from "@/components/Navbarcomponent/Nav";
import { Providers } from "@/lib/Redux/provider";
import Newnavbar from "@/components/Navbarcomponent/Newnav";
export const metadata = {
  title: "BRILL ROOMS",
  description: "BRILL ROOMS",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en" suppressHydrationWarning>
        <body>
          <Providers>
            <Newnavbar/>
            {children}
            <HotelFooter />
            <Mobilenav />
          </Providers>
        </body>
      </html>
    </Providers>
  );
}
