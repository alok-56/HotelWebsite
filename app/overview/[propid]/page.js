"use client";
import { useState } from "react";
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

export default function PropertyOverview() {
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [guests, setGuests] = useState(2);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pb-16 md:pb-0">
      {/* Image Gallery */}
      <ImageGallery images={galleryImages} />

      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-start">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
            <p className="text-muted-foreground flex items-center mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              {property.location}
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <Badge variant="secondary" className="text-lg px-3 py-1">
                <Star className="w-4 h-4 mr-1 inline" />
                {property.rating}
              </Badge>
              <span className="text-lg font-semibold">
                ${property.price}{" "}
                <span className="text-sm font-normal">/ night</span>
              </span>
            </div>
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
                      {checkInDate ? (
                        checkInDate.toDateString()
                      ) : (
                        <span>Check-in</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={checkInDate}
                      onSelect={setCheckInDate}
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
                      {checkOutDate ? (
                        checkOutDate.toDateString()
                      ) : (
                        <span>Check-out</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={checkOutDate}
                      onSelect={setCheckOutDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    {guests} {guests === 1 ? "guest" : "guests"}
                    <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex items-center justify-between">
                    <span>Guests</span>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                      >
                        -
                      </Button>
                      <span>{guests}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setGuests(guests + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Button className="w-full">Reserve</Button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50/50 ">
          <div className="w-full px-4 mx-auto">
            <h2 className="md:text-4xl font-semibold text-gray-800 mb-8">
              All Rooms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
              <Room></Room>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="mt-12">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
           
            <TabsTrigger value="photos">Photos</TabsTrigger>
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
          <TabsContent value="location">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <div className="aspect-video w-full mb-4">
                  <img
                    src={`https://maps.googleapis.com/maps/api/staticmap?center=${property.coordinates.lat},${property.coordinates.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7C${property.coordinates.lat},${property.coordinates.lng}&key=YOUR_GOOGLE_MAPS_API_KEY`}
                    alt="Property location"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-muted-foreground">
                  Located in {property.location}, this property offers easy
                  access to local attractions and amenities.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Guest Reviews</h2>
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
          <TabsContent value="photos">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Property Photos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {property.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video rounded-lg overflow-hidden"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Property image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
