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
import { useDispatch, useSelector } from "react-redux";
import { fetchallhotels ,fetchhotelbyid} from "@/lib/Redux/hotelSlice";
import { useParams } from "next/navigation";
import Loadingoverlay from "@/components/Propertycomponents/Loadingoverlay";

const Property = () => {
  const params=useParams()
  const {prop}=params
  const { hotel, singleloading } = useSelector((state) => state.hotel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchhotelbyid(prop));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

console.log(hotel)

// if (singleloading){
//   return <Loadingoverlay/>
// }


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
    {singleloading ?<Loadingoverlay/>:  <main className="flex-grow ">
        <div className="w-full mx-auto  mb-12">
          <PropertyGallery images={hotel?.Image} propertyName={hotel?.Heading} />
        </div>

        <PropertyDescription
          name={hotel?.Heading}
          description={hotel?.Description}
          price={hotel?.price}
          id={prop}
        />

        <AmenitiesSection />

        <section className="py-16 w-11/12 mx-auto">
          <h2 className="section-heading text-xl font-semibold">
            Explore Our Rooms
          </h2>
          <p className="section-subheading text-muted-foreground">
            Discover our premium accommodations designed for your comfort and
            luxury.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            {hotel?.Image?.rooms.map((room, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-sm border bg-white"
              >
                <div className="image-hover h-64">
                  <img
                    src={room}
                    alt={`Luxury room ${room}`}
                    width={0}
                    height={0}
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
            {hotel?.Image?.restaurant.map((room, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-sm border bg-white"
              >
                <div className="image-hover h-64">
                  <img
                    src={room}
                    alt={`Luxury room ${room}`}
                    height={0}
                    width={0}
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
            {hotel?.Image?.other.map((room, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-sm border bg-white"
              >
                <div className="image-hover h-64">
                  <img
                    src={room}
                    alt={`Luxury room ${room}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>}
    </div>
  );
};

export default Property;
