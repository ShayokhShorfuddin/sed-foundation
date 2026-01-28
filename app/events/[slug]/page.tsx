import { Footer } from '@/app/_components/Footer';
import { MoveUpButton } from '@/app/_components/MoveUpButton';
import { Navbar } from '@/app/_components/Navbar';
import Info from './Info';

type Props = {
  params: Promise<{ slug: string }>;
};
export default async function Page({ params }: Props) {
  const { slug } = await params;

  return (
    <>
      <Navbar />
      <main>
        <Info slug={slug} />
      </main>

      <Footer />
      <MoveUpButton />
    </>
  );
}
