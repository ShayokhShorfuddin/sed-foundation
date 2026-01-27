import Image from 'next/image';
import NewsletterEmail from '@/public/svgs/newsletter.svg';

export function Info() {
  return (
    <section className="container mx-auto min-h-svh flex justify-between items-start mt-15 mb-15 xs:mb-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-15 gap-x-10 mx-5 lg:mx-20 w-full">
        {/* Texts */}
        <div className="flex flex-col gap-y-5 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl font-semibold text-sedGreen">
            Newsletter
          </h1>

          <p className="text-sm max-w-[26rem]">
            Our quarterly newsletter keeps our global community informed and
            inspired. Packed with updates on breakthrough research, success
            stories from the field, and interviews with environmental
            trailblazers, it highlights actionable steps individuals and
            organizations can take to advance sustainability.
          </p>
        </div>

        {/* Image */}
        <Image
          src={NewsletterEmail}
          priority
          alt="A girl holding a mail"
          className="w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[27rem]"
        />
      </div>
    </section>
  );
}
