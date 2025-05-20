"use client";
import {
  Calendar,
  MapPin,
  Search,
  Landmark,
  Users,
  IndianRupee,
  BadgeDollarSign,
  FileText,
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
    BookingId,
    bookingtype,
    Numberofchildren,
    Tax,
    UserInformation,
    PaymentId,
    BranchId,
  } = booking;

  const hotel = RoomId?.RoomName || "Room";
  const branchName = BranchId?.Branchname || "Hotel";
  const dates = `${CheckinDate} to ${CheckOutDate}`;
  const images = RoomId?.Image || [];

  return (
    <Card className="mb-6 overflow-hidden shadow-lg border border-slate-200">
      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          {/* Images */}
          <div className="flex overflow-x-auto gap-2">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Room image ${i + 1}`}
                className="w-40 h-28 object-cover rounded-lg border"
              />
            ))}
          </div>

          {/* Hotel Info */}
          <div className="flex justify-between items-start flex-wrap gap-y-2">
            <div>
              <h3 className="text-xl font-semibold">{hotel}</h3>
              <p className="flex items-center text-sm text-muted-foreground mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                {branchName}
              </p>
            </div>

            {/* Booking Status */}
            <div className="flex items-center gap-2">
              <Badge
                className={`text-sm px-3 py-1 ${
                  Status === "Booked" ? "bg-green-600" : "bg-gray-500"
                } text-white rounded-full`}
              >
                {Status}
              </Badge>

              {Status === "Booked" && (
                <Button variant="destructive" size="sm" className="text-white text-sm">
                  Cancel
                </Button>
              )}
            </div>
          </div>

          {/* Dates & User */}
          <p className="flex items-center text-sm text-slate-700">
            <Calendar className="w-4 h-4 mr-1" />
            {dates}
          </p>
          <p className="flex items-center text-sm text-slate-700">
            <Users className="w-4 h-4 mr-1" />
            {UserInformation?.Name}, Age {UserInformation?.Age}, Phone:{" "}
            {UserInformation?.Phonenumber}
          </p>

          {/* Booking Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
            <p>
              <FileText className="inline w-4 h-4 mr-1" />
              Booking ID: {BookingId}
            </p>
            <p>
              <BadgeDollarSign className="inline w-4 h-4 mr-1" />
              Transaction ID: {PaymentId?.merchantTransactionId}
            </p>
            <p>
              <Landmark className="inline w-4 h-4 mr-1" />
              Type: {bookingtype}
            </p>
            <p>
              <Users className="inline w-4 h-4 mr-1" />
              Children: {Numberofchildren}
            </p>
            <p>
              <IndianRupee className="inline w-4 h-4 mr-1" />
              Tax: ₹{Tax}
            </p>
            <p>
              <IndianRupee className="inline w-4 h-4 mr-1" />
              Total: ₹{TotalAmount}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function BookingScreen() {
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    GetMybookingRooms();
  }, []);

  const GetMybookingRooms = async () => {
    try {
      const phone = Cookies.get("phone");
      const res = await MyBooking(phone);
      if (res.status) {
        setBookings(res.data);
        setFiltered(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  };

  const handleSearch = (value) => {
    setSearch(value);
    const q = value.toLowerCase();
    const filtered = bookings.filter(
      (b) =>
        b.BookingId.toLowerCase().includes(q) ||
        b.Status.toLowerCase().includes(q) ||
        b.RoomId?.RoomName.toLowerCase().includes(q)
    );
    setFiltered(filtered);
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pb-16">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 flex items-center">
        <h1 className="text-2xl font-semibold">My Bookings</h1>
      </header>

      {/* Search Bar */}
      <div className="p-4 bg-white shadow-md sticky top-0 z-10">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search by Booking ID, Room, Status..."
            className="pl-10 w-full"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Tabs */}
      <main className="p-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground">
                No bookings found.
              </p>
            ) : (
              filtered.map((booking) => (
                <BookingCard key={booking._id} booking={booking} />
              ))
            )}
          </TabsContent>

          <TabsContent value="upcoming">
            {filtered
              .filter((b) => new Date(b.CheckinDate) > new Date())
              .map((booking) => (
                <BookingCard key={booking._id} booking={booking} />
              ))}
          </TabsContent>

          <TabsContent value="completed">
            {filtered
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
