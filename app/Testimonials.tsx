"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestimonialCards() {
  return (
    <div className="rounded-md flex flex-col bg-white items-center justify-center overflow-hidden mt-40">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="overflow-hidden"
      />
    </div>
  );
}

const testimonials = [
  {
    title: "A real change-maker in our town",
    quote:
      "These folks have breathed new life into our local environment. Their creative programs and enthusiastic volunteers haven't just cleaned up our parks, they've got everyone excited about taking care of nature. It's amazing to see the difference they've made.",
    name: "Emily Davis",
    designation: "Civilian",
  },
  {
    title: "Inspiring kids to love the planet",
    quote:
      "The programs they run for young people are just fantastic. They give kids hands-on experience and connect them with experts who really know their stuff. It's creating a whole new bunch of young people who are passionate about protecting the environment.",
    name: "Sarah Connor",
    designation: "Local Sherif",
  },
  {
    title: "Bringing our community together",
    quote:
      "I've never seen anything bring people together like this group does. They organize these great clean-up days where everyone pitches in. It's not just good for the environment - it's helped us all get to know our neighbors better. They're making our town a nicer place to live in more ways than one.",
    name: "Walter White",
    designation: "Teacher",
  },
  {
    title: "More than just a volunteer gig",
    quote:
      "I signed up to help out, but I got so much more than I expected. The team here is like family now. They've taught me tons about the environment, but also about teamwork and making a real difference. It's been way more rewarding than I ever thought it would be. I look forward to every day I spend with them.",
    name: "Jane Austen",
    designation: "Volunteer",
  },
  {
    title: "A partnership we're proud of",
    quote:
      "Working with this environmental group has been great for our business. They've helped us find ways to cut waste and energy use that actually save us money. But more than that, our employees love getting involved in their projects. Supporting them is one of the best decisions we've made.",
    name: "Herman Melville",
    designation: "CEO, Code Climate",
  },
];
