"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";

interface Pin {
  id: number;
  image: string;
  title: string;
  category: string;
}

interface MasonryGridProps {
  pins: Pin[];
  columns?: number;
}

export function MasonryGrid({ pins, columns = 4 }: MasonryGridProps) {
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: columns }}>
      <Masonry>
        {pins.map((pin) => (
          <div
            key={pin.id}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredPin(pin.id)}
            onMouseLeave={() => setHoveredPin(null)}
          >
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-md transition-all duration-300">
              <img
                src={pin.image}
                alt={pin.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {hoveredPin === pin.id && (
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <div className="text-white">
                    <div className="text-sm opacity-80">{pin.category}</div>
                    <div>{pin.title}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
