import Image from "next/image";
import Turbine from "@/public/turbine.jpg";
import Forest1 from "@/public/forest-wide1.jpg";
import Forest2 from "@/public/forest-wide2.jpg";

function Card1() {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl border border-gray-200 hover:border-sedGreen w-full h-full transition duration-200 ease-in-out">
      <h1 className="text-4xl md:text-5xl font-outfit">12k</h1>
      <p className="mt-2">Volunteers</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="col-span-3 md:col-span-2 row-span-1 relative overflow-hidden rounded-xl">
      <Image
        priority
        src={Forest2}
        alt="Forest2"
        fill
        className="object-cover"
      />
    </div>
  );
}

function Card3() {
  return (
    <div className="row-span-2 sm:hidden md:block relative rounded-xl overflow-hidden">
      <Image
        priority
        src={Turbine}
        alt="Turbine"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 p-4">
        <h2 className="text-xl text-gray-200 font-semibold">
          Renewable Energy
        </h2>
        <p className="mt-1 text-gray-300">A carbon-free approach.</p>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="col-span-3 md:col-span-2 row-span-1 relative overflow-hidden rounded-xl">
      <Image
        priority
        src={Forest1}
        alt="Forest1"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/20 p-4">
        <h2 className="text-xl text-gray-200 font-semibold">Vibrance</h2>
        <p className="mt-1 text-gray-300">A better planet for all.</p>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl border border-gray-200 hover:border-sedGreen w-full h-full transition duration-200 ease-in-out">
      <h1 className="text-4xl md:text-5xl font-outfit">36k</h1>
      <p className="mt-2">Trees Planted</p>
    </div>
  );
}

export default function GridCards() {
  return (
    <div className="flex flex-col items-center mt-12 md:mt-18">
      <h1 className="text-2xl md:text-3xl font-outfit">One Mission</h1>
      <p className="text-sedGreen font-outfit text-4xl md:text-5xl">
        Worldwide
      </p>
      <p className="mt-0 sm:mt-5 font-outfit w-full sm:w-96 p-5 sm:p-0 text-center">
        We work with partners and communities to ensure nature thrives and
        climate change is reversed.
      </p>
      <div className="hidden sm:grid grid-cols-4 grid-rows-2 gap-4 mt-10 w-[600px] md:w-[720px] lg:w-[1000px] xl:w-[1100px] h-96 lg:h-[410px]">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
      </div>

      <div className="flex flex-col sm:hidden w-full">
        <Card1Mobile />
        <Card5Mobile />
        <Card4Mobile />
      </div>
    </div>
  );
}

function Card1Mobile() {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl border border-gray-200 hover:border-sedGreen mx-9 p-5 transition duration-200 ease-in-out">
      <h1 className="text-4xl font-outfit">12k</h1>
      <p className="mt-2">Volunteers</p>
    </div>
  );
}

function Card5Mobile() {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl border border-gray-200 hover:border-sedGreen mx-9 mt-5 p-5 transition duration-200 ease-in-out">
      <h1 className="text-4xl font-outfit">36k</h1>
      <p className="mt-2">Trees Planted</p>
    </div>
  );
}

function Card4Mobile() {
  return (
    <div className="relative h-52 overflow-hidden rounded-xl mt-5 mx-9">
      <Image
        priority
        src={Forest1}
        alt="Forest1"
        fill
        className="object-cover"
      />

      <div className="absolute -inset-1 flex flex-col justify-end bg-gradient-to-t from-black/20 p-4">
        <h2 className="text-lg text-gray-200 font-semibold">Vibrance</h2>
        <p className=" text-gray-300 text-sm">A better planet for all.</p>
      </div>
    </div>
  );
}
