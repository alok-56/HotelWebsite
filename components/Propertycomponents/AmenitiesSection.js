import React from "react";
import { 
  Waves, Building2, UtensilsCrossed, AirVent, Coffee, Wifi 
} from "lucide-react";
import AmenityCard from "./AmenityCard";

const AmenitiesSection = () => {
  const amenities = [
    { name: "Swimming Pool", icon: Waves },
    { name: "Conference Hall", icon: Building2 },
    { name: "Cafe", icon: Coffee },
    { name: "Air Conditioning", icon: AirVent },
    { name: "Restaurant", icon: UtensilsCrossed },
    { name: "Free WiFi", icon: Wifi },
  ];

  return (
    <section className="py-16 bg-blue-200/50">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center mb-10">
          <div className="bg-blue-900 px-8 py-6 rounded-lg mb-6 md:mb-0 md:mr-8 inline-block">
            <h2 className="text-xl font-medium text-white">Amenities & Facilities</h2>
          </div>
          <p className="text-black max-w-2xl">
            Indulge in our premium facilities designed to enhance your stay experience and provide maximum comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {amenities.map((amenity, index) => (
            <AmenityCard 
              key={index}
              icon={amenity.icon}
              name={amenity.name}
              className="bg-white shadow-sm hover:bg-gold/5"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;