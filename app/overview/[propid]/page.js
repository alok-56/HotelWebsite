"use client";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Star,
  MapPin,
  Users,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Coffee,
  Plus,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { ImageGallery } from "@/components/Overviewcomponents/image-gallery";

import Hotel1 from "@/public/hotelraj/hotelImage/hotel1.jpg";
import Hotel2 from "@/public/hotelraj/hotelImage/hotel2.jpg";
import Hotel3 from "@/public/hotelraj/hotelImage/hotel3.jpg";
import Hotel4 from "@/public/hotelraj/hotelImage/hotel4.jpg";
import Hotel5 from "@/public/hotelraj/hotelImage/hotel5.jpg";
import { Room } from "@/components/Roomcomponents/Room";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { fetchhotelbyid } from "@/lib/Redux/hotelSlice";
import Loadingoverlay from "@/components/Propertycomponents/Loadingoverlay";

const property = {
  id: "lux-001",
  name: "Luxury Beachfront Villa",
  location: "Jimbaran, Bali, Indonesia",
  rating: 4.9,
  price: 350,
  description:
    "Experience the ultimate luxury in this stunning beachfront villa. With breathtaking ocean views, private infinity pool, and world-class amenities, this villa offers an unforgettable tropical getaway.",
  amenities: ["Free WiFi", "Parking", "Restaurant", "Gym", "Room Service"],
  highlights: [
    "Private beach access",
    "Infinity pool with ocean view",
    "24/7 concierge service",
    "Gourmet kitchen",
    "Outdoor dining area",
  ],
  images: [
    "/placeholder.svg?height=600&width=800&text=Luxury+Villa+1",
    "/placeholder.svg?height=600&width=800&text=Luxury+Villa+2",
    "/placeholder.svg?height=600&width=800&text=Luxury+Villa+3",
    "/placeholder.svg?height=600&width=800&text=Luxury+Villa+4",
  ],
  houseRules: [
    "Check-in: 3:00 PM - 11:00 PM",
    "Checkout: 11:00 AM",
    "No smoking",
    "No pets",
    "No parties or events",
  ],
  coordinates: { lat: -8.7915, lng: 115.1767 },
};

const galleryImages = [Hotel2, , Hotel1, Hotel3, Hotel4, Hotel5];

const amenityIcons = {
  "Free WiFi": Wifi,
  Parking: Car,
  Restaurant: Utensils,
  Gym: Dumbbell,
  "Room Service": Coffee,
};
import { setCheckIn, setCheckOut, setGuests } from "@/lib/Redux/bookingSlice";
import { fetchSearchedRooms } from "@/lib/Redux/searchroomslice";

