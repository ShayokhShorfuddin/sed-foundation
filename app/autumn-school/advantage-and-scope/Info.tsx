import Image from 'next/image';
import Hiking from '@/public/svgs/hiking.svg';

export function Info() {
  return (
    <section className="container mx-auto min-h-svh flex justify-between items-start mt-15 mb-15 xs:mb-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-15 gap-x-10 mx-5 lg:mx-20 w-full">
        {/* Texts */}
        <div className="flex flex-col gap-y-5 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            <span className="text-sedGreen">Advantage</span> & Scope
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="text-sm max-w-[26rem]">
            Participating in the Autumn School offers numerous advantages,
            including hands-on learning experiences, networking opportunities
            with environmental experts, and a chance to contribute to real-world
            sustainability projects and initiatives.
          </p>
        </div>

        {/* Image */}
        <Image
          src={Hiking}
          priority
          alt="Girl walking in a forest"
          className="w-[14rem] sm:w-[24rem] lg:w-[30rem]"
        />
      </div>
    </section>
  );
}
