import React from "react";
import { GlobeObject } from "./HeroGlobe";
import { FlipWords } from "@/components/ui/flip-words";
import Tree from "@/public/tree.svg";
import Image from "next/image";

export default function Hero() {
  const words = ["modern", "sustainable", "better", "renewable", "green"];

  return (
    <section className="container flex flex-col md:items-center lg:flex-row justify-between mt-16">
      <div className="flex flex-col text-left md:text-center lg:text-left md:items-center lg:items-start">
        <h1 className="text-4xl md:text-5xl xl:text-7xl font-outfit leading-tight">
          Powering a <FlipWords words={words} /> tomorrow
          <br className="hidden lg:block" /> for generations to come
          <span className="text-sedGreen">.</span>
        </h1>

        <p className="w-full sm:w-[500px] md:w-[550px] lg:w-[600px] mt-7 font-outfit text-gray-600">
          We're confronting climate change through cutting-edge approaches and
          united efforts. By working together, we can forge a world where
          humanity and nature coexist in perfect balance.
        </p>

        <Image
          src={Tree}
          alt="Tree-hero"
          priority
          className="h-80 w-min mt-20"
        />
      </div>

      <GlobeObject />
    </section>
  );
}
