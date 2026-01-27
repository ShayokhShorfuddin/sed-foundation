import { Footer } from '../_components/Footer';
import { MoveUpButton } from '../_components/MoveUpButton';
import { Navbar } from '../_components/Navbar';
import Programs from './Programs';

export default function About() {
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
