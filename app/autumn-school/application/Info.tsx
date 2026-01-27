import Image from 'next/image';
import Application from '@/public/svgs/application.svg';

export function Info() {
  return (
    <section className="container mx-auto min-h-svh flex justify-between items-start mt-15 mb-15 xs:mb-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-15 gap-x-10 mx-5 lg:mx-20 w-full">
        {/* Texts */}
        <div className="flex flex-col gap-y-5 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            <span className="text-sedGreen">Call</span> For Application
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="text-sm max-w-[26rem]">
            We invite students from all over the world to apply for the Autumn
            School. The application process is open to students from various
            academic backgrounds, including high school, undergraduate, and
            graduate students.
          </p>
        </div>

        {/* Image */}
        <Image
          src={Application}
          priority
          alt="A student holding an application form"
          className="w-[13rem] sm:w-[24rem] lg:w-[30rem]"
        />
      </div>
    </section>
  );
}
