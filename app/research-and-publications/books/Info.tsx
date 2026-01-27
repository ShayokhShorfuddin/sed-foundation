import Image from 'next/image';
import BoyReadingBook from '@/public/svgs/book.svg';

export function Info() {
  return (
    <section className="container mx-auto min-h-svh flex justify-between items-start mt-15 mb-15 xs:mb-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-15 gap-x-10 mx-5 lg:mx-20 w-full">
        {/* Texts */}
        <div className="flex flex-col gap-y-5 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl font-semibold text-sedGreen">
            Books
          </h1>

          <p className="text-sm max-w-[26rem]">
            SED Foundation publishes authoritative books that delve into
            critical environmental issues, blending scientific rigor with
            practical solutions. From climate action handbooks for policymakers
            to educational guides for communities, our publications aim to
            democratize knowledge and inspire transformative action.
          </p>
        </div>

        {/* Image */}
        <Image
          src={BoyReadingBook}
          priority
          alt="A boy reading a book"
          className="w-[15rem] xs:w-[18rem] sm:w-[21rem] md:w-[23rem] lg:w-[26rem]"
        />
      </div>
    </section>
  );
}
