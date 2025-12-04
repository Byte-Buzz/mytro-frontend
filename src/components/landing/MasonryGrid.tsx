"use client";

import { ResponsiveMasonry } from "react-responsive-masonry";
import { Heart, Bookmark } from "lucide-react";
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
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "1rem" }}>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-between p-4">
                  <div className="flex justify-end gap-2">
                    <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-foreground" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
                      <Bookmark className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                  
                  <div className="text-white">
                    <div className="text-sm opacity-80">{pin.category}</div>
                    <div>{pin.title}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </ResponsiveMasonry>
  );
}