import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import Journal from '@/public/images/journal.jpg';
import Library from '@/public/images/library.jpg';
import Newsletter from '@/public/images/newsletter.jpg';
import PlantResearch from '@/public/images/plant-research.jpg';
import Statistics from '@/public/images/statistics.jpg';

type Program = {
  image: StaticImageData;
  href: string;
  title: string;
  alt: string;
  description: string;
};

const programs: Program[] = [
  {
    image: PlantResearch,
    href: '/research-and-publications/research-programs',
    title: 'Research Programs',
    alt: 'A scientist researching a tiny plant',
    description:
      'Our organization is committed to advancing cutting-edge environmental research through pioneering programs that address pressing global challenges. By collaborating with scientists, policymakers, and grassroots leaders, we generate evidence-based solutions to mitigate climate change, promote sustainable practices, and protect biodiversity.',
  },

  {
    image: Statistics,
    href: '/research-and-publications/research-articles',
    title: 'Research Articles',
    alt: 'A paper with lots of graphs and charts',
    description:
      'We publish rigorous, peer-reviewed research articles that contribute to the global discourse on environmental sustainability. These articles disseminate groundbreaking findings on climate resilience, ecosystem restoration, and clean energy transitions, ensuring that knowledge reaches policymakers, educators, and communities.',
  },

  {
    image: Journal,
    href: '/research-and-publications/journal',
    title: 'SED Journal Of Environment Studies',
    alt: 'An open book',
    description:
      'The SED Journal of Environment Studies serves as a premier interdisciplinary platform for scholars and practitioners. It features peer-reviewed articles, case studies, and critical analyses on topics ranging from climate policy to sustainable urban development.',
  },

  {
    image: Library,
    href: '/research-and-publications/books',
    title: 'Books',
    alt: 'A shelf filled with books',
    description:
      'SED Foundation publishes authoritative books that delve into critical environmental issues, blending scientific rigor with practical solutions. From climate action handbooks for policymakers to educational guides for communities, our publications aim to democratize knowledge and inspire transformative action.',
  },

  {
    image: Newsletter,
    href: '/research-and-publications/newsletter',
    title: 'Newsletter',
    alt: 'An newsletter email open in a laptop',
    description:
      'Our quarterly newsletter keeps our global community informed and inspired. Packed with updates on breakthrough research, success stories from the field, and interviews with environmental trailblazers, it highlights actionable steps individuals and organizations can take to advance sustainability.',
  },
];
export function Programs() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center mx-5 mt-15 lg:mt-20 mb-20">
        {/* Texts */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            <span className="text-sedGreen">Research</span> And Publications
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="text-sm mt-5 max-w-96">
            We offer a variety of programs designed to engage and educate
            everyone. There's something for everyone to get involved in and make
            a difference.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5 w-full mt-12">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              image={program.image}
              href={program.href}
              title={program.title}
              alt={program.alt}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  image,
  href,
  title,
  alt,
  description,
}: {
  image: StaticImageData;
  href: string;
  title: string;
  alt: string;
  description: string;
}) {
  return (
    <Link href={href}>
      <div className="flex flex-col rounded-2xl p-4 border-2 border-gray-100 hover:border-sedGreen transition duration-350 ease-in-out">
        <Image
          src={image}
          alt={alt}
          className="rounded-xl"
          placeholder="blur"
        />

        <p className="mt-6 text-xl font-semibold">{title}</p>
        <p className="mt-2 text-sm line-clamp-5">{description}</p>
      </div>
    </Link>
  );
}
