import Sapling from "@/public/sapling.jpg";
import Image from "next/image";
import { SeedStackedAreaChart } from "./SeedStackedGraph";

export default function CoolingEarth() {
  return (
    <section className="container flex flex-col lg:flex-row items-center lg:items-start justify-center mt-28 lg:mt-44">
      <CoolEarthText />
      <PlantStatGrid />
    </section>
  );
}

function CoolEarthText() {
  return (
    <div className="lg:mr-24 text-center lg:text-left">
      <h1 className="text-4xl font-outfit leading-tight">
        Healing <span className="text-sedGreen">Earth</span>
        <br />
        Helping Humanity<span className="text-sedGreen">.</span>
      </h1>

      <p className="mt-5 w-full sm:w-80 font-outfit">
        Every year, our dedicated team and volunteers come together to plant
        thousands of saplings across diverse ecosystems. We carefully select
        native species that will thrive in each location, ensuring the best
        chance of survival and maximum environmental impact.
      </p>
    </div>
  );
}

function PlantStatGrid() {
  return (
    <div className="flex flex-col sm:flex-row w-full lg:w-[800px] mt-10 lg:mt-0">
      <PlantCard />
      <SeedStackedAreaChart />
    </div>
  );
}

function PlantCard() {
  return (
    <div className="w-full lg:w-1/2 h-96 relative rounded-xl overflow-hidden mr-4">
      <Image
        priority
        src={Sapling}
        alt="Sapling"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 p-4">
        <h2 className="text-xl text-gray-200 font-semibold">Saplings</h2>
        <p className="mt-1 text-gray-300">A hope for mankind.</p>
      </div>
    </div>
  );
}
