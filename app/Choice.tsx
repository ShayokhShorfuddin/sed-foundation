import Volunteer from "@/public/volunteer.jpg";
import Handshake from "@/public/handshake.jpg";
import ForestRound1 from "@/public/forest-round1.jpg";
import ForestRound2 from "@/public/forest-round2.jpg";
import ForestRound3 from "@/public/forest-round3.jpg";
import ForestRound4 from "@/public/forest-round4.jpg";
import Scientist from "@/public/scientist.jpg";
import Image, { StaticImageData } from "next/image";

export default function Choice() {
  return (
    <section className="flex flex-col items-center mt-36">
      <div className="flex flex-col items-center relative text-center">
        <h1 className="text-3xl md:text-4xl font-outfit leading-tight text-center">
          Let's Make Our <span className="text-sedGreen">Planet</span>
          <br />
          Cleaner & Greener<span className="text-sedGreen">.</span>
        </h1>

        <p className="font-outfit mt-3 mx-10">
          Choose how you would want to contribute to this noble cause.
        </p>

        <Image
          src={ForestRound1}
          alt="Forest Round 1"
          className="absolute hidden lg:block -left-24 -top-14 size-14 rounded-full ring-2 ring-sedGreen ring-offset-4 hover:ring-offset-8 transform duration-300 ease-in-out"
        />
        <Image
          src={ForestRound2}
          alt="Forest Round 2"
          className="absolute hidden lg:block -left-44 top-10 size-14 rounded-full ring-2 ring-sedGreen ring-offset-4 hover:ring-offset-8 transform duration-300 ease-in-out"
        />

        <Image
          src={ForestRound3}
          alt="Forest Round 3"
          className="absolute hidden lg:block -right-24 -top-14 size-14 rounded-full ring-2 ring-sedGreen ring-offset-4 hover:ring-offset-8 transform duration-300 ease-in-out"
        />

        <Image
          src={ForestRound4}
          alt="Forest Round 4"
          className="absolute hidden lg:block -right-44 top-10 size-14 rounded-full ring-2 ring-sedGreen ring-offset-4 hover:ring-offset-8 transform duration-300 ease-in-out"
        />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[1200px]
      px-4 mt-10"
      >
        <ChoiceCard
          title="Volunteer"
          description="Work with us side by side."
          image={Volunteer}
        />
        <ChoiceCard
          title="Sponsor"
          description="Fund us to accelerate our mission."
          image={Handshake}
        />
        <ChoiceCard
          title="Research"
          description="Contribute to scientific advancements."
          image={Scientist}
          className="col-span-1 sm:col-span-2 md:col-span-1"
        />
      </div>
    </section>
  );
}

function ChoiceCard({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  className?: string;
}) {
  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      <Image
        priority
        src={image}
        alt="Volunteer"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 p-4">
        <h2 className="text-xl text-gray-200 font-semibold">{title}</h2>
        <p className="mt-1 text-gray-300">{description}</p>
      </div>
    </div>
  );
}
