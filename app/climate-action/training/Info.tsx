import Image from 'next/image';
import Training2 from '@/public/images/training2.jpg';
import Training3 from '@/public/images/training3.jpg';
import Training from '@/public/svgs/training.svg';

export function Info() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col mx-5 xl:mx-20 mt-10 mb-20 gap-y-28">
        <TrainingPrograms />
        <PreparingTheYouth />
        <DiversifiedActivities />
      </div>
    </section>
  );
}

function TrainingPrograms() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-7">
      <div className="flex flex-col gap-y-5 text-center md:text-left">
        <h1 className="text-2xl sm:text-4xl font-semibold">
          <span className="text-sedGreen">Training</span> Programs
          <span className="text-sedGreen">.</span>
        </h1>

        <p className="text-sm max-w-[27rem]">
          Our exclusive training programs are designed to equip individuals with
          vital environmental skills and knowledge. This offers participants
          comprehensive understanding and practical skills to foster positive
          change in their communities and support global environmental
          initiatives.
        </p>
      </div>

      <Image
        src={Training}
        priority
        alt="A girl preparing saplings for planting"
        className="w-[20rem] sm:w-[24rem] lg:w-[30rem]"
      />
    </div>
  );
}

function PreparingTheYouth() {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-x-10 gap-y-7">
      <div className="flex flex-col gap-y-5 text-center md:text-left">
        <p className="text-2xl sm:text-4xl font-semibold">
          <span className="text-sedGreen">Preparing</span> the youth
          <span className="text-sedGreen">.</span>
        </p>

        <p className="text-sm max-w-[27rem]">
          Training programs are essential for personal growth. By participating
          in these programs, individuals gain in-depth knowledge of specific
          topics from experienced trainers. SED Foundation has been dedicated to
          developing environmental skills through training for many years.
        </p>
      </div>

      <Image
        src={Training2}
        placeholder="blur"
        alt="A girl preparing the pot for planting"
        className="w-[20rem] sm:w-[24rem] lg:w-[30rem]"
      />
    </div>
  );
}

function DiversifiedActivities() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-7">
      <div className="flex flex-col gap-y-5 text-center md:text-left">
        <p className="text-2xl sm:text-4xl font-semibold">
          <span className="text-sedGreen">Diversified</span> activities
          <span className="text-sedGreen">.</span>
        </p>

        <p className="text-sm max-w-[27rem]">
          In the past, we have organized numerous workshops, such as the 4-Week
          Certificate Workshop on SDGs, Certificate Workshop on Professional
          Communication, and Workshop on Agricultural Environment: Road to
          Redemption. These workshops are just a few examples of our commitment
          to environmental education.
        </p>
      </div>

      <Image
        src={Training3}
        placeholder="blur"
        alt="A girl preparing fence to protect the saplings"
        className="w-[20rem] sm:w-[24rem] lg:w-[30rem]"
      />
    </div>
  );
}
