"use client";
import { useEffect } from "react";
import PropertyGallery from "@/components/Propertycomponents/Property-gallary";
import AmenitiesSection from "@/components/Propertycomponents/AmenitiesSection";
import PropertyDescription from "@/components/Propertycomponents/PropertyDescription";
import Image from "next/image";

import Hotel1 from "@/public/hotelraj/hotelImage/hotel1.jpg";
import Hotel2 from "@/public/hotelraj/hotelImage/hotel2.jpg";
import Hotel3 from "@/public/hotelraj/hotelImage/hotel3.jpg";
import Hotel4 from "@/public/hotelraj/hotelImage/hotel4.jpg";
import Hotel5 from "@/public/hotelraj/hotelImage/hotel5.jpg";

import Room1 from "@/public/hotelraj/rooms/room1.jpg";
import Room2 from "@/public/hotelraj/rooms/room2.jpg";
import Room3 from "@/public/hotelraj/rooms/room3.jpg";
import Room4 from "@/public/hotelraj/rooms/room4.jpg";
import Room5 from "@/public/hotelraj/rooms/room5.jpg";

import Resturenemnet1 from "@/public/hotelraj/resturenment/resturent1.jpg";
import Resturenemnet2 from "@/public/hotelraj/resturenment/resturent2.jpg";
import Resturenemnet3 from "@/public/hotelraj/resturenment/resturent3.jpg";
import Resturenemnet4 from "@/public/hotelraj/resturenment/resturent4.jpg";

import Lift1 from "@/public/hotelraj/Lift/Lift1.jpg";
import Lift2 from "@/public/hotelraj/Lift/Lift2.jpg";

import Looby1 from "@/public/hotelraj/Looby/Looby1.jpg";
import Looby2 from "@/public/hotelraj/Looby/Looby2.jpg";

import Reception1 from "@/public/hotelraj/reception/reception1.jpg";
import Reception2 from "@/public/hotelraj/reception/reception2.jpg";
import Reception3 from "@/public/hotelraj/reception/reception3.jpg";

const Property = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Property data
  const propertyName = "Hotel raj Palace";
  const propertyDescription =
    "Experience unparalleled luxury at Tarapith Resort. Nestled in a tranquil oasis, our resort offers a perfect blend of modern amenities and natural beauty. With spacious rooms, private balconies, and stunning views, this is the ideal retreat for those seeking both relaxation and adventure.";
  const propertyPrice = "$299";

  // Gallery images
  const galleryImages = [
    {
      src: Hotel2,
      alt: "Tarapith Resort Gallery Image",
    },
    {
      src: Hotel1,
      alt: "Luxury resort swimming pool",
    },
    {
      src: Hotel3,
      alt: "Luxury resort swimming pool",
    },
    {
      src: Hotel4,
      alt: "Luxury resort swimming pool",
    },
    {
      src: Hotel5,
      alt: "Luxury resort swimming pool",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col w-full">
      <main className="flex-grow ">
        <div className="w-full mx-auto  mb-12">
          <PropertyGallery images={galleryImages} propertyName={propertyName} />
        </div>

        <PropertyDescription
          name={propertyName}
          description={propertyDescription}
          price={propertyPrice}
        />

        <AmenitiesSection />

        {/* Room Gallery Section */}
        <section className="py-16 w-11/12 mx-auto">
          <h2 className="section-heading text-xl font-semibold">
            Explore Our Rooms
          </h2>
          <p className="section-subheading text-muted-foreground">
            Discover our premium accommodations designed for your comfort and
            luxury.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            {[Room1, Room2, Room3, Room4, Room5].map((room, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-sm border bg-white"
              >
                <div className="image-hover h-64">
                  <Image
                    src={room}
                    alt={`Luxury room ${room}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="w-11/12 mx-auto pb-10">
          <h2 className="section-heading text-xl font-semibold">
            Explore Our Restaurant
          </h2>
          <p className="section-subheading text-muted-foreground">
            Discover our premium accommodations designed for your comfort and
            luxury.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            {[
              Resturenemnet1,
              Resturenemnet2,
              Resturenemnet3,
              Resturenemnet4,
            ].map((room, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-sm border bg-white"
              >
                <div className="image-hover h-64">
                  <Image
                    src={room}
                    alt={`Luxury room ${room}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="w-11/12 mx-auto pb-10">
          <h2 className="section-heading text-xl font-semibold">
            Explore Other Area
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            {[Reception1, Reception2,Reception3, Looby1, Looby2, Lift1, Lift2].map(
              (room, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-sm border bg-white"
                >
                  <div className="image-hover h-64">
                    <Image
                      src={room}
                      alt={`Luxury room ${room}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* Map or Location Section */}
        {/* <section className="py-16 bg-blue-100 w-full mx-auto mt-20">
          <div className="w-11/12 mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold">Location</h2>
              <p className="section-subheading mx-auto">
                Perfectly situated for both relaxation and exploration.
              </p>
            </div>

            <div className="h-[400px] bg-white rounded-xl shadow-sm overflow-hidden">
             
              <iframe
                src="https://maps.app.goo.gl/vFxttM9nmoyfdfTD7"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Map Location"
              ></iframe>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Property;
