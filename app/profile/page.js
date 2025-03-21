import { Settings, ChevronRight, Calendar, MapPin, Star, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PremiumHotelProfile() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pb-20 ">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">My Profile</h1>
          <Settings className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 border-2 border-yellow-400">
            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <div className="flex items-center mt-1">
              <Badge variant="secondary" className="bg-yellow-400 text-blue-900">
                Gold Member
              </Badge>
              <span className="ml-2 text-sm">12,350 points</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Upcoming Reservation */}
        <Card className="bg-white shadow-md">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              Upcoming Reservation
            </h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Luxury Suite - Grand Hotel</p>
                <p className="text-sm text-muted-foreground">New York, NY</p>
                <p className="text-sm text-blue-600">Aug 15 - Aug 20, 2023</p>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Saved Hotels */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            Saved Hotels
          </h3>
          <div className="space-y-2">
            {["The Ritz-Carlton", "Four Seasons Resort", "Mandarin Oriental"].map((hotel, index) => (
              <Card key={index} className="bg-white shadow-sm">
                <CardContent className="p-3 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>{hotel}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Booking Preferences */}
        <Card className="bg-white shadow-md">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Coffee className="w-5 h-5 mr-2 text-blue-600" />
              Booking Preferences
            </h3>
            <div className="space-y-2">
              {["Room Type: Suite", "View: Ocean", "Amenities: Spa, Gym"].map((pref, index) => (
                <p key={index} className="text-sm flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  {pref}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Account Actions */}
        <div className="space-y-2">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">View All Reservations</Button>
          <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
            Edit Profile
          </Button>
        </div>
      </main>
    </div>
  )
}

