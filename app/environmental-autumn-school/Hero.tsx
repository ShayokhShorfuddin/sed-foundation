import ClimateLeft from "@/public/climate-left.jpg";
import ClimateRight from "@/public/climate-right.jpg";
import Book from "./_images/book.svg";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Image, { StaticImageData } from "next/image";

export default function Hero() {
  return (
    <section className="container flex justify-around xl:justify-evenly mt-10 md:mt-20">
      <EnvironmentCard
        image={ClimateLeft}
        text="Radiant"
        className="-rotate-1 hidden xl:block"
      />

      <div className="flex flex-col items-center text-center md:pr-8 lg:pr-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-outfit">
          Environmental Autumn School<span className="text-sedGreen">.</span>
        </h1>

        <p className="mt-4 sm:mt-6 max-w-[31rem] text-sm md:text-base">
          The Environmental Autumn School is a week-long residential program
          where volunteers stay together and immerse themselves in environmental
          education. Participants learn from experts about various environmental
          topics and engage in hands-on activities.
        </p>

        <Image
          src={Book}
          alt="Environment Study"
          height={220}
          className="mt-16"
        />
      </div>

      <EnvironmentCard
        image={ClimateRight}
        text="Ethereal"
        className="xl:rotate-1 hidden md:block"
      />
    </section>
  );
}

// The 2 cards in the hero section
function EnvironmentCard({
  image,
  text,
  className,
}: {
  image: StaticImageData;
  text: string;
  className: string;
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <DirectionAwareHover imageUrl={image.src}>
        <p className="text-lg">{text}</p>
      </DirectionAwareHover>
    </div>
  );
}
