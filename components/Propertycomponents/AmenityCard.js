
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";



const AmenityCard = ({ icon: Icon, name, className }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-4 rounded-md transition-all duration-300 hover:shadow-md group", className)}>
      <Icon className="w-10 h-10 text-blue-900 mb-2 group-hover:text-gold transition-colors duration-300" />
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  );
};

export default AmenityCard;