export default function PropertyOverview() {
  const { destination, hotelId, checkIn, checkOut, guests } = useSelector(
    (state) => state.booking
  );
  const { rooms, selectedRoom, bookingResponse, loading } = useSelector(
    (state) => state.searchroom
  );
  const [openPopover, setOpenPopover] = useState(null);

  const params = useParams();
  const { propid } = params;
  const { hotel, singleloading } = useSelector((state) => state.hotel);
  const dispatch = useDispatch();

  console.log(rooms);

  useEffect(() => {
    dispatch(fetchhotelbyid(propid));
  }, [dispatch]);

  const handleGuestChange = (type, value) => {
    if (value < 0) return;
    dispatch(setGuests({ [type]: value }));
  };

  const handleSearch = () => {
    if (!checkIn || !checkOut || !hotelId || !propid) return;

    const formattedCheckin = new Date(checkIn).toISOString();
    const formattedCheckout = new Date(checkOut).toISOString();

    dispatch(
      fetchSearchedRooms({
        branchid: hotelId || propid,
        checkindate: formattedCheckin,
        checkoutdate: formattedCheckout,
      })
    );
  };

  return (
    <>
      {singleloading ? (
        <Loadingoverlay />
      ) : (
        <div className="bg-slate-50 text-slate-900 min-h-screen pb-16 md:pb-0">
          {/* Image Gallery */}
          <ImageGallery images={hotel?.Image} />

          <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
            <div className="md:flex md:justify-between md:items-start">
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold mb-2">{hotel?.Heading}</h1>
                <p className="text-muted-foreground flex items-center mb-4">
                  {hotel?.Description}
                </p>
                <p className="text-muted-foreground flex items-center mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {hotel?.Location}
                </p>
              </div>
              <div className="md:w-1/3 md:bg-white md:p-6 md:rounded-lg md:shadow-md">
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {checkIn ? (
                            checkIn.toDateString()
                          ) : (
                            <span>{checkIn}</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <CalendarComponent
                          mode="single"
                          selected={checkIn}
                          onSelect={(date) => dispatch(setCheckIn(date))}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {checkOut ? (
                            checkOut.toDateString()
                          ) : (
                            <span>{checkOut}</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <CalendarComponent
                          mode="single"
                          selected={checkOut}
                          onSelect={(date) => dispatch(setCheckOut(date))}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="relative border-b md:border-b-0 md:border-r">
                    <Popover
                      open={openPopover === "guests"}
                      onOpenChange={(open) =>
                        setOpenPopover(open ? "guests" : null)
                      }
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
                            <span className="text-sm text-gray-700">
                              Adults
                            </span>
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
                            <span className="text-sm text-gray-700">
                              Children
                            </span>
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
                                  handleGuestChange(
                                    "children",
                                    guests.children + 1
                                  )
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
                  <Button
                    onClick={handleSearch}
                    className="w-full bg-blue-900 hover:bg-blue-800"
                  >
                    {loading ? (
                      <span className="loader2"></span>
                    ) : (
                      "Search Room"
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50/50 mt-10">
              <div className="w-full px-4 mx-auto">
                <h2 className="md:text-4xl font-semibold text-gray-800 mb-8">
                  All Rooms
                </h2>
                <div className="grid grid-cols-1 gap-4 md:gap-12">
                  {rooms?.map((room, index) => (
                    <Room data={room} key={index} />
                  ))}
                </div>
              </div>
            </div>

            <Tabs defaultValue="overview" className="mt-8">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="policy">Guest Policies</TabsTrigger>
                <TabsTrigger value="cancellation">Cancellation Policies</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      About this property
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {property.description}
                    </p>
                    <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                      {property.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <Plus className="w-5 h-5 mr-2 text-green-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-lg font-semibold mb-3">House rules</h3>
                    <ul className="space-y-2">
                      {property.houseRules.map((rule, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="amenities">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {property.amenities.map((amenity, index) => {
                        const Icon = amenityIcons[amenity] || Plus;
                        return (
                          <li key={index} className="flex items-center">
                            <Icon className="w-5 h-5 mr-2 text-indigo-600" />
                            {amenity}
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Guest Reviews
                    </h2>
                    <div className="space-y-6">
                      {[1, 2, 3].map((_, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarImage
                              src={`/placeholder.svg?height=40&width=40&text=Guest${
                                index + 1
                              }`}
                            />
                            <AvatarFallback>G{index + 1}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center mb-1">
                              <h3 className="font-semibold mr-2">
                                Guest {index + 1}
                              </h3>
                              <Badge variant="secondary">
                                <Star className="w-3 h-3 mr-1 inline" />
                                5.0
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus ac diam at quam congue feugiat.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="policy">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <h2 className="text-xl font-semibold">Guest Policies</h2>

                    <div className="text-muted-foreground space-y-4">
                      <div>
                        <h3 className="font-semibold">
                          General Booking Policy:
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            Different destinations may have specific travel
                            guidelines. Please follow applicable laws.
                          </li>
                          <li>
                            Policies are booking specific and informed at
                            booking or check-in.
                          </li>
                          <li>
                            Brill Rooms refers to its affiliates, employees, and
                            officers. "Hotel" means the booked hotel/home via
                            Brill Rooms.
                          </li>
                          <li>
                            For new bookings, Brill Rooms’ 24×7 support is
                            available at 0124-4208080.
                          </li>
                          <li>
                            To cancel/change reservations, contact 93139 31393
                            or write to{" "}
                            <a
                              className="text-blue-600 underline"
                              href="mailto:escalations@brillrooms.com"
                            >
                              escalations@brillrooms.com
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold">Check-in Policy:</h3>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Primary guest must be at least 18 years old.</li>
                          <li>
                            Standard check-in time is 12 PM. Check-in allowed
                            anytime after, as long as the booking is valid.
                          </li>
                          <li>
                            All guests must show valid government photo ID
                            (Aadhar, DL, Voter ID, Passport). PAN cards not
                            accepted.
                          </li>
                          <li>
                            If facing check-in issues, Brill Rooms will:
                            <ul className="ml-4 list-disc">
                              <li>
                                Try to accommodate you in the same or an
                                alternate Brill Rooms property.
                              </li>
                              <li>
                                Offer full refund if no accommodation is
                                possible.
                              </li>
                              <li>Not be liable beyond the booking amount.</li>
                            </ul>
                          </li>
                          <li>
                            No refund in case of natural disasters, terrorism,
                            or government restrictions.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold">Early Check-in:</h3>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            Standard check-in time is 12 PM (unless stated
                            otherwise).
                          </li>
                          <li>
                            Early check-in is subject to availability. Charges
                            may apply:
                            <ul className="ml-4 list-disc">
                              <li>Before 6 AM: 100% of one-day charges.</li>
                              <li>
                                6 AM–10 AM: 0–30% charges (varies by hotel).
                              </li>
                              <li>10 AM–12 PM: Complimentary.</li>
                            </ul>
                          </li>
                          <li>
                            No complimentary breakfast on early check-in day.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold">Late Check-out:</h3>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            Standard check-out time is 11 AM (unless stated
                            otherwise).
                          </li>
                          <li>
                            Late check-out is subject to availability and may
                            incur extra charges.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="cancellation">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <h2 className="text-xl font-semibold">
                      Cancellation Policy
                    </h2>

                    <div className="text-muted-foreground">
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          To cancel or modify a booking made via the Brill Rooms
                          app, website, or call center, contact support.
                        </li>
                        <li>Customer Care: 93139 31393</li>
                        <li>
                          Email:{" "}
                          <a
                            className="text-blue-600 underline"
                            href="mailto:escalations@brillrooms.com"
                          >
                            escalations@brillrooms.com
                          </a>
                        </li>
                        <li>
                          Refunds depend on the specific booking policy and
                          applicable cancellation window.
                        </li>
                        <li>
                          Some rate plans may be non-refundable or only
                          partially refundable.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </>
  );
}
