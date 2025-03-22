"use client";
import EnhancedHotelServices from "@/components/Herocomponents/enhanced-hotel-services";
import Herosection from "@/components/Herocomponents/Herosection";
import LuxuryHotel from "@/components/Herocomponents/Our-story";
import AmenitiesSection from "@/components/Herocomponents/Services";
import ContactSpeedDial from "@/components/Herocomponents/Speeddial";
import Allproperty from "@/components/Homecomponents/Allproperty";
import DestinationsCarousel from "@/components/Homecomponents/destinations";
import AnimatedTestimonialsDemo from "@/components/Homecomponents/Testimonials";
import Nav from "@/components/Navbarcomponent/Nav";

export default function LandingPage() {
  return (
    <main>
      <Nav />
      <Herosection />
      <LuxuryHotel/>
      <DestinationsCarousel />
      <Allproperty />
      {/* <AnimatedTestimonialsDemo/> */}
      <AmenitiesSection/>
      <EnhancedHotelServices/>
      <ContactSpeedDial/>
    </main>
  );
}
