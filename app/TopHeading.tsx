"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.jpg";
import Facebook from "@/public/facebook.svg";
import X from "@/public/x.svg";
import Linkedin from "@/public/linkedin.svg";
import Youtube from "@/public/youtube.svg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { X as XIcon } from "lucide-react";

export default function TopHeading() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container flex justify-between items-center mt-3">
      <Image src={Logo} alt="SED Logo" className="w-20 sm:w-24" />
      <Navlinks />
      <SocialMedias />

      <Button
        variant={"ghost"}
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <XIcon size={24} /> : <Menu size={24} />}
      </Button>

      {isMenuOpen && (
        <div className="absolute top-16 z-20 left-0 right-0 bg-white shadow-md p-4 md:hidden [&_li]:py-1">
          <ul className="space-y-2">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Projects</Link>
            </li>
            <li>
              <Link href={"/"}>News</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>

            <li>
              <div className="flex mt-3">
                <Link href={"https://www.facebook.com/"}>
                  <Image src={Facebook} alt="SED Facebook" className="mr-7" />
                </Link>

                <Link href={"https://x.com/home"}>
                  <Image src={X} alt="SED Facebook" className="mr-7" />
                </Link>

                <Link href={"https://www.linkedin.com/"}>
                  <Image src={Linkedin} alt="SED Facebook" className="mr-7" />
                </Link>

                <Link href={"https://www.youtube.com/"}>
                  <Image src={Youtube} alt="SED Facebook" className="mr-7" />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function Navlinks() {
  return (
    <div className="hidden md:flex">
      <Link
        href={"/"}
        className="mr-7 hover:text-sedGreen transition duration-160 ease-in-out"
      >
        Home
      </Link>
      <Link
        href={"/"}
        className="mr-7 hover:text-sedGreen transition duration-160 ease-in-out"
      >
        About
      </Link>
      <Link
        href={"/"}
        className="mr-7 hover:text-sedGreen transition duration-160 ease-in-out"
      >
        Projects
      </Link>
      <Link
        href={"/"}
        className="mr-7 hover:text-sedGreen transition duration-160 ease-in-out"
      >
        News
      </Link>
      <Link
        href={"/"}
        className="hover:text-sedGreen transition duration-160 ease-in-out"
      >
        Contact
      </Link>
    </div>
  );
}

function SocialMedias() {
  return (
    <div className="hidden md:flex">
      <Link href={"https://www.facebook.com/"}>
        <Image src={Facebook} alt="SED Facebook" className="mr-6" />
      </Link>

      <Link href={"https://x.com/home"}>
        <Image src={X} alt="SED Facebook" className="mr-6" />
      </Link>

      <Link href={"https://www.linkedin.com/"}>
        <Image src={Linkedin} alt="SED Facebook" className="mr-6" />
      </Link>

      <Link href={"https://www.youtube.com/"}>
        <Image src={Youtube} alt="SED Facebook" className="mr-6" />
      </Link>
    </div>
  );
}
