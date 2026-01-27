import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Bkash from '@/public/images/bKash.png';
import CityBank from '@/public/images/citybank.png';
import DutchBanglaBank from '@/public/images/dutch-bangla-bank.png';
import Nagad from '@/public/images/nagad.png';
import Donate from '@/public/svgs/donation.svg';

const donationImageAndContent: {
  key: number;
  image: StaticImageData;
  alt: string;
  content: ReactNode;
}[] = [
  { key: 1, image: Bkash, alt: 'Bkash logo', content: <BkashInfo /> },
  { key: 2, image: CityBank, alt: 'City bank logo', content: <CityBankInfo /> },
  {
    key: 3,
    image: DutchBanglaBank,
    alt: 'Dutch Bangla bank logo',
    content: <DBBLInfo />,
  },
  { key: 4, image: Nagad, alt: 'Nagad logo', content: <NagadInfo /> },
];

export default function Info() {
  return (
    <section className="flex justify-center items-start min-h-svh mx-5 lg:mx-20 mt-15 mb-15 xs:mb-0">
      <div className="flex flex-col md:flex-row items-center gap-x-24 gap-y-5">
        <div className="flex flex-col gap-y-5 max-w-[30rem] text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Planet <span className="text-sedGreen">Earth</span> Needs You
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="text-sm md:text-base">
            We kindly ask for your generous support to help us achieve our
            mission of creating a safe and healthy environment. You can assist
            us through donations, moral encouragement, providing resources, or
            by promoting our causes. Tap on a donation option below to get
            started.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-5 justify-center xs:justify-between mt-5">
            {donationImageAndContent.map((item) => (
              <DonationMethodDialog
                key={item.key}
                image={item.image}
                alt={item.alt}
                content={item.content}
              />
            ))}
          </div>
        </div>

        <Image
          src={Donate}
          priority
          alt="Girl hugging the earth"
          className="w-80 lg:w-96"
        />
      </div>
    </section>
  );
}

function DonationMethodDialog({
  image,
  alt,
  content,
}: {
  image: StaticImageData;
  alt: string;
  content: ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <Image
          src={image}
          priority
          alt={alt}
          className="object-scale-down max-w-18 hover:cursor-pointer"
        />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center">
              <Image
                src={image}
                alt={alt}
                className="object-scale-down max-w-8 mr-2.5"
              />

              <p>Donation details.</p>
            </div>
          </DialogTitle>
          <DialogDescription>
            Your support will allow us to continue working towards a better
            future for our planet.
          </DialogDescription>
        </DialogHeader>

        {content}
      </DialogContent>
    </Dialog>
  );
}

// Donation info for Bkash
function BkashInfo() {
  return (
    <Link href={'tel:+8801954098845'}>
      Bkash Number: +8801954098845 (Personal)
    </Link>
  );
}

// Donation info for City Bank
function CityBankInfo() {
  return (
    <div className="flex flex-col">
      <p>Account Name: Strategy for Environmental Development Foundation</p>
      <p>Account Number: 3101931931001</p>
      <p>Bank Name: The City Bank Limited</p>
      <p>Branch Name: VIP Road Branch</p>
      <p>City: Dhaka</p>
      <p>Country: Bangladesh</p>
      <p>SWIFT: CIBLBDDH</p>
    </div>
  );
}

// Donation info for Dutch Bangla Bank
function DBBLInfo() {
  return (
    <Link href={'tel:+8801553657919'}>
      DBBL Mobile Service Rocket Number: +8801553657919 (Personal)
    </Link>
  );
}

// Donation info for Nagad
function NagadInfo() {
  return (
    <Link href={'tel:+8801778149680'}>
      Nagad Number: +8801778149680 (Donation)
    </Link>
  );
}
