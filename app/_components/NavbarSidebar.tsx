import Image from 'next/image';
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import FacebookIcon from '@/public/svgs/facebook.svg';
import LinkedInIcon from '@/public/svgs/linkedin.svg';
import TwitterIcon from '@/public/svgs/twitter.svg';

export function NavbarSidebar() {
  return (
    <Sidebar variant="sidebar" side="right">
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem key={'Home'}>
            <SidebarMenuButton render={<Link href="/">Home</Link>} />
          </SidebarMenuItem>

          <SidebarMenuItem key={'About'}>
            <SidebarMenuButton render={<Link href="/about">About</Link>} />
          </SidebarMenuItem>

          <SidebarMenuItem key={'Get started'}>
            <SidebarMenuButton>Get Started</SidebarMenuButton>

            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton
                  href="/climate-action"
                  className="h-fit py-1.5"
                >
                  Climate Action
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>

              <SidebarMenuSubItem>
                <SidebarMenuSubButton
                  href="/research-and-publications"
                  className="h-fit py-1.5"
                >
                  Research and Publications
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>

              <SidebarMenuSubItem>
                <SidebarMenuSubButton
                  href="/autumn-school"
                  className="h-fit py-1.5"
                >
                  Environmental Autumn School
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarMenuItem>

          <SidebarMenuItem key={'News'}>
            <SidebarMenuButton render={<Link href="/news">News</Link>} />
          </SidebarMenuItem>

          <SidebarMenuItem key={'Events'}>
            <SidebarMenuButton render={<Link href="/events">Events</Link>} />
          </SidebarMenuItem>

          <SidebarMenuItem key={'Notice'}>
            <SidebarMenuButton render={<Link href="/notice">Notice</Link>} />
          </SidebarMenuItem>

          <SidebarMenuItem key={'Donate'}>
            <SidebarMenuButton
              render={
                <Link href="/donate" className="text-sedGreen">
                  Donate
                </Link>
              }
            />
          </SidebarMenuItem>

          <SidebarMenuItem key={'Social Media'}>
            <div className="flex gap-x-3.5 items-center ml-2 mt-2">
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

              <Link
                href="https://x.com/SED_Foundation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit SED Foundation X page"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={TwitterIcon}
                  alt="Twitter icon"
                  className="size-5.5"
                />
              </Link>

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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
