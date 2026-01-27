import { Footer } from '@/app/_components/Footer';
import { MoveUpButton } from '@/app/_components/MoveUpButton';
import { Navbar } from '@/app/_components/Navbar';
import { Programs } from './Programs';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Programs />
      </main>

      <Footer />
      <MoveUpButton />
    </>
  );
}
