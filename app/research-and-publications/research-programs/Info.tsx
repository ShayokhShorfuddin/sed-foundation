import Image from 'next/image';
import LabResearch from '@/public/svgs/research.svg';

export function Info() {
  return (
    <section className="container mx-auto min-h-svh flex justify-between items-start mt-15 mb-15 xs:mb-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-15 gap-x-10 mx-5 lg:mx-20 w-full">
        {/* Texts */}
        <div className="flex flex-col gap-y-5 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            <span className="text-sedGreen">Research</span> Programs
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="text-sm max-w-[26rem]">
            Our organization is committed to advancing cutting-edge
            environmental research through pioneering programs that address
            pressing global challenges. By collaborating with scientists,
            policymakers, and grassroots leaders, we generate evidence-based
            solutions to mitigate climate change, promote sustainable practices,
            and protect biodiversity.
          </p>
        </div>

        {/* Image */}
        <Image
          src={LabResearch}
          priority
          alt="A scientist researching a plant"
          className="w-[20rem] sm:w-[24rem] lg:w-[30rem]"
        />
      </div>
    </section>
  );
}
