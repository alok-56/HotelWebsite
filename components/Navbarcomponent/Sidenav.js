"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { Button, Divider } from "@heroui/react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
  ChevronRight,
  Handshake,
  House,
  SearchSlash,
  SmilePlus,
  BookImage,
  Headset,
  Rss,
  TicketSlash,
  GlobeLock,
  HandPlatter,
  SquareArrowOutUpRight 
} from "lucide-react";
import { Avatar } from "@heroui/react";

const navigationItems = [
  { name: "Home", href: "/", icon: <House strokeWidth={1.5} /> },
  { name: "About Us", href: "/about", icon: <SearchSlash strokeWidth={1.5} /> },
  {
    name: "B2B",
    href: "/b2b",
    icon: <HandPlatter strokeWidth={1.5} />,
  },
  { name: "Properties", href: "/HOTEL", icon: <SmilePlus strokeWidth={1.5} /> },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
    icon: <GlobeLock strokeWidth={1.5} />,
  },
  {
    name: "Terms & conditions",
    href: "/terms-and-conditions",
    icon: <Handshake strokeWidth={1.5} />,
  },
  { name: "Contact Us", href: "/contact", icon: <Headset strokeWidth={1.5} /> },
];

export default function Mobilenav() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const path = usePathname();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="light" isIconOnly className="lg:hidden">
          <Menu className="h-6 text-black w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
        <Avatar className="lg:hidden" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

        </SheetHeader>
        <nav className="mt-14 flex flex-col justify-between gap-3">
          {navigationItems.map((item) => (
            <>
              <div
                key={item.name}
                onClick={() => {
                  router.push(item.href), setOpen(false);
                }}
                className="w-full flex justify-between items-center"
              >
                <span
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 w-full",
                    item.href === path && "text-blue-900"
                  )}
                >
                  {item.icon}
                  {item.name}
                </span>
                <ChevronRight className="text-gray-300" />
              </div>
              <Divider />
            </>
          ))}
          <Button
            onPress={() => {
              router.push("/"), setOpen(false);
            }}
            className="px-8 py-0.5 rounded-sm w-full mt-auto border-none hover:bg-[#004AAD] bg-blue-900 border-black dark:border-white uppercase text-white  transition duration-200 text-sm "
          >
            BOOK NOW
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
