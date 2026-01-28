import { Footer } from '@/app/_components/Footer';
import { MoveUpButton } from '@/app/_components/MoveUpButton';
import { Navbar } from '@/app/_components/Navbar';
import EventsSection from './EventsSection';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <EventsSection />
      </main>

      <Footer />
      <MoveUpButton />
    </>
  );
}
