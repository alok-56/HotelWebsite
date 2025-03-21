"use client"
import React from "react"
import { useState } from "react"
import { Search, Filter, Home, Tent, Castle, Bed, Warehouse } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const categories = [
  { name: "All", icon: Home },
  { name: "Villa", icon: Castle },
  { name: "Camping", icon: Tent },
  { name: "Cottage", icon: Home },
  { name: "Room", icon: Bed },
  { name: "Farmhouse", icon: Warehouse },
]

const properties = [
  {
    id: 1,
    name: "Luxury Beachfront Villa",
    category: "Villa",
    location: "Bali, Indonesia",
    price: 350,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=200&text=Luxury+Villa",
  },
  {
    id: 2,
    name: "Cozy Forest Cottage",
    category: "Cottage",
    location: "Black Forest, Germany",
    price: 120,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=200&text=Forest+Cottage",
  },
  {
    id: 3,
    name: "Scenic Camping Site",
    category: "Camping",
    location: "Yosemite, USA",
    price: 50,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=200&text=Camping+Site",
  },
  {
    id: 4,
    name: "Modern City Apartment",
    category: "Room",
    location: "Tokyo, Japan",
    price: 200,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200&text=City+Apartment",
  },
  {
    id: 5,
    name: "Rustic Farmhouse Retreat",
    category: "Farmhouse",
    location: "Tuscany, Italy",
    price: 180,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=200&text=Farmhouse",
  },
  {
    id: 6,
    name: "Seaside Cottage",
    category: "Cottage",
    location: "Cornwall, UK",
    price: 150,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=200&text=Seaside+Cottage",
  },
]

const PropertyCard = ({ name, category, location, price, rating, image }) => (
  <Card className="overflow-hidden">
    <CardContent className="p-0">
      <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">{location}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold">
            ${price} <span className="text-sm font-normal">/ night</span>
          </span>
          <Badge variant="secondary">★ {rating}</Badge>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default function ExploreScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProperties =
    selectedCategory === "All" ? properties : properties.filter((property) => property.category === selectedCategory)

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pb-20">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-semibold mb-4">Explore</h1>
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search destinations"
            className="pl-10 w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>
      </header>

      {/* Category Filters */}
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex p-4 space-x-2">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "outline"}
              className="flex-shrink-0 "
              onClick={() => setSelectedCategory(category.name)}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Property Grid */}
      <main className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </main>
    </div>
  )
}

