import React from "react";
import { PropertyCard } from "@/components/Homecomponents/property-card";

const Allproperty = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 md:px-4 py-8 pb-20 md:pb-10">
      <div className="w-full px-4 mx-auto">
        <h2 className="md:text-4xl font-semibold text-gray-800 mb-8">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:gap-12 gap-4 md:grid-cols-2">
          <PropertyCard
            title="A Container Stay in Mulshi"
            location="Mulshi, Pune"
            rating={4.6}
            price={3499}
            originalPrice={3799}
            description="AC Stay with Swimming Pool, Spa, Restaurant, Meals and more"
            priceSubtext="/Person"
            images={Array(5).fill(
              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            )}
            includedMeals="Breakfast Included"
            amenities={["Swimming Pool", "Spa", "Restaurant"]}
          />

          <PropertyCard
            title="Mountain View Villa near Panshet"
            location="Bhagatwadi, Pune"
            rating={4.6}
            price={8999}
            originalPrice={9999}
            description="with Mountain Climbing, River View, Nature Walk, Outdoor & Indoor Games, Jungle Safari"
            priceSubtext="| Max 18 Guests"
            propertyType="Entire Villa"
            images={Array(5).fill(
              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            )}
            includedMeals="Breakfast and Dinner"
            amenities={["Mountain View", "River View", "Nature Walk"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Allproperty;
