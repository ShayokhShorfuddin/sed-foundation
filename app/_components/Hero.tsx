import Image from "next/image";
import Land from "@/public/images/flower-field.png";

export function Hero() {
  return (
    <section className="container mx-auto relative w-full overflow-hidden mt-6 sm:mt-10 md:mt-16">
      {/* Hero section container */}
      <div className="flex flex-col justify-center items-center mx-5">
        {/* Hero text */}
        <h1 className="select-none text-center text-3xl xs:text-5xl sm:text-6xl leading-10 xs:leading-16 sm:leading-18">
          A <span className="text-sedGreen">Modern</span>{" "}
          <span className="relative after:content-[''] after:w-full after:h-[30px] after:left-0 after:bottom-[-20px] after:z-10 after:absolute after:bg-center after:bg-no-repeat after:bg-cover after:bg-[url('/svgs/line.svg')]">
            Tomorrow
          </span>
          <br />
          For Generations To Come
          <span className="text-sedGreen">.</span>
        </h1>

        {/* Subtext */}
        <p className="select-none text-center text-sm xs:text-base mt-4 max-w-96 text-stone-600">
          Confronting climate change through cutting-edge approaches and united
          efforts.
        </p>
      </div>

      {/* Hero image */}
      <div className="flex justify-center mx-2 mt-9 relative">
        <Image
          src={Land}
          priority
          placeholder="blur"
          alt="A wide view of a flower field with mountains on the horizon"
          className="object-cover"
        />
      </div>
    </section>
  );
}
