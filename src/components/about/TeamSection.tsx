"use client";

import React, { useState } from "react";

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,...';

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const team = [
  {
    name: "Sarah Chen",
    role: "Co-Founder & CEO",
    bio: "Former product designer with a passion for visual storytelling and community building.",
    image: "https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTE2MzIxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Marcus Johnson",
    role: "Co-Founder & CTO",
    bio: "Engineer and artist who believes technology should amplify human creativity.",
    image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUxMTcxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Alex Rivera",
    role: "Head of Design",
    bio: "Design systems expert focused on creating beautiful, accessible user experiences.",
    image: "https://images.unsplash.com/photo-1724941407869-f8fb46a3cc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTE3ODg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Jordan Lee",
    role: "Head of Community",
    bio: "Community advocate dedicated to fostering meaningful connections between creators.",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTExODg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function TeamSection() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">Meet Our Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A diverse group of creators, builders, and dreamers working together to 
            make inspiration accessible to everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 inline-block">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="mb-1">{member.name}</h3>
              <p className="text-slate-900 mb-2">{member.role}</p>
              <p className="text-slate-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
