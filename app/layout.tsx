import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SED | Strategy for Environmental Development Foundation",
  description:
    "Strategy for Environmental Development (SED) is founded in Bangladesh in light of the motto “Save the Environment, Save Your Existence”. Bangladesh is the country currently affected heavily from the cause of climate change. Also, some man-made causes damage the environment of the Country. Global warming and change of weather patterns originated many complications and affected both directly and indirectly the whole environment with its ecology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
