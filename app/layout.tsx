import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SED | Strategy for Environmental Development Foundation",
  description:
    "Strategy for Environmental Development (SED) is founded in Bangladesh in light of the motto “Save the Environment, Save Your Existence”. Bangladesh is the country currently affected heavily from the cause of climate change. Also, some man-made causes damage the environment of the Country. Global warming and change of weather patterns originated many complications and affected both directly and indirectly the whole environment with its ecology.",

  metadataBase: new URL("https://sedbd.org"),

  openGraph: {
    title: "SED | Strategy for Environmental Development Foundation",
    description:
      "Strategy for Environmental Development (SED) is founded in Bangladesh in light of the motto “Save the Environment, Save Your Existence”. Bangladesh is the country currently affected heavily from the cause of climate change. Also, some man-made causes damage the environment of the Country. Global warming and change of weather patterns originated many complications and affected both directly and indirectly the whole environment with its ecology.",
    url: "https://sedbd.org",
    siteName: "SED | Strategy for Environmental Development Foundation",
    // images: [
    //   {
    //     url: "/wordmark.png",
    //     alt: "The SED Foundation",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },

  // twitter: {
  //   images: ["/wordmark.png"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
