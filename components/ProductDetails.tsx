'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Percent, MapPin, Building2, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const productImages = [
  {
    url: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1000",
    alt: "Old Monk Rum Bottle 750ml"
  },
  {
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000",
    alt: "Old Monk Rum Pouring"
  },
  {
    url: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=1000",
    alt: "Old Monk Rum Display"
  }
];

const getPrices = (location?: string) => {
  if (location === 'Mumbai') {
    return [
      { size: "90ml", price: "₹140", description: "Perfect for sampling" },
      { size: "180ml", price: "₹280", description: "Quarter bottle" },
      { size: "750ml", price: "₹900", description: "Full bottle" },
      { size: "1L", price: "₹1,200", description: "Party size" }
    ];
  }
  return [
    { size: "90ml", price: "₹130", description: "Perfect for sampling" },
    { size: "180ml", price: "₹260", description: "Quarter bottle" },
    { size: "750ml", price: "₹850", description: "Full bottle" },
    { size: "1L", price: "₹1,100", description: "Party size" }
  ];
};

const getDetails = (location?: string) => [
  { 
    icon: Percent, 
    label: "42.8% ABV",
    description: "Premium alcohol content",
    gradient: "from-amber-500/20 to-amber-700/20"
  },
  { 
    icon: MapPin, 
    label: location || "India",
    description: location ? `Available across ${location}` : "Made in Mohan Nagar",
    gradient: "from-amber-600/20 to-amber-800/20"
  },
  { 
    icon: Calendar, 
    label: "Est. 1954",
    description: "Legacy of excellence",
    gradient: "from-amber-700/20 to-amber-900/20"
  },
  { 
    icon: Building2, 
    label: "Mohan Meakin",
    description: "Legendary distillery",
    gradient: "from-amber-800/20 to-amber-950/20"
  }
];

interface ProductDetailsProps {
  location?: string;
}

export default function ProductDetails({ location }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState("750ml");
  const prices = getPrices(location);
  const details = getDetails(location);

  return (
    <div className="space-y-8 bg-gradient-to-b from-zinc-900/50 to-zinc-950/30 p-8 rounded-xl shadow-2xl border border-amber-900/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative bg-zinc-900/50 p-8 rounded-2xl shadow-lg border border-amber-900/20">
          <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
              {productImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-square">
                    <div className="absolute inset-0 ring-2 ring-amber-500/20 rounded-xl overflow-hidden">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/20" />
            <CarouselNext className="bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/20" />
          </Carousel>
        </div>

        <div className="space-y-8">
          <div className="border-b border-amber-900/20 pb-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              Old Monk Rum
              {location && <span className="block text-2xl mt-2">Price in {location}</span>}
            </h1>
            <p className="text-xl text-amber-500/80 mt-2">The Legend of India</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {details.map((detail, index) => (
              <Card 
                key={index} 
                className={`p-6 bg-gradient-to-br ${detail.gradient} hover:shadow-lg transition-all duration-300 border border-amber-900/20 group`}
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <detail.icon className="h-6 w-6 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-lg font-semibold text-amber-500/90">{detail.label}</span>
                  </div>
                  <p className="text-sm text-amber-500/60">{detail.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-amber-500">Select Size</h2>
              <p className="text-sm text-amber-500/60">All prices inclusive of taxes</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {prices.map(({ size, price, description }) => (
                <button
                  key={size}
                  className={`relative p-6 rounded-xl border-2 transition-all duration-300 overflow-hidden group ${
                    selectedSize === size
                      ? 'border-amber-500 bg-gradient-to-br from-amber-500/10 to-amber-700/10 shadow-lg'
                      : 'border-amber-900/20 hover:border-amber-500/50 hover:bg-gradient-to-br hover:from-amber-500/5 hover:to-amber-700/5'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-lg text-amber-500/90">{size}</div>
                      {selectedSize === size && (
                        <Check className="w-5 h-5 text-amber-500 animate-in fade-in duration-300" />
                      )}
                    </div>
                    <div className="text-2xl font-bold text-amber-500">{price}</div>
                    <p className="text-sm text-amber-500/60">{description}</p>
                  </div>
                  {selectedSize === size && (
                    <div className="absolute inset-0 bg-amber-500/5 animate-in fade-in duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="prose prose-amber prose-invert max-w-none border-t border-amber-900/20 pt-6">
            <p className="text-lg leading-relaxed text-amber-500/80">
              Old Monk is one of India's most iconic dark rum brands, produced by Mohan Meakin
              since 1954. This premium dark rum is aged for a minimum of 7 years in oak barrels,
              giving it its distinctive smooth taste and aroma.
              {location && ` Now available across ${location} at all leading wine shops and retailers.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}