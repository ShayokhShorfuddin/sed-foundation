import { Bento } from "./_components/Bento";
import Choice from "./_components/Choice";
import { Hero } from "./_components/Hero";

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Bento />
        <Choice />
      </main>
    </>
  );
}
