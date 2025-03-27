"use client"
import { useEffect } from "react";
import PropertyGallery from "@/components/Propertycomponents/Property-gallary";
import AmenitiesSection from "@/components/Propertycomponents/AmenitiesSection";
import PropertyDescription from "@/components/Propertycomponents/PropertyDescription";

const Property = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Property data
  const propertyName = "Tarapith Luxury Resort";
  const propertyDescription = 
    "Experience unparalleled luxury at Tarapith Resort. Nestled in a tranquil oasis, our resort offers a perfect blend of modern amenities and natural beauty. With spacious rooms, private balconies, and stunning views, this is the ideal retreat for those seeking both relaxation and adventure.";
  const propertyPrice = "$299";
  
  // Gallery images
  const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Tarapith Resort Gallery Image"
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "Luxury resort swimming pool"
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "Luxury hotel bedroom"
    },
    {
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "Hotel spa area"
    }
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
        
        <AmenitiesSection/>
        
        {/* Room Gallery Section */}
        <section className="py-16 w-11/12 mx-auto">
          <h2 className="section-heading">Explore Our Rooms</h2>
          <p className="section-subheading">Discover our premium accommodations designed for your comfort and luxury.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((room) => (
              <div key={room} className="rounded-xl overflow-hidden shadow-sm border bg-white">
                <div className="image-hover h-64">
                  <img 
                    src={`https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80`} 
                    alt={`Luxury room ${room}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">{room === 1 ? 'Deluxe Suite' : room === 2 ? 'Premium Room' : 'Executive Suite'}</h3>
                    <span className="text-gold font-medium">${room === 1 ? '299' : room === 2 ? '199' : '399'}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {room === 1 
                      ? 'Spacious suite with king-size bed and private balcony.' 
                      : room === 2 
                        ? 'Comfortable room with modern amenities and garden view.' 
                        : 'Luxurious suite with separate living area and premium services.'}
                  </p>
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">Sleeps {room === 3 ? '4' : '2'} | {room === 1 ? '45' : room === 2 ? '35' : '60'} sq.m</span>
                    <button className="text-sm font-medium text-primary hover:text-gold transition-colors">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Map or Location Section */}
        {/* <section className="py-16 bg-blue-100 w-full mx-auto">
          <div className="w-11/12  mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold">Location</h2>
              <p className="section-subheading mx-auto">Perfectly situated for both relaxation and exploration.</p>
            </div>
            
            <div className="h-[400px] bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" 
                alt="Resort location map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section> */}
      </main>
      
    </div>
  );
};

export default Property;