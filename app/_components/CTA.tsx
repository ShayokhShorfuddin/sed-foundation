import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import CTAMiddle from '@/public/svgs/cta-middle.svg';

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
            aria-hidden={true}
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

          <DialogButton />
        </div>
      </div>
    </section>
  );
}

function DialogButton() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            className="mt-5 w-full bg-sedGreen hover:bg-sedGreen/90 text-white font-medium py-2 px-3 rounded-lg transition-colors text-sm cursor-pointer"
          >
            Contact Us
          </button>
        }
      />

      <DialogContent className="border-stone-700">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Get in touch with our professional team.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-y-6">
          <PhoneCall />
          <Location />
          <Email />
        </div>

        <DialogFooter>
          <DialogClose
            render={
              <button
                type="button"
                className="bg-neutral-50 hover:bg-neutral-100 text-neutral-900 font-medium py-2 px-3 rounded-lg transition-colors text-sm border border-neutral-300"
              >
                Close
              </button>
            }
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function Location() {
  return (
    <div className="flex">
      <MapPin className="mr-2" strokeWidth={1} />

      <Link
        target="_blank"
        href="https://maps.app.goo.gl/HvAgd7TzznZcXjLJ6"
        className="hover:underline text-sm w-[12rem]"
        rel="noopener"
      >
        803/A, Khilgaon Tilpapara, Road 14, Dhaka-1219
      </Link>
    </div>
  );
}

export function PhoneCall() {
  return (
    <div className="flex items-center">
      <Phone className="mr-2" strokeWidth={1} />

      <p className="text-sm">
        <Link href={'tel:+8801778149680'}>+880-1778-149680</Link>
        <br />
        <Link href={'tel:+8801777436084'}>+880-1777-436084</Link>
      </p>
    </div>
  );
}

export function Email() {
  return (
    <div className="flex">
      <Mail className="mr-2" strokeWidth={1} />

      <p className="hover:underline text-sm">
        <Link href="mailto:info@sedbd.org">info@sedbd.org</Link>
      </p>
    </div>
  );
}
