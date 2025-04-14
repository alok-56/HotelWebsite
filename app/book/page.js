"use client";

import { useState } from "react";
import { ChevronRight, Star, Luggage, Clock, Bed } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  const [timeLeft, setTimeLeft] = useState("00:18:56");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar */}
      {/* <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center flex-1">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <span className="ml-2 text-sm font-medium text-primary">
                  Customer information
                </span>
              </div>
              <div className="flex-1 mx-4 h-1 bg-gray-200">
                <div className="w-1/2 h-full bg-primary"></div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <span className="ml-2 text-sm font-medium text-gray-600">
                  Payment information
                </span>
              </div>
              <div className="flex-1 mx-4 h-1 bg-gray-200"></div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <span className="ml-2 text-sm font-medium text-gray-600">
                  Booking is confirmed!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 max-w-6xl mx-auto lg:grid-cols-2">
          {/* Guest Information Form */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Who's the lead guest?</h2>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName">First name *</Label>
                  <Input id="firstName" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last name *</Label>
                  <Input id="lastName" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" className="mt-1" />
                  <p className="text-sm text-gray-500 mt-1">
                    If you enter your email address and do not complete your
                    reservation, we may send you reminders to help you resume
                    your booking
                  </p>
                </div>
                <div>
                  <Label htmlFor="phone">Phone number *</Label>
                  <Input id="phone" type="tel" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="country">Country/region of residence *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600">Wed, Jan 29</div>
                    <div className="font-medium">12:00 PM</div>
                  </div>
                  <ChevronRight className="text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-600">Thu, Jan 30</div>
                    <div className="font-medium">11:00 AM</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-2xl font-semibold">1</div>
                    <div className="text-sm text-gray-600">night</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Image
                    src=""
                    alt="Hotel room"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">
                      Hotel O Britania Chowk
                    </h3>
                    <div className="flex items-center gap-1 my-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      North Delhi, New Delhi and NCR, India
                    </div>
                    <div className="text-primary font-medium mt-1">
                      What's nearby?
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">
                      1 × Classic Double or Twin
                    </h4>
                    <div className="text-sm text-gray-600">10 m²</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    Max: 2 adults, 2 children (0-5 years)
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Luggage className="w-4 h-4" />
                      Luggage storage available
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      24 hours check-in
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Bed className="w-4 h-4" />1 double bed or 2 single beds
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button className="w-full bg-blue-900 hover:bg-blue-800">
              Procced To Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
