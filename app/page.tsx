import GridCards from "./BentoCards";
import BottomCard from "./BottomCard";
import Choice from "./Choice";
import CoolingEarth from "./CoolingEarth";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Funding from "./Funding";
import Hero from "./Hero";
import MoveUpButton from "./MoveUpButton";
import { TestimonialCards } from "./Testimonials";
import TopHeading from "./TopHeading";

export default function Home() {
  return (
    <main>
      <TopHeading />
      <Hero />
      <MoveUpButton />
      <GridCards />
      <CoolingEarth />
      <Funding />
      <TestimonialCards />
      <Choice />
      <FAQ />
      <BottomCard />
      <Footer />
    </main>
  );
}
