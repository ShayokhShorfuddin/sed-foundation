import { Bento } from './_components/Bento';
import { Choice } from './_components/Choice';
import { CTA } from './_components/CTA';
import { FAQ } from './_components/FAQ';
import { Footer } from './_components/Footer';
import { Hero } from './_components/Hero';
import { MoveUpButton } from './_components/MoveUpButton';
import { Navbar } from './_components/Navbar';
import { Partners } from './_components/Partners';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Bento />
        <Choice />
        <FAQ />
        <Partners />
        <CTA />
      </main>

      <Footer />
      <MoveUpButton />
    </>
  );
}
