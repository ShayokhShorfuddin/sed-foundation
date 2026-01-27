import { Footer } from '@/app/_components/Footer';
import { MoveUpButton } from '@/app/_components/MoveUpButton';
import { Navbar } from '@/app/_components/Navbar';
import { Info } from './Info';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Info />
      </main>

      <Footer />
      <MoveUpButton />
    </>
  );
}
