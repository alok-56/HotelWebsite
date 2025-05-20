"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Globe, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Loginpage from "../Logincomponents/Loginpage"

export default function OyoNavbar() {
  const [activeCity, setActiveCity] = useState(null)

  const cities = ["Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune"]

  return (
    <nav className="w-full border-b">
      {/* Top Navigation */}
      <div className="w-full mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="font-bold text-3xl">
            <span className="text-gray-900">BRILL ROOMS</span>
          </div>
        </Link>

      
       <div className="flex gap-4 items-center">

        {/* Phone */}
        <div className="hidden md:flex items-center gap-2 border-r pr-6">
          <div className="p-1 rounded-md bg-gray-100">
            <Phone className="h-5 w-5 text-gray-700" />
          </div>
          <div>
            <p className="text-sm font-semibold">0124-6201611</p>
            <p className="text-xs text-gray-500">Call us to Book now</p>
          </div>
        </div>

     

        {/* Login/Signup */}
        <Loginpage/>
       </div>
      </div>

      {/* City Navigation */}
      <div className="bg-gray-50 py-3 px-4 overflow-x-auto w-full">
        <div className="w-full mx-auto flex items-center space-x-8 ">
          {cities.map((city) => (
            <DropdownMenu key={city}>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center text-sm font-medium ${
                    activeCity === city ? "text-red-600" : "text-gray-700"
                  }`}
                  onClick={() => setActiveCity(city)}
                >
                  {city}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem>All {city} Hotels</DropdownMenuItem>
                <DropdownMenuItem>{city} North</DropdownMenuItem>
                <DropdownMenuItem>{city} South</DropdownMenuItem>
                <DropdownMenuItem>{city} East</DropdownMenuItem>
                <DropdownMenuItem>{city} West</DropdownMenuItem>
                <DropdownMenuItem>{city} Central</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
          <button className="text-sm font-medium text-gray-700">All Cities</button>
        </div>
      </div>
    </nav>
  )
}
