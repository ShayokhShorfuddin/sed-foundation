'use client';

import { ChevronUp } from 'lucide-react';

export function MoveUpButton() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className="fixed right-5 bottom-5 hidden sm:flex items-center justify-center rounded-full bg-sedGreen hover:scale-110 z-10 cursor-pointer p-1.5 transition-transform duration-200"
      onClick={scrollToTop}
    >
      <ChevronUp color="#ffffff" size={20} />
    </button>
  );
}
