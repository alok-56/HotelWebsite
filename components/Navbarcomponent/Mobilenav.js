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
      case "/explore":
        setactiveitem("Explore");
        break;
      case "/booking":
        setactiveitem("Booking");
        break;
      case "/bookings":
        setactiveitem("Bookings");
        break;
      case "/reel":
        setactiveitem("Reel");
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
            key="Explore"
            href="/explore"
            title={
              <div
                onClick={() => router.push("/explore")}
                className="flex flex-col justify-center items-center gap-1"
              >
                <MdOutlineExplore className="h-6 w-6" />
                <span className="text-tiny">Explore</span>
              </div>
            }
          />
          {/* <Tab
            key="Reel"
            href="/reel"
            title={
              <div
                onClick={() => router.push("/reel")}
                className="flex flex-col justify-center items-center gap-1"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="24"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M14.7295 2H9.26953V6.36H14.7295V2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.2305 2V6.36H21.8705C21.3605 3.61 19.3305 2.01 16.2305 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2 7.85938V16.1894C2 19.8294 4.17 21.9994 7.81 21.9994H16.19C19.83 21.9994 22 19.8294 22 16.1894V7.85938H2ZM14.44 16.1794L12.36 17.3794C11.92 17.6294 11.49 17.7594 11.09 17.7594C10.79 17.7594 10.52 17.6894 10.27 17.5494C9.69 17.2194 9.37 16.5394 9.37 15.6594V13.2594C9.37 12.3794 9.69 11.6994 10.27 11.3694C10.85 11.0294 11.59 11.0894 12.36 11.5394L14.44 12.7394C15.21 13.1794 15.63 13.7994 15.63 14.4694C15.63 15.1394 15.2 15.7294 14.44 16.1794Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.76891 2C4.66891 2.01 2.63891 3.61 2.12891 6.36H7.76891V2Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-tiny">Shorts</span>
              </div>
            }
          /> */}
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
          <Tab
            key="Profile"
            href="/profile"
            title={
              <div className="flex flex-col justify-center items-center gap-1">
                <CgProfile className="h-6 w-6" />
                <span className="text-tiny">Profile</span>
              </div>
            }
          />
        </Tabs>
      </div>
    </>
  );
}
