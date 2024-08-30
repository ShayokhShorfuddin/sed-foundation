import Image from "next/image";
import Link from "next/link";
import LogoTransparent from "@/public/logo-transparent.png";
import Pin from "@/public/pin.svg";
import Phone from "@/public/phone.svg";
import Mail from "@/public/mail.svg";
import Tree from "@/public/tree-footer.svg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-green-100 mt-40 pb-16">
      <div className="container flex flex-col md:flex-row relative text-center md:text-left items-center md:items-start w-full">
        <div className="flex flex-col items-center md:items-start w-96 md:mr-10">
          <Image src={LogoTransparent} alt="Logo" className="w-28 md:w-32" />

          <p className="text-gray-600 mt-1 text-sm sm:text-base">
            SED is a dedicated international environmental organization
            committed to prevent climate change and promote sustainable
            development.
          </p>

          <p className="text-gray-600 text-xs mt-6">
            Copyright © 2012-2024 SED. All rights reserved.
          </p>
        </div>

        <div className="mt-20 hidden md:block mr-10">
          <PhoneCall />
          <Location />
          <Email />
        </div>

        <div className="flex md:flex-col justify-between mt-20 w-full md:w-auto max-w-80">
          <Link
            href={"/"}
            className="hover:text-sedGreen transition duration-160 ease-in-out mt-2 text-sm text-gray-600"
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="hover:text-sedGreen transition duration-160 ease-in-out mt-2 text-sm text-gray-600"
          >
            About
          </Link>
          <Link
            href={"/"}
            className="hover:text-sedGreen transition duration-160 ease-in-out mt-2 text-sm text-gray-600"
          >
            Projects
          </Link>
          <Link
            href={"/"}
            className="hover:text-sedGreen transition duration-160 ease-in-out mt-2 text-sm text-gray-600"
          >
            News
          </Link>
          <Link
            href={"/"}
            className="hover:text-sedGreen transition duration-160 ease-in-out mt-2 text-sm text-gray-600"
          >
            Contact
          </Link>
        </div>

        <Image
          src={Tree}
          alt="Tree-footer"
          className="absolute hidden lg:block -bottom-5 right-0 size-48"
        />
      </div>
    </footer>
  );
}

function Location() {
  return (
    <div className="flex mt-5">
      <Image src={Pin} alt="Pin" className="mr-2" />
      <a
        href="https://maps.app.goo.gl/QLYg6ZbjsyRAY9beA"
        className="hover:underline text-gray-600 text-sm"
      >
        Mugda, Dhaka - 1214, Bangladesh
      </a>
    </div>
  );
}

function PhoneCall() {
  return (
    <div className="flex">
      <Image src={Phone} alt="Pin" className="mr-2" />
      <p className="text-gray-600 text-sm">
        +880-1778-149680
        <br />
        +880-1777-436084
      </p>
    </div>
  );
}

function Email() {
  return (
    <div className="flex mt-5">
      <Image src={Mail} alt="SED Mail" className="mr-3" />

      <p className="hover:underline text-gray-600 text-sm">
        <a href="mailto:someone@example.com">info@sedbd.org</a>
      </p>
    </div>
  );
}
