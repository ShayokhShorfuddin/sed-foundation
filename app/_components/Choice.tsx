import Image from "next/image";
import Handshake from "@/public/images/handshake.jpg";
import Scientist from "@/public/images/scientist.jpg";
import Volunteer from "@/public/images/volunteer.jpg";
import Cloud from "@/public/svgs/cloud.svg";
import Pointer from "@/public/svgs/pointer.svg";

export function Choice() {
  return (
    <section className="container mx-auto">
      <div className="relative flex flex-col mx-5 mt-20 lg:mt-40">
        <div className="relative">
          {/* Hand-drawn illustrations */}
          <Image
            src={Cloud}
            alt="A cloud illustration"
            className="hidden md:block absolute size-8 left-1/2 bottom-13 transform -translate-x-70 select-none"
          />
          <Image
            src={Pointer}
            alt="A cursor illustration"
            className="hidden md:block absolute size-6 left-1/2 bottom-14 transform translate-x-60 select-none"
          />

          {/* Texts */}
          <p className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold leading-tight">
            Let's Make Our <span className="text-sedGreen">Planet</span>
            <br />
            <span className="relative after:content-[''] after:w-[140%] sm:after:w-[160%] md:after:w-[120%] after:h-[50px] sm:after:h-[70px] md:after:h-[82px] after:left-[-20px] sm:after:left-[-20px] after:bottom-[-10px] sm:after:bottom-[-17px] after:z-10 after:absolute after:rotate-3 after:bg-center after:bg-no-repeat after:bg-cover after:bg-[url('/svgs/circle-highlight.svg')]">
              Cleaner
            </span>{" "}
            & Greener<span className="text-sedGreen">.</span>
          </p>

          <p className="text-stone-700 text-center mt-6">
            Choose how you would want to contribute to this noble cause.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col xs:flex-row gap-x-3 md:gap-x-5 lg:gap-x-8 gap-y-5 mt-9 xs:mt-11">
          {/* Volunteer card*/}
          <div className="relative sm:hover:-translate-y-2 duration-250 select-none">
            <Image
              src={Volunteer}
              alt="People planting saplings"
              className="rounded-xl"
              placeholder="blur"
              priority
            />

            <div className="absolute inset-0 rounded-xl flex flex-col justify-end bg-gradient-to-t from-black/70 pb-7 md:pb-11 px-2">
              <p className="text-2xl md:text-3xl lg:text-4xl text-center text-white font-semibold font-mono">
                Volunteer
              </p>
              <p className="block xs:hidden md:block mt-1 text-gray-300 text-sm text-center">
                Work with us side by side.
              </p>
            </div>
          </div>

          {/* Sponsor card*/}
          <div className="relative sm:hover:-translate-y-2 duration-250 select-none">
            <Image
              src={Handshake}
              alt="A handshake"
              placeholder="blur"
              className="rounded-xl"
              priority
            />

            <div className="absolute inset-0 rounded-xl flex flex-col justify-end bg-gradient-to-t from-black/70 pb-7 md:pb-11 px-2">
              <p className="text-2xl md:text-3xl lg:text-4xl text-center text-white font-semibold font-mono">
                Sponsor
              </p>
              <p className="block xs:hidden md:block mt-1 text-gray-300 text-sm text-center">
                Fund us to accelerate our mission.
              </p>
            </div>
          </div>

          {/* Research card*/}
          <div className="relative sm:hover:-translate-y-2 duration-250 select-none">
            <Image
              src={Scientist}
              alt="Scientist working in a lab"
              placeholder="blur"
              className="rounded-xl"
              priority
            />

            <div className="absolute inset-0 rounded-xl flex flex-col justify-end bg-gradient-to-t from-black/70 pb-7 md:pb-11 px-2">
              <p className="text-2xl md:text-3xl lg:text-4xl text-center text-white font-semibold font-mono">
                Research
              </p>
              <p className="block xs:hidden md:block mt-1 text-gray-300 text-sm text-center">
                Participate in research programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
