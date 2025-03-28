"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { Avatar } from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Nav() {
  return (
    <Navbar shouldHideOnScroll maxWidth="full" className="w-full h-20">
      <NavbarBrand className="-ml-4">
        <AcmeLogo />
        <p className="font-bold  text-inherit">HOTEL BOOKING</p>
      </NavbarBrand>

      <div className="items-center space-x-6 hidden md:flex">
        <Link href="/" className="text-gray-700 hover:text-[#106C83] ">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-[#106C83] ">
          About Us
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-[#106C83] ">
          B2B
        </Link>

        <div className="relative group">
          <button className="flex items-center text-gray-700 hover:text-[#106C83] ">
            Properties
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
          <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg rounded-md w-48 mt-1">
            <div className="py-1">
              <Link
                href="/properties/1"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-[#106C83] text-sm"
              >
                Brills Rooms
              </Link>
              <Link
                href="/properties/2"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-[#106C83] text-sm"
              >
                Hotel Raj Palace
              </Link>
              <Link
                href="/category/accessories"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-[#106C83] text-sm"
              >
                Brill A G Star
              </Link>
              <Link
                href="/category/accessories"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-[#106C83] text-sm"
              >
                Hotel Lake View Royal
              </Link>
              <Link
                href="/category/accessories"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-[#106C83] text-sm"
              >
                Manner Residency
              </Link>
            </div>
          </div>
        </div>

        <Link href="/contact" className="text-gray-700 hover:text-[#106C83] ">
          Contact Us
        </Link>
      </div>
      
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
    </Navbar>
  );
}
