import Image from 'next/image';
import Link from 'next/link';
import Wordmark from '@/public/images/wordmark-transparent.png';
import FacebookIcon from '@/public/svgs/facebook.svg';
import LinkedInIcon from '@/public/svgs/linkedin.svg';
import TwitterIcon from '@/public/svgs/twitter.svg';
import { NavbarNavigationMenu } from './NavbarNavigationMenu';

export function Navbar() {
  return (
    <header>
      <nav className="flex justify-between px-10 mt-2">
        {/* Wordmark */}
        <Link href="/">
          <Image
            src={Wordmark}
            priority
            alt="Wordmark of SED Foundation"
            height={90}
            width={90}
          />
        </Link>

        <NavbarNavigationMenu />

        {/* Social media icons */}
        <div className="flex gap-x-3.5 items-center">
          {/* Facebook */}
          <Link
            href="https://www.facebook.com/sedbangladesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit SED Bangladesh Facebook page"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src={FacebookIcon}
              alt="Facebook icon"
              className="size-5.5"
            />
          </Link>

          {/* Twitter */}
          <Link
            href="https://x.com/SED_Foundation"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit SED Foundation X (Formally Twitter) page"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src={TwitterIcon} alt="Twitter icon" className="size-5.5" />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/company/strategy-for-environmental-development-sed-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit SED Foundation LinkedIn page"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src={LinkedInIcon}
              alt="LinkedIn icon"
              className="size-5.5"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
