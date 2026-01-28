import Image from 'next/image';
import ManagementHierarchyImage from '@/public/images/diagram.jpg';
import AboutUs from '@/public/svgs/about-us.svg';
import Legal from '@/public/svgs/legal.svg';

export default function Info() {
  return (
    <section className="container mx-auto">
      <SEDFoundation />
      <LegalStatus />
      <ManagementHierarchy />
      <ExecutiveCommittee />
    </section>
  );
}

// Sed Foundation
function SEDFoundation() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mx-5 lg:mx-20 mt-15 lg:mt-20 gap-x-7 gap-y-10">
      {/* Texts */}
      <div className="flex flex-col gap-y-4 text-center sm:text-left max-w-[27rem]">
        <h1 className="text-2xl md:text-4xl font-semibold">
          <span className="text-sedGreen">SED</span> Foundation
          <span className="text-sedGreen">.</span>
        </h1>

        <p className="text-sm">
          SED Foundation was established by a group of young and energetic
          people who were highly motivated and committed to contributing their
          time, skills and energies for the development of Environment in
          Bangladesh and addressing various Environmental issues.
        </p>
      </div>

      {/* Image */}
      <Image
        src={AboutUs}
        priority
        alt="Girl sitting in forest"
        className="w-80 lg:w-96"
      />
    </div>
  );
}

// legal Status
function LegalStatus() {
  return (
    <div className="flex flex-col sm:flex-row-reverse justify-between items-center mx-5 lg:mx-20 mt-15 lg:mt-28 gap-x-7 gap-y-10">
      {/* Texts */}
      <div className="flex flex-col gap-y-4 text-center sm:text-left max-w-[27rem]">
        <p className="text-2xl md:text-4xl font-semibold">
          <span className="text-sedGreen">Legal</span> Status
          <span className="text-sedGreen">.</span>
        </p>

        <p className="text-sm">
          Strategy for Environmental Development Foundation is a registered
          legal entity. The Foundation is registered under "The Societies
          Registration Act, 1860 (Act XXI of 1860)" of Government of Bangladesh.
          The registration number is S-12630.
        </p>
      </div>

      {/* Image */}
      <Image
        src={Legal}
        alt="Boy reading legal documents"
        className="w-60 lg:w-70"
      />
    </div>
  );
}

// Management hierarchy
function ManagementHierarchy() {
  return (
    <div className="flex flex-col items-center mx-5 mt-15 lg:mt-28 gap-y-7">
      <p className="text-2xl md:text-4xl text-center font-semibold">
        <span className="text-sedGreen">Management</span> Hierarchy
        <span className="text-sedGreen">.</span>
      </p>

      <Image
        src={ManagementHierarchyImage}
        placeholder="blur"
        alt="Management hierarchy of SED Foundation"
        className="w-[50rem]"
      />
    </div>
  );
}

const CommitteeMembers: { name: string; role: string }[] = [
  { name: 'Mohammed Javed Mia Rasin', role: 'Founder & President' },
  { name: 'Ahmad Takrim Fuad', role: 'Vice President' },
  { name: 'Mohammad Nazmul Hossain', role: 'Secretary General' },
  { name: 'S. M. Al Nahian', role: 'Treasurer' },
  { name: 'S. M. Shaukatul Islam', role: 'Organizing Secretary' },
  { name: 'Md. Faizul Islam', role: 'Joint Secretary' },
  { name: 'Asiqur Rahman', role: 'Member' },
];

// Executive committee
function ExecutiveCommittee() {
  return (
    <div className="flex flex-col items-center mx-5 mt-15 mb-20 lg:mt-28 gap-y-7">
      <p className="text-2xl md:text-4xl text-center font-semibold">
        <span className="text-sedGreen">Executive</span> Committee
        <span className="text-sedGreen">.</span>
      </p>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
        {CommitteeMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col justify-center text-center items-center p-5 border hover:border-sedGreen transition duration-300"
          >
            <p className="text-lg font-outfit text-center">{member.name}</p>
            <p className="text-sm mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
