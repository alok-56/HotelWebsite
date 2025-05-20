import React from "react";
import { Button } from "@/components/ui/button";
import PropertyFeatures from "./PropertyFeatures";
import { useRouter } from "next/navigation";

const PropertyDescription = ({ name, description, price,id }) => {
  const router=useRouter()
  return (
    <section className="py-12">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-display font-medium mb-4">{name}</h2>
            <div className="mb-6 max-w-3xl">
              <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
              <p className="text-muted-foreground leading-relaxed">
                Each room is designed with a blend of modern luxury and traditional comfort, featuring high ceilings, 
                natural materials, and state-of-the-art amenities to ensure a memorable stay.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border w-full lg:w-72 mt-6 lg:mt-0">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="text-3xl font-display font-medium text-luxury-800">999<span className="text-sm text-muted-foreground font-normal"> / night</span></p>
            </div>
            <div className="flex flex-col space-y-3">
              {/* <Button onClick={()=>router.push(`/overview/${id}`)} className="w-full bg-blue-900 hover:bg-blue-800">Book Now</Button> */}
              <Button onClick={()=>router.push(`/overview/${id}`)}   className="w-full text-white bg-blue-900 hover:bg-blue-800">Check Availability</Button>
            </div>
          </div>
        </div>
        
        <PropertyFeatures/>
      </div>
    </section>
  );
};

export default PropertyDescription;