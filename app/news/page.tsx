import { Footer } from '@/app/_components/Footer';
import { MoveUpButton } from '@/app/_components/MoveUpButton';
import { Navbar } from '@/app/_components/Navbar';
import NewsSection from './NewsSection';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <NewsSection />
      </main>

      <Footer />
      <MoveUpButton />
    </>
  );
}
