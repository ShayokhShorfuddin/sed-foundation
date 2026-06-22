import { Footer } from '@/app/_components/Footer';
import { MoveUpButton } from '@/app/_components/MoveUpButton';
import { Navbar } from '@/app/_components/Navbar';
import NoticeSection from './NoticeSection';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <NoticeSection />
      </main>
      <MoveUpButton />
      <Footer />
    </>
  );
}
