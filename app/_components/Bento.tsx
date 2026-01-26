import Image from "next/image";
import VastGrassfield from "@/public/images/vast-grassfield.jpg";
import Hiking from "@/public/svgs/hiking.svg";
import SmallPerson from "@/public/svgs/small-person.svg";
import Tree from "@/public/svgs/tree.svg";

export function Bento() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col mx-5">
        {/* Texts */}
        <div className="flex flex-col items-center gap-x-5 text-center mt-20 lg:mt-30">
          <p className="text-nowrap text-2xl xs:text-3xl sm:text-3xl font-semibold">
            One Mission <br />
            <span className="text-3xl sm:text-5xl text-sedGreen">
              Worldwide
            </span>
          </p>

          <p className="text-stone-700 mt-4 max-w-96 text-sm">
            We work with partners and communities to ensure nature thrives and
            climate change is reversed.
          </p>
        </div>

        {/* Bento Grid*/}
        <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-2 gap-4 mt-10 h-72 md:h-80 w-full">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
        </div>
      </div>
    </section>
  );
}

function Card1() {
  return (
    <div className="relative flex flex-col justify-center items-center rounded-xl border-2 border-sedGreen w-full h-full">
      <p className="text-3xl xs:text-4xl md:text-5xl">12k</p>
      <p className="mt-2 text-sm xs:text-base">Volunteers</p>
      <Image
        src={SmallPerson}
        alt="An illustration of a person"
        className="absolute bottom-0 left-1 size-5 xs:size-7"
      />
    </div>
  );
}

function Card2() {
  return (
    <div className="order-2 sm:order-1 relative col-span-2 overflow-hidden rounded-xl">
      <Image
        priority
        src={VastGrassfield}
        alt="A vast green grassfield"
        fill
        placeholder="blur"
        className="object-cover"
      />
    </div>
  );
}

function Card3() {
  return (
    <div className="order-2 row-span-2 hidden md:block relative rounded-xl overflow-hidden border-2 border-sedGreen">
      <Image
        priority
        src={Hiking}
        alt="A girl hiking in the mountains"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

function Card4() {
  return (
    <div className="order-2 sm:order-3 hidden sm:flex justify-center items-center col-span-2 rounded-xl border-2 border-sedGreen w-full h-full">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif">
        <span className="text-sedGreen">SED</span> Foundation
      </p>
    </div>
  );
}

function Card5() {
  return (
    <div className="order-1 sm:order-4 relative flex flex-col justify-center items-center rounded-xl border-2 border-sedGreen w-full h-full">
      <p className="text-3xl xs:text-4xl md:text-5xl">6k</p>
      <p className="mt-2 text-sm xs:text-base">Trees Planted</p>
      <Image
        src={Tree}
        alt="An illustration of a tree"
        className="absolute bottom-0 right-1 size-5 xs:size-7"
      />
    </div>
  );
}
