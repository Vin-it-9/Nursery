"use client";

import { useState } from "react";
import Image from "next/image";

type PlantGalleryProps = {
  name: string;
  image: string;
  galleryImages: string[];
};

// Premium plant gallery with enhanced image display and interactions
export default function PlantGallery({
  name,
  image,
  galleryImages,
}: PlantGalleryProps) {
  const images = galleryImages.length > 0 ? galleryImages : [image];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section
      aria-label={`${name} product images`}
      className="space-y-5 lg:sticky lg:top-28"
    >
      {/* Main Image Display */}
      <div className="group relative min-h-80 overflow-hidden rounded-3xl border-2 border-leaf-100/50 bg-gradient-to-br from-leaf-50 to-white shadow-lg sm:min-h-[32rem] lg:min-h-screen">
        <Image
          src={selectedImage}
          alt={`${name} selected plant image`}
          fill
          priority
          sizes="(min-width: 1024px) 520px, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-leaf-900/5 to-transparent pointer-events-none" />
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4" aria-label={`${name} image gallery`}>
        {images.map((galleryImage, index) => {
          const isSelected = selectedImage === galleryImage;

          return (
            <button
              key={galleryImage}
              type="button"
              onClick={() => setSelectedImage(galleryImage)}
              aria-label={`View ${name} image ${index + 1}`}
              aria-pressed={isSelected}
              className={`group relative h-24 sm:h-32 overflow-hidden rounded-2xl border-2 shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-leaf-400/50 ${
                isSelected 
                  ? "border-leaf-700 ring-2 ring-leaf-400/50" 
                  : "border-leaf-100/50 hover:border-leaf-200"
              }`}
            >
              <Image
                src={galleryImage}
                alt={`${name} thumbnail ${index + 1}`}
                fill
                sizes="160px"
                className={`object-cover transition-all duration-300 ${
                  isSelected ? "" : "group-hover:scale-110"
                }`}
              />
              
              {/* Selection indicator */}
              {isSelected && (
                <div className="absolute inset-0 bg-gradient-to-br from-leaf-400/20 to-transparent flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-leaf-700 flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
