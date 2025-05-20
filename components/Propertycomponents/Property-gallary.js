import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";



const PropertyGallery = ({ images, propertyName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images?.hotel.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images?.hotel.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-[500px] md:h-[70vh] relative rounded-xl overflow-hidden">
      {/* Main large image */}
      <div className="w-full h-full relative overflow-hidden">
       {/* {images?.hotel.map((img,index)=>(
         <img
         key={index}
          src={img}
          alt={img}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        

       ))
        } */}

         <img
          src={images?.hotel[currentIndex]}
          alt={images?.hotel[currentIndex]}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70"></div>
        
        {/* Property name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="animate-fade-in">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-white mb-8">{propertyName}</h1>
          </div>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={goToPrevious} 
        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={goToNext} 
        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 p-4 hidden md:flex justify-center space-x-2">
        {images?.hotel?.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-16 h-10 rounded-md overflow-hidden transition-all ${
              index === currentIndex ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;