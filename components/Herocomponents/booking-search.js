"use client";

import { useState, useEffect } from "react";
import { CalendarIcon, MapPin, Users, ChevronDown, Search } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { fetchallhotels } from "@/lib/Redux/hotelSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setDestination,
  setCheckIn,
  setCheckOut,
  setGuests,
} from "@/lib/Redux/bookingSlice";

export default function BookingSearch({ className }) {
  const { destination, hotelId, checkIn, checkOut, guests } = useSelector(
    (state) => state.booking
  );

  console.log(destination,hotelId,checkIn,checkOut,guests)

  const [scrolled, setScrolled] = useState(false);
  // const [destination, setDestination] = useState("");
  const [hotelid, sethotelid] = useState("");
  // const [checkIn, setCheckIn] = useState(null);
  // const [checkOut, setCheckOut] = useState(null);
  // const [guests, setGuests] = useState({
  //   rooms: 1,
  //   adults: 1,
  //   children: 0,
  // });
  const [openPopover, setOpenPopover] = useState(null);
  const { Hotels, loading } = useSelector((state) => state.hotel);
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleGuestChange = (type, value) => {
    if (value < 0) return;
    dispatch(setGuests({ [type]: value }));
  };

  const handleSearch = () => {
  if (!checkIn || !checkOut || !hotelId) return;
    router.push(`/overview/${hotelId}`);
  };

  const popularDestinations = [
    "Brills Rooms",
    "Hotel Raj Palace",
    "Brill A G Star",
    "Hotel Lake View Royal",
    "Manner Residency",
  ];

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "top-0 px-4 md:px-8 lg:px-16"
          : "top-0 px-6 md:px-12 lg:px-24",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl overflow-hidden rounded-lg shadow-lg transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-sm" : "bg-white"
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Destination */}
          <div className="relative border-b md:border-b-0 md:border-r">
            <Popover
              open={openPopover === "destination"}
              onOpenChange={(open) =>
                setOpenPopover(open ? "destination" : null)
              }
            >
              <PopoverTrigger asChild>
                <div className="flex cursor-pointer items-center p-4 hover:bg-gray-50">
                  <div className="flex-1 items-center justify-center flex-col">
                    <div className="text-sm font-medium text-gray-800">
                      Hotel
                    </div>
                    <div className="flex items-center justify-center gap-2 pt-1">
                      <MapPin className="h-4 w-4 text-blue-900" />
                      <span className="text-sm text-gray-600">
                        {destination || "Select Hotel"}
                      </span>
                    </div>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="center">
                <div className="p-4 flex justify-center items-center mx-auto flex-col">
                  <div className="mb-2 text-sm font-medium text-gray-800">
                    Popular Hotels
                  </div>
                  <div className="max-h-[300px] w-60 overflow-y-auto flex justify-center items-center mx-auto flex-col ">
                    {Hotels?.map((hotel, index) => (
                      <div
                        key={index}
                        className="cursor-pointer rounded-md p-2 hover:bg-blue-50"
                        onClick={() => {
                          dispatch(
                            setDestination({
                              destination: hotel?.Heading,
                              hotelId: hotel?._id,
                            })
                          );
                          setOpenPopover(null);
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{hotel?.Heading}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Check In */}
          <div className="relative border-b md:border-b-0 md:border-r">
            <Popover
              open={openPopover === "checkIn"}
              onOpenChange={(open) => setOpenPopover(open ? "checkIn" : null)}
            >
              <PopoverTrigger asChild>
                <div className="flex cursor-pointer items-center p-4 hover:bg-gray-50">
                  <div className="flex-1 flex-col justify-center">
                    <div className="text-sm font-medium text-gray-800">
                      Check In
                    </div>
                    <div className="flex items-center gap-2 pt-1 justify-center">
                      <CalendarIcon className="h-4 w-4 text-blue-900" />
                      <span className="text-sm text-gray-600">
                        {checkIn
                          ? format(checkIn, "MMM dd, yyyy")
                          : "Select Date"}
                      </span>
                    </div>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  mode="single"
                  selected={checkIn || undefined}
                  onSelect={(date) => {
                    dispatch(setCheckIn(date));
                    setOpenPopover(null);
                    // If check-out is before check-in, reset it
                    if (checkOut && date && date > checkOut) {
                      setCheckOut(null);
                    }
                  }}
                  initialFocus
                  disabled={(date) =>
                    date < new Date(new Date().setHours(0, 0, 0, 0))
                  }
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check Out */}
          <div className="relative border-b md:border-b-0 md:border-r">
            <Popover
              open={openPopover === "checkOut"}
              onOpenChange={(open) => setOpenPopover(open ? "checkOut" : null)}
            >
              <PopoverTrigger asChild>
                <div className="flex cursor-pointer items-center p-4 hover:bg-gray-50">
                  <div className="flex-1 flex-col justify-center">
                    <div className="text-sm font-medium text-gray-800">
                      Check Out
                    </div>
                    <div className="flex items-center gap-2 pt-1 justify-center">
                      <CalendarIcon className="h-4 w-4 text-blue-900" />
                      <span className="text-sm text-gray-600">
                        {checkOut
                          ? format(checkOut, "MMM dd, yyyy")
                          : "Select Date"}
                      </span>
                    </div>
                  </div>
                  {/* <ChevronDown
                    className={cn(
                      "h-4 w-4 text-gray-500 transition-transform",
                      openPopover === "checkOut" && "rotate-180",
                    )}
                  /> */}
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  mode="single"
                  selected={checkOut || undefined}
                  onSelect={(date) => {
                    dispatch(setCheckOut(date));
                    setOpenPopover(null);
                  }}
                  initialFocus
                  disabled={(date) => {
                    // Disable dates before check-in or before today
                    const today = new Date(new Date().setHours(0, 0, 0, 0));
                    return date < (checkIn || today);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="relative border-b md:border-b-0 md:border-r">
            <Popover
              open={openPopover === "guests"}
              onOpenChange={(open) => setOpenPopover(open ? "guests" : null)}
            >
              <PopoverTrigger asChild>
                <div className="flex cursor-pointer w-full items-center p-4 hover:bg-gray-50">
                  <div className="flex-1 flex-col justify-center items-center">
                    <div className="text-sm font-medium text-gray-800">
                      Rooms/Guests
                    </div>
                    <div className="flex lg:items-start items-center w-full  gap-2 pt-1">
                      <Users className="h-4 w-4 text-blue-900 hidden lg:block" />
                      <span className="text-sm text-gray-600 w-full ">
                        {`${guests.rooms} Room(s), ${guests.adults} Adult(s), ${guests.children} Children`}
                      </span>
                    </div>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[260px] p-0" align="center">
                <div className="p-4">
                  <div className="mb-4 text-sm font-medium text-gray-800">
                    Select Rooms & Guests
                  </div>

                  {/* Rooms */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm text-gray-700">Rooms</span>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full p-0"
                        onClick={() =>
                          handleGuestChange(
                            "rooms",
                            Math.max(1, guests.rooms - 1)
                          )
                        }
                        disabled={guests.rooms <= 1}
                      >
                        -
                      </Button>
                      <span className="w-4 text-center text-sm">
                        {guests.rooms}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full p-0"
                        onClick={() =>
                          handleGuestChange("rooms", guests.rooms + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Adults */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm text-gray-700">Adults</span>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full p-0"
                        onClick={() =>
                          handleGuestChange(
                            "adults",
                            Math.max(1, guests.adults - 1)
                          )
                        }
                        disabled={guests.adults <= 1}
                      >
                        -
                      </Button>
                      <span className="w-4 text-center text-sm">
                        {guests.adults}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full p-0"
                        onClick={() =>
                          handleGuestChange("adults", guests.adults + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Children</span>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full p-0"
                        onClick={() =>
                          handleGuestChange(
                            "children",
                            Math.max(0, guests.children - 1)
                          )
                        }
                        disabled={guests.children <= 0}
                      >
                        -
                      </Button>
                      <span className="w-4 text-center text-sm">
                        {guests.children}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full p-0"
                        onClick={() =>
                          handleGuestChange("children", guests.children + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <Button
                    className="mt-4 w-full bg-blue-900 text-white hover:bg-blue-800"
                    onClick={() => setOpenPopover(null)}
                  >
                    Apply
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Search Button */}
          <div
            className={cn(
              "transition-all duration-300",
              scrolled ? "bg-blue-900" : "bg-blue-900"
            )}
          >
            <button
              className="flex h-full w-full items-center justify-center gap-2 px-6 py-4 text-white transition-all hover:bg-blue-900"
              onClick={handleSearch}
            >
              <Search
                className={cn(
                  "transition-all",
                  scrolled ? "h-4 w-4" : "h-5 w-5"
                )}
              />
              <span
                className={cn(
                  "font-medium transition-all",
                  scrolled ? "text-sm" : "text-base"
                )}
              >
                Check Availability
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
