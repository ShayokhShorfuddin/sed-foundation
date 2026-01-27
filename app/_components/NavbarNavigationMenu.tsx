'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function NavbarNavigationMenu() {
  return (
    <NavigationMenu className={'h-min'}>
      <NavigationMenuList>
        <NavigationMenuItem className={'hidden sm:block'}>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="/">Home</Link>}
          />
        </NavigationMenuItem>

        <NavigationMenuItem className={'hidden sm:block'}>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="/about">About</Link>}
          />
        </NavigationMenuItem>

        <NavigationMenuItem className={'hidden sm:block'}>
          <NavigationMenuTrigger
            className={
              'px-2.5 h-fit hover:bg-background data-open:hover:bg-background data-popup-open:hover:bg-background'
            }
          >
            Getting started
          </NavigationMenuTrigger>
          <NavigationMenuContent className={'max-w-xs'}>
            <ul>
              <ListItem href="/climate-action" title="Climate Action">
                Learn about our initiatives and projects focused on combating
                climate change.
              </ListItem>
              <ListItem
                href="/research-and-publications"
                title="Research and Publications"
              >
                Explore our research papers, articles, and publications.
              </ListItem>
              <ListItem
                href="/autumn-school"
                title="Environmental Autumn School"
              >
                Join our annual program to deepen your understanding of
                environmental issues.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className={'hidden sm:block'}>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="/news">News</Link>}
          />
        </NavigationMenuItem>

        <NavigationMenuItem className={'hidden sm:block'}>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="/events">Events</Link>}
          />
        </NavigationMenuItem>

        <NavigationMenuItem className={'hidden sm:block'}>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={
              <Link href="/donate" className="text-sedGreen">
                Donate
              </Link>
            }
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="text-muted-foreground line-clamp-2">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
