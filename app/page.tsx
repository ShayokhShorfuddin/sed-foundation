import { Bento } from "./_components/Bento";
import { Choice } from "./_components/Choice";
import { FAQ } from "./_components/FAQ";
import { Hero } from "./_components/Hero";
import { Partners } from "./_components/Partners";

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Bento />
        <Choice />
        <FAQ />
        <Partners />
      </main>
    </>
  );
}
