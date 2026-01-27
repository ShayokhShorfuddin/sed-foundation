import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import Child from '@/public/images/child.jpg';
import Court from '@/public/images/moot-court.jpg';
import Sapling from '@/public/images/sapling.jpg';
import Seminar from '@/public/images/seminar.jpg';
import Training from '@/public/images/training.jpg';

type Program = {
  image: StaticImageData;
  href: string;
  title: string;
  alt: string;
  description: string;
};

const programs: Program[] = [
  {
    image: Sapling,
    href: '/climate-action/tree-plantation',
    title: 'Tree Plantation',
    alt: 'A sapling',
    description:
      'Our organization is committed to advancing tree plantation efforts. We recognize that tree planting serves as a pivotal strategy in addressing climate change, rehabilitating natural ecosystems, and enhancing the well-being of communities globally. Through our initiatives focused on tree plantation, we aspire to foster a more sustainable and healthier environment for future generations.',
  },

  {
    image: Seminar,
    href: '/climate-action/workshop-and-seminars',
    title: 'Workshops & Seminars',
    alt: 'People attending a seminar',
    description:
      'We carefully curate a diverse range of topics, bringing together experts, activists, and community leaders to share insights and inspire action. From hands-on workshops that teach practical skills to thought-provoking seminars that explore the latest in climate science and policy, our programs are designed to educate, motivate, and mobilize individuals and communities towards sustainable practices and informed decision-making.',
  },

  {
    image: Training,
    href: '/climate-action/training',
    title: 'Training Programs',
    alt: 'A person modifying the structure of a tree',
    description:
      'Our exclusive training programs are designed to equip individuals with vital environmental skills and knowledge. This offers participants comprehensive understanding and practical skills to foster positive change in their communities and support global environmental initiatives.',
  },

  {
    image: Child,
    href: '/climate-action/children-engagement',
    title: 'Children Engagement',
    alt: 'A child holding a tree leaf',
    description:
      'We place a strong emphasis on child engagement as a cornerstone of its environmental initiatives. By involving children in tree plantation activities, the foundation aims to instill a sense of responsibility and connection to nature from a young age. This approach not only educates the younger generation about the importance of environmental conservation but also empowers them to take active roles in creating a sustainable future.',
  },

  {
    image: Court,
    href: '/climate-action/moot-court',
    title: 'Moot Court',
    alt: 'A black gavel on a desk',
    description:
      'Our organization hosts moot court events under the Environmental Education program of the SED Foundation. These events aim to create more activists from the legal arena who can fight for the environment before various courts and protect our natural surroundings. Participants engage in simulated court proceedings, gaining valuable experience and knowledge to advocate for environmental justice.',
  },
];

export default function Programs() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center mx-5 mt-15 lg:mt-20 mb-20">
        {/* Texts */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            <span className="text-sedGreen">Climate</span> Action
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
          className="rounded-lg"
          placeholder="blur"
        />

        <p className="mt-6 text-xl font-semibold">{title}</p>
        <p className="mt-2 text-sm line-clamp-5">{description}</p>
      </div>
    </Link>
  );
}
