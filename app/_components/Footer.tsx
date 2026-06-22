import Image from 'next/image';
import Link from 'next/link';
import WordMarkTransparent from '@/public/images/wordmark-transparent.png';
import { ContactUsDialog, Email, PhoneCall } from './ContactUsDialog';

export function Footer() {
  return (
    <footer className="w-full">
      <div className="container px-5 mx-auto w-full flex flex-col xs:flex-row justify-between items-center xs:items-end gap-y-6 gap-x-4">
        {/* Logo and text */}
        <div className="flex flex-col items-center xs:items-start">
          <Image
            src={WordMarkTransparent}
            alt="SED Logo"
            height={100}
            width={100}
          />

          <p className="text-center xs:text-left text-sm sm:text-base max-w-96 text-stone-700">
            SED is a dedicated international environmental organization
            committed to preventing climate change and promoting sustainable
            development.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-start gap-x-14">
          <div className="flex flex-col gap-y-2 xs:gap-y-1">
            <Link href="/">
              <p className="text-sm hover:underline">Home</p>
            </Link>

            <Link href="/about">
              <p className="text-sm hover:underline">About</p>
            </Link>

            <Link href="/news">
              <p className="text-sm hover:underline">News</p>
            </Link>
          </div>

          <div className="flex flex-col gap-y-2 xs:gap-y-1">
            <Link href="/events">
              <p className="text-sm hover:underline">Events</p>
            </Link>

            <Link href="/notice">
              <p className="text-sm hover:underline">Notice</p>
            </Link>

            <ContactUsDialog
              trigger={
                <button
                  type="button"
                  className="text-sm cursor-pointer hover:underline"
                >
                  Contact
                </button>
              }
            />

            <Link href="/donate">
              <p className="text-sm text-sedGreen hover:underline">Donate</p>
            </Link>
          </div>

          {/* Contacts */}
          <div className="hidden sm:flex flex-col gap-y-2">
            <Email />
            <PhoneCall />
          </div>
        </div>
      </div>

      {/* Green bottom bar */}
      <div className="w-full bg-sedGreen p-4 mt-6">
        <p className="text-black text-xs text-center">
          Copyright &copy; 2017-{new Date().getFullYear()} SED. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
