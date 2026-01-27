import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import Advantage from '@/public/images/advantage.jpg';
import Application from '@/public/images/application.jpg';
import Meeting from '@/public/images/meeting.jpg';
import Students from '@/public/images/students.jpg';

type Program = {
  image: StaticImageData;
  href: string;
  title: string;
  alt: string;
  description: string;
};

const programs: Program[] = [
  {
    image: Students,
    href: '/autumn-school/what-is-autumn-school',
    title: 'What is Autumn School?',
    alt: 'Students sitting in a circle in the center of a green field',
    description:
      'Every year, we organize a week-long Environmental Autumn School. The program is designed to provide learners with an opportunity to learn in-depth about the environment and climate. The program is open to all age groups and is a great way to learn about the environment.',
  },

  {
    image: Advantage,
    href: '/autumn-school/advantage-and-scope',
    title: 'Advantage & Scope',
    alt: 'A group of students jumping in the air',
    description:
      'Participating in the Autumn School offers numerous advantages, including hands-on learning experiences, networking opportunities with environmental experts, and a chance to contribute to real-world sustainability projects and initiatives.',
  },

  {
    image: Application,
    href: '/autumn-school/application',
    title: 'Call For Application',
    alt: 'A student filling out a form',
    description:
      'We invite students from all over the world to apply for the Autumn School. The application process is open to students from various academic backgrounds, including high school, undergraduate, and graduate students.',
  },

  {
    image: Meeting,
    href: '/autumn-school/previous-schools',
    title: 'Previous Schools',
    alt: 'A table meeting among students',
    description:
      'Explore highlights from our previous Autumn School programs, where students engaged in workshops, discussions, and collaborative projects focused on environmental sustainability.',
  },
];

export function Programs() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center mx-5 mt-15 lg:mt-20 mb-20">
        {/* Texts */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            <span className="text-sedGreen">Environmental</span> Autumn School
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
