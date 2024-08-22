"use client";

import Image from "next/image";
import Up from "@/public/up.svg";
import { Button } from "@/components/ui/button";

export default function MoveUpButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      className="fixed right-5 bottom-5 rounded-full bg-sedGreen z-10"
      onClick={scrollToTop}
    >
      <Image src={Up} alt="Up" />
    </Button>
  );
}
