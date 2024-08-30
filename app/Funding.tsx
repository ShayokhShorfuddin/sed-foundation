import Image from "next/image";
import CodeClimate from "@/public/code-climate.svg";
import TreeGlass from "@/public/tree-glass.jpg";
import TheClimateCorporation from "@/public/the-climate-corporation.svg";
import { FundStackedAreaChart } from "./FundStackedGraph";

export default function Funding() {
  return (
    <section className="container flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center mt-28 lg:mt-44">
      <FundStatGrid />
      <FundText />
    </section>
  );
}

function FundText() {
  return (
    <div className="lg:ml-24 text-center lg:text-left">
      <h1 className="text-4xl font-outfit leading-tight">
        Funding <span className="text-sedGreen">Care</span>
        <br />
        Fresher Air<span className="text-sedGreen">.</span>
      </h1>
      <p className="mt-5 w-full sm:w-80 font-outfit">
        Our fundraising drives enable us to support cutting-edge research into
        renewable energy technologies and sustainable practices. We channel
        donations into grants for scientists and engineers working on
        breakthrough solutions to reduce carbon emissions.
      </p>
      <div className="flex justify-center mt-7">
        <Image src={CodeClimate} alt="Code Climate" className="w-36 mr-5" />
        <Image
          src={TheClimateCorporation}
          alt="The Climate Corporation"
          className="w-36"
        />
      </div>
    </div>
  );
}

function FundStatGrid() {
  return (
    <div className="flex flex-col sm:flex-row w-full lg:w-[800px] mt-10 lg:mt-0">
      <FundCard />
      <FundStackedAreaChart />
    </div>
  );
}

function FundCard() {
  return (
    <div className="w-full lg:w-1/2 h-96 relative rounded-xl overflow-hidden mr-4">
      <Image
        priority
        src={TreeGlass}
        alt="Sapling"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/65 p-4">
        <h2 className="text-xl text-gray-200 font-semibold">Flora</h2>
        <p className="mt-1 text-gray-300">Art by Deepmind.</p>
      </div>
    </div>
  );
}
