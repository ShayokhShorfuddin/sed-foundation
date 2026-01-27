import Image from 'next/image';
import Camping from '@/public/svgs/camp.svg';

export function Info() {
  return (
    <section className="container mx-auto min-h-svh flex justify-between items-start mt-15 mb-15 xs:mb-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-15 gap-x-10 mx-5 lg:mx-20 w-full">
        {/* Texts */}
        <div className="flex flex-col gap-y-5 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            <span className="text-sedGreen">Autumn</span> School
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="text-sm max-w-[26rem]">
            Every year, we organize a week-long Environmental Autumn School. The
            program is designed to provide learners with an opportunity to learn
            in-depth about the environment and climate. The program is open to
            all age groups and is a great way to learn about the environment.
          </p>
        </div>

        {/* Image */}
        <Image
          src={Camping}
          priority
          alt="Two students camping in the middle of the forest"
          className="w-[14rem] sm:w-[24rem] lg:w-[30rem]"
        />
      </div>
    </section>
  );
}
