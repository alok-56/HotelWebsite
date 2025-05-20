"use client";
import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchallhotels, fetchhotelbyid } from "@/lib/Redux/hotelSlice";
import HotelCardSkeleton from "@/components/Homecomponents/Hotelskeleton";
import HotelSkeletonGrid from "@/components/Homecomponents/Hotelskeleton";
const Hotels = () => {
  const { Hotels, loading } = useSelector((state) => state.hotel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallhotels());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50/50 md:px-4 py-8 pb-20 md:pb-10">
      <div className="w-full px-4 mx-auto">
        {loading ? (
          <HotelSkeletonGrid />
        ) : Hotels?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
            {Hotels?.map((hotel, index) => (
              <PropertyCard
                key={hotel._id || index}
                id={hotel?._id}
                title={hotel?.Heading || "No Title"}
                location={hotel?.Location || "Location not available"}
                rating={hotel?.rating || 4.5}
                price={hotel?.price || 0}
                originalPrice={hotel?.originalPrice || hotel.price || 0}
                description={hotel?.Description || ""}
                priceSubtext={hotel?.priceSubtext || ""}
                propertyType={hotel?.propertyType || ""}
                images={
                  Array.isArray(hotel?.Image?.hotel)
                    ? hotel?.Image?.hotel
                    : [Nearby1, Nearby2, Nearby3] // fallback images
                }
                includedMeals={hotel?.includedMeals || "Breakfast Included"}
                amenities={hotel?.amenities || []}
              />
            ))}
          </div>
        ) : (
          <p>No hotels found.</p>
        )}
      </div>
    </div>
  );
};

export default Hotels;
