import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { NavbarSidebar } from './_components/NavbarSidebar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SED | Strategy for Environmental Development Foundation',
  description:
    'Strategy for Environmental Development (SED) is founded in Bangladesh in light of the motto “Save the Environment, Save Your Existence”. Bangladesh is the country currently affected heavily by the cause of climate change. Also, some man-made causes damage the environment of the Country. Global warming and change of weather patterns originated many complications and affected both directly and indirectly the whole environment with its ecology.',

  metadataBase: new URL('https://sedbd.org'),

  openGraph: {
    title: 'SED | Strategy for Environmental Development Foundation',
    description:
      'Strategy for Environmental Development (SED) is founded in Bangladesh in light of the motto “Save the Environment, Save Your Existence”. Bangladesh is the country currently affected heavily from the cause of climate change. Also, some man-made causes damage the environment of the Country. Global warming and change of weather patterns originated many complications and affected both directly and indirectly the whole environment with its ecology.',
    url: 'https://sedbd.org',
    siteName: 'SED | Strategy for Environmental Development Foundation',
    images: [
      {
        url: '/images/wordmark.png',
        alt: 'The SED Foundation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    images: ['/images/wordmark.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider defaultOpen={false}>
      <html lang="en" className={inter.variable}>
        <body className={`${inter.variable} font-inter`}>
          <SidebarInset>{children}</SidebarInset>
          <NavbarSidebar />
        </body>
      </html>
    </SidebarProvider>
  );
}
