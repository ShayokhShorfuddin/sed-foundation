import Image from 'next/image';
import Link from 'next/link';
import { SidebarTrigger } from '@/components/ui/sidebar';
import Wordmark from '@/public/images/wordmark-transparent.png';
import FacebookIcon from '@/public/svgs/facebook.svg';
import LinkedInIcon from '@/public/svgs/linkedin.svg';
import TwitterIcon from '@/public/svgs/twitter.svg';
import { NavbarNavigationMenu } from './NavbarNavigationMenu';

export function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between px-4 md:px-10 mt-2">
        {/* Wordmark */}
        <Link href="/">
          <Image
            src={Wordmark}
            priority
            alt="Wordmark of SED Foundation"
            className="w-18 md:w-20"
          />
        </Link>

        <NavbarNavigationMenu />

        {/* Social media icons */}
        <div className="hidden lg:flex gap-x-3.5 items-center">
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
            aria-label="Visit SED Foundation X page"
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

        <SidebarTrigger className={'sm:hidden'} />
      </nav>
    </header>
  );
}
