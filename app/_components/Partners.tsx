import Image from 'next/image';
import Eha from '@/public/images/eha.jpg';
import Nuclear from '@/public/svgs/nuclear.svg';
import UWE from '@/public/svgs/UWE_Bristol_logo.svg';

export function Partners() {
  return (
    <section className="container mx-auto mt-20 sm:mt-30 md:mt-40">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center px-5 gap-y-10">
        {/* Texts*/}
        <div className="flex flex-col items-center lg:items-start gap-y-4 max-w-md">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-nowrap">
            Our <span className="text-sedGreen">Partners</span>
          </p>

          <p className="text-sm text-center lg:text-start text-stone-600">
            We are proud to collaborate with a diverse group of partners who
            share our commitment to sustainability and environmental
            stewardship. Together, we work on groundbreaking projects that drive
            positive change and promote a greener future for all.
          </p>
        </div>

        {/* Partners logo */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-5">
          <Image src={UWE} alt="UWE Bristol" className="rounded-lg w-54" />
          <Image src={Eha} alt="EHA Publication" className="rounded size-28" />
          <Image
            src={Nuclear}
            alt="Bangladesh Atomic Energy Commission"
            className="size-34"
          />
        </div>
      </div>
    </section>
  );
}
