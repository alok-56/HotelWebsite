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
import Profileavatar from "./Profile";
import Mobilenav from "./Sidenav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import Loginpage from "../Logincomponents/Loginpage";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      className="w-full h-20 border-b border-gray-300"
    >
      <NavbarBrand className="-ml-4">
        <AcmeLogo />
        <p className="font-bold  text-inherit">BRILL ROOMS</p>
      </NavbarBrand>

      <div className="items-center space-x-6 hidden md:flex">
        <Link href="/" className="text-gray-700 hover:text-blue-900 ">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-900 ">
          About Us
        </Link>
        <Link href="/b2b" className="text-gray-700 hover:text-blue-900 ">
          B2B
        </Link>

        <div className="relative group">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <p
                variant="ghost"
                className="flex items-center text-gray-700 hover:text-gray-900 gap-1  py-2 rounded-md"
              >
                Properties
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-60 z-50">
              <DropdownMenuItem>
                {" "}
                <Link
                  href="/properties/1"
                  className="block px-4 py-2 text-gray-700  hover:text-blue-900 text-sm"
                >
                  Brills Rooms
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <Link
                  href="/properties/2"
                  className="block px-4 py-2 text-gray-700  hover:text-blue-900 text-sm"
                >
                  Hotel Raj Palace
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <Link
                  href="/properties/1"
                  className="block px-4 py-2 text-gray-700  hover:text-blue-900 text-sm"
                >
                  Brill A G Star
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <Link
                  href="/properties/1"
                  className="block px-4 py-2 text-gray-700  hover:text-blue-900 text-sm"
                >
                  Hotel Lake View Royal
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <Link
                  href="/properties/1"
                  className="block px-4 py-2 text-gray-700  hover:text-blue-900 text-sm"
                >
                  Manner Residency
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Link href="/contactus" className="text-gray-700 hover:text-blue-900 ">
          Contact Us
        </Link>
      </div>

        <Loginpage/>
      {/* <Avatar className="hidden lg:block" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" /> */}
      <Mobilenav />
    </Navbar>
  );
}
