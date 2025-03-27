import React from "react";
import { Users, BedDouble, Bath, Maximize, MapPin, Star } from "lucide-react";

const PropertyFeatures = () => {
  const features = [
    {
      icon: <Users className="w-5 h-5 text-gold" />,
      label: "Guests",
      value: "4 Adults, 2 Children",
    },
    {
      icon: <BedDouble className="w-5 h-5 text-gold" />,
      label: "Bedrooms",
      value: "2 King Size Beds",
    },
    {
      icon: <Bath className="w-5 h-5 text-gold" />,
      label: "Bathrooms",
      value: "2 Ensuite Bathrooms",
    },
    {
      icon: <Maximize className="w-5 h-5 text-gold" />,
      label: "Room Size",
      value: "82 sq.m / 883 sq.ft",
    },
    {
      icon: <MapPin className="w-5 h-5 text-gold" />,
      label: "Location",
      value: "Beach Front View",
    },
    {
      icon: <Star className="w-5 h-5 text-gold" />,
      label: "Rating",
      value: "4.9 (128 Reviews)",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 text-center rounded-lg border border-muted bg-white/50 hover:shadow-sm transition-shadow"
        >
          <div className="mb-3">{feature.icon}</div>
          <p className="text-xs text-muted-foreground mb-1">{feature.label}</p>
          <p className="font-medium text-sm">{feature.value}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyFeatures;
