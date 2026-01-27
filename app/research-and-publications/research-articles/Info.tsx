import Image from 'next/image';
import BoyReadingPaper from '@/public/svgs/legal.svg';

export function Info() {
  return (
    <section className="container mx-auto min-h-svh flex justify-between items-start mt-15 mb-15 xs:mb-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-15 gap-x-10 mx-5 lg:mx-20 w-full">
        {/* Texts */}
        <div className="flex flex-col gap-y-5 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            <span className="text-sedGreen">Research</span> Articles
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="text-sm max-w-[26rem]">
            We publish rigorous, peer-reviewed research articles that contribute
            to the global discourse on environmental sustainability. These
            articles disseminate groundbreaking findings on climate resilience,
            ecosystem restoration, and clean energy transitions, ensuring that
            knowledge reaches policymakers, educators, and communities.
          </p>
        </div>

        {/* Image */}
        <Image
          src={BoyReadingPaper}
          priority
          alt="A boy reading a research paper"
          className="w-[11rem] xs:w-[14rem] sm:w-[17rem] lg:w-[20rem]"
        />
      </div>
    </section>
  );
}
