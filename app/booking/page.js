import { ArrowLeft, Calendar, MapPin, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

const BookingCard = ({ hotel, location, dates, status, image }) => (
  <Card className="mb-4 overflow-hidden">
    <CardContent className="p-0">
      <div className="flex">
        <div className="w-1/3">
          <img src={image || "/placeholder.svg"} alt={hotel} className="w-full h-full object-cover" />
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
              variant={status === "Upcoming" ? "default" : "secondary"}
              className={status === "Upcoming" ? "bg-green-500" : "bg-gray-500"}
            >
              {status}
            </Badge>
          </div>
          <p className="text-sm mt-2 flex items-center">
            <Calendar className="w-4 h-4 mr-1" /> {dates}
          </p>
          <div className="flex justify-between items-center mt-4">
            <Button variant="outline" size="sm">
              View Details
            </Button>
            {status === "Upcoming" && (
              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                Cancel
              </Button>
            )}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default function BookingScreen() {
  const bookings = [
    {
      hotel: "Luxury Suite - Grand Hotel",
      location: "New York, NY",
      dates: "Aug 15 - Aug 20, 2023",
      status: "Upcoming",
      image: "/placeholder.svg?height=200&width=200&text=Grand+Hotel",
    },
    {
      hotel: "Deluxe Room - Seaside Resort",
      location: "Malibu, CA",
      dates: "Sep 5 - Sep 10, 2023",
      status: "Upcoming",
      image: "/placeholder.svg?height=200&width=200&text=Seaside+Resort",
    },
    {
      hotel: "Executive Suite - Mountain Lodge",
      location: "Aspen, CO",
      dates: "Jul 1 - Jul 5, 2023",
      status: "Completed",
      image: "/placeholder.svg?height=200&width=200&text=Mountain+Lodge",
    },
    {
      hotel: "Penthouse - City View Hotel",
      location: "Chicago, IL",
      dates: "Jun 10 - Jun 15, 2023",
      status: "Completed",
      image: "/placeholder.svg?height=200&width=200&text=City+View+Hotel",
    },
  ]

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
          <Input type="search" placeholder="Search bookings..." className="pl-10 w-full" />
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
            {bookings.map((booking, index) => (
              <BookingCard key={index} {...booking} />
            ))}
          </TabsContent>
          <TabsContent value="upcoming">
            {bookings
              .filter((b) => b.status === "Upcoming")
              .map((booking, index) => (
                <BookingCard key={index} {...booking} />
              ))}
          </TabsContent>
          <TabsContent value="completed">
            {bookings
              .filter((b) => b.status === "Completed")
              .map((booking, index) => (
                <BookingCard key={index} {...booking} />
              ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

