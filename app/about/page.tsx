import { Footer } from '../_components/Footer';
import { MoveUpButton } from '../_components/MoveUpButton';
import { Navbar } from '../_components/Navbar';
import Info from './Info';

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
