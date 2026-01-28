import Image from 'next/image';
import CTAMiddle from '@/public/svgs/cta-middle.svg';
import { ContactUsDialog } from './ContactUsDialog';

export function CTA() {
  return (
    <section className="container flex justify-center mx-auto w-full mt-20 sm:mt-30 md:mt-40 mb-20">
      <div className="flex flex-col md:flex-row justify-between items-center border-3 border-sedGreen p-12 rounded-2xl w-full mx-5 text-center">
        <p className="text-xl xs:text-2xl leading-snug md:pr-5">
          We Can Protect <span className="text-sedGreen">Nature</span>
          <br />
          Be Part Of The Change<span className="text-sedGreen">.</span>
        </p>

        <div className="hidden lg:block">
          <Image
            src={CTAMiddle}
            height={200}
            width={200}
            alt="A girl and boy holding hands under a tree"
          />
        </div>

        <div className="flex flex-col items-center max-w-80 mt-5 md:mt-0">
          <p className="text-sm font-sans">
            Get in touch with us to find out how you can join SED Foundation and
            be a part of a greater good.
          </p>

          <ContactUsDialog
            trigger={
              <button
                type="button"
                className="mt-5 w-full bg-sedGreen hover:bg-sedGreen/90 text-white font-medium py-2 px-3 rounded-lg transition-colors text-sm cursor-pointer"
              >
                Contact Us
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
}
