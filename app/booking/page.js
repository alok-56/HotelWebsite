"use client";
import {
  Calendar,
  MapPin,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { MyBooking } from "@/lib/API/User";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const BookingCard = ({ booking }) => {
  const {
    RoomId,
    CheckinDate,
    CheckOutDate,
    Status,
    TotalAmount,
  } = booking;

  const hotel = RoomId?.RoomName || "Room";
  const location = "Brill Rooms"; // Placeholder, update if branch info is available
  const dates = `${CheckinDate} to ${CheckOutDate}`;
  const image = RoomId?.Image?.[0] || "/placeholder.svg";

  return (
    <Card className="mb-4 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex">
          <div className="w-1/3">
            <img
              src={image}
              alt={hotel}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-2/3 p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{hotel}</h3>
                <p className="text-sm text-muted-foreground flex items-center mt-1">
                  <MapPin className="w-4 h-4 mr-1" /> {location}
                </p>
              </div>
              <Badge
                variant={Status === "Booked" ? "default" : "secondary"}
                className={Status === "Booked" ? "bg-green-500" : "bg-gray-500"}
              >
                {Status}
              </Badge>
            </div>
            <p className="text-sm mt-2 flex items-center">
              <Calendar className="w-4 h-4 mr-1" /> {dates}
            </p>
            <p className="text-sm mt-2">₹ {TotalAmount} (incl. taxes)</p>
            <div className="flex justify-between items-center mt-4">
              <Button variant="outline" size="sm">
                View Details
              </Button>
              {Status === "Booked" && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                >
                  Cancel
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function BookingScreen() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    GetMybookingRooms();
  }, []);

  const GetMybookingRooms = async () => {
    try {
      const phone = Cookies.get("phone");
      const res = await MyBooking(phone);
      if (res.status) {
        setBookings(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pb-16">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 flex items-center">
        <h1 className="text-2xl font-semibold">My Bookings</h1>
      </header>

      {/* Search Bar */}
      <div className="p-4 bg-white shadow-md">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search bookings..."
            className="pl-10 w-full"
          />
        </div>
      </div>

      {/* Tabs and Booking List */}
      <main className="p-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {bookings.length === 0 ? (
              <p>No bookings found.</p>
            ) : (
              bookings.map((booking) => (
                <BookingCard key={booking._id} booking={booking} />
              ))
            )}
          </TabsContent>

          <TabsContent value="upcoming">
            {bookings
              .filter((b) => new Date(b.CheckinDate) > new Date())
              .map((booking) => (
                <BookingCard key={booking._id} booking={booking} />
              ))}
          </TabsContent>

          <TabsContent value="completed">
            {bookings
              .filter((b) => new Date(b.CheckOutDate) < new Date())
              .map((booking) => (
                <BookingCard key={booking._id} booking={booking} />
              ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
