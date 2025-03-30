import React from "react";
import { PropertyCard } from "@/components/Homecomponents/property-card";

import brills from "@/public/Brills/HotelImage/Hotel5.jpg";
import brills1 from "@/public/Brills/HotelImage/Hotel1.jpg";
import brills2 from "@/public/Brills/HotelImage/Hotel2.jpg";
import brills3 from "@/public/Brills/HotelImage/Hotel3.jpg";
import brills4 from "@/public/Brills/HotelImage/Hotel4.jpg";

import Hotelraj1 from "@/public/hotelraj/hotelImage/hotel1.jpg";
import Hotelraj2 from "@/public/hotelraj/hotelImage/hotel2.jpg";
import Hotelraj3 from "@/public/hotelraj/hotelImage/hotel3.jpg";
import Hotelraj4 from "@/public/hotelraj/hotelImage/hotel4.jpg";

import brillsag1 from "@/public/Brills_Ag/Hotelimage/hotel1.jpg";
import brillsag2 from "@/public/Brills_Ag/Hotelimage/hotel2.jpg";
import brillsag3 from "@/public/Brills_Ag/Hotelimage/hotel3.jpg";
import brillsag4 from "@/public/Brills_Ag/Hotelimage/hotel4.jpg";

import hotelake1 from "@/public/Hotel_lake/HotelImage/Hotel1.jpg";
import hotelake2 from "@/public/Hotel_lake/HotelImage/Hotel2.jpg";
import hotelake3 from "@/public/Hotel_lake/HotelImage/Hotel3.jpg";
import hotelake4 from "@/public/Hotel_lake/HotelImage/Hotel4.jpg";

import Nearby1 from "@/public/Nearbydestination/Nearby1.jpg";
import Nearby2 from "@/public/Nearbydestination/Nearby2.jpg";
import Nearby3 from "@/public/Nearbydestination/Nearby3.jpg";

const Hotels = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 md:px-4 py-8 pb-20 md:pb-10">
      <div className="w-full px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
          <PropertyCard
            title="Brill Rooms"
            location="Near City Centre 1, Kolkate West Bengal"
            rating={4.6}
            price={3499}
            originalPrice={3799}
            description="AC Stay with Swimming Pool, Spa, Restaurant, Meals and more"
            priceSubtext="/Person"
            images={[brills, brills1, brills2, brills3, brills4]}
            includedMeals="Breakfast Included"
            amenities={["Swimming Pool", "Spa", "Restaurant"]}
          />

          <PropertyCard
            title="Hotel Raj Palace"
            location="Near City Centre 2, Kolkate West Bengal"
            rating={4.6}
            price={8999}
            originalPrice={9999}
            description="with Mountain Climbing, River View, Nature Walk, Outdoor & Indoor Games, Jungle Safari"
            priceSubtext="| Max 18 Guests"
            propertyType="Entire Villa"
            images={[Hotelraj1, Hotelraj2, Hotelraj3, Hotelraj4]}
            includedMeals="Breakfast and Dinner"
            amenities={["Mountain View", "River View", "Nature Walk"]}
          />

          <PropertyCard
            title="Brill A G Star"
            location="Near Airport Gate No 1, Kolkate West Bengal"
            rating={4.6}
            price={8999}
            originalPrice={9999}
            description="with Mountain Climbing, River View, Nature Walk, Outdoor & Indoor Games, Jungle Safari"
            priceSubtext="| Max 18 Guests"
            propertyType="Entire Villa"
            images={[brillsag1, brillsag2, brillsag3, brillsag4]}
            includedMeals="Breakfast and Dinner"
            amenities={["Mountain View", "River View", "Nature Walk"]}
          />

          <PropertyCard
            title="Hotel Lake View Royal"
            location="Near Science City Kolkate"
            rating={4.6}
            price={8999}
            originalPrice={9999}
            description="with Mountain Climbing, River View, Nature Walk, Outdoor & Indoor Games, Jungle Safari"
            priceSubtext="| Max 18 Guests"
            propertyType="Entire Villa"
            images={[hotelake1, hotelake2, hotelake3, hotelake4]}
            includedMeals="Breakfast and Dinner"
            amenities={["Mountain View", "River View", "Nature Walk"]}
          />

          <PropertyCard
            title="Manner Residency"
            location="Near Technopolis Sec V"
            rating={4.6}
            price={8999}
            originalPrice={9999}
            description="with Mountain Climbing, River View, Nature Walk, Outdoor & Indoor Games, Jungle Safari"
            priceSubtext="| Max 18 Guests"
            propertyType="Entire Villa"
            images={[Nearby1, Nearby2, Nearby3]}
            includedMeals="Breakfast and Dinner"
            amenities={["Mountain View", "River View", "Nature Walk"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hotels;
