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

          <SidebarMenuItem key={'Getting started'}>
            <SidebarMenuButton>Getting Started</SidebarMenuButton>

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

          <SidebarMenuItem key={'Donate'}>
            <SidebarMenuButton
              render={
                <Link href="/donate" className="text-sedGreen">
                  Donate
                </Link>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
