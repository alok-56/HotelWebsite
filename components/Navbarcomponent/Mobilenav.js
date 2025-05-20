"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Tabs, Tab, Chip } from "@heroui/react";
import {
  HomeIcon,
  GridIcon,
  Popcorn,
  MonitorPlay,
  Clapperboard,
} from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineExplore } from "react-icons/md";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function Mobilenav() {
  const [isOpen, Setopen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState("Home");
  const [activeitem, setactiveitem] = useState();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setactiveitem("home");
        break;
      case "/hotel":
        setactiveitem("Hotels");
        break;
      case "/booking":
        setactiveitem("Booking");
        break;
      case "/bookings":
        setactiveitem("Bookings");
        break;
      case "/profile":
        setactiveitem("Profile");
        break;
      default:
        setactiveitem("home");
    }
  }, [pathname]);

  return (
    <>
      <div className="fixed z-50 md:hidden bottom-0 left-0 w-full right-0 flex justify-center items-center bg-white border-t border-gray-200">
        <Tabs
          className="w-full"
          aria-label="Bottom Navigation"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative   rounded-none p-2  border-b border-divider",
            cursor: "w-full bg-blue-900 ",
            tab: "w-full px-0 h-12 flex flex-col justify-center items-center",
            tabContent: "group-data-[selected=true]:text-[#004AAD] ",
          }}
          selectedKey={activeitem}
          onSelectionChange={setactiveitem}
        >
          <Tab
            key="home"
            href="/"
            title={
              <div
                onClick={() => router.push("/")}
                className="flex flex-col justify-center items-center gap-1"
              >
                <HomeIcon className="h-6 w-6" />
                <span className="text-tiny">Home</span>
              </div>
            }
          />
          <Tab
            key="Hotels"
            href="/hotel"
            title={
              <div
                onClick={() => router.push("/hotel")}
                className="flex flex-col justify-center items-center gap-1"
              >
                <MdOutlineExplore className="h-6 w-6" />
                <span className="text-tiny">Hotels</span>
              </div>
            }
          />
          <Tab
            key="Booking"
            href="/booking"
            title={
              <div
                onClick={() => router.push("/booking")}
                className="flex flex-col justify-center items-center gap-1"
              >
                <TbBrandBooking className="h-6 w-6" />
                <span className="text-tiny">Booking</span>
              </div>
            }
          />
          {/* <Tab
            key="Profile"
            href="/profile"
            title={
              <div className="flex flex-col justify-center items-center gap-1">
                <CgProfile className="h-6 w-6" />
                <span className="text-tiny">Profile</span>
              </div>
            }
          /> */}
        </Tabs>
      </div>
    </>
  );
}
