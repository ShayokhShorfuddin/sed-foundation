'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Camping2 from '@/public/svgs/camp2.svg';

export function Info() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col mx-5 xl:mx-20 mt-10 mb-20 gap-y-25">
        <PreviousSchools />

        <SelectComponent />
      </div>
    </section>
  );
}

function PreviousSchools() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-8">
      {/* Texts */}
      <div className="flex flex-col gap-y-5 text-center md:text-left">
        <h1 className="text-2xl sm:text-4xl font-semibold">
          <span className="text-sedGreen">Previous</span> Schools
          <span className="text-sedGreen">.</span>
        </h1>

        <p className="text-sm max-w-[26rem]">
          Explore highlights from our previous Autumn School programs, where
          students engaged in workshops, discussions, and collaborative projects
          focused on environmental sustainability.
        </p>
      </div>

      {/* Image */}
      <Image
        src={Camping2}
        priority
        alt="A girl camping in the forest"
        className="w-[13rem] sm:w-[24rem] lg:w-[30rem]"
      />
    </div>
  );
}

// For small screen devices
function SelectComponent() {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    'Participants',
  );

  // Render content based on the selected value
  function renderContent(selectedValue: string | null) {
    switch (selectedValue) {
      case 'Participants':
        return <Participants />;
      case 'Residential Instructors':
        return <ResidentialInstructors />;
      case 'Speakers & Guests':
        return <SpeakersAndGuests />;
      case 'Organizers':
        return <Organizers />;
      case 'Gallery':
        return <Gallery />;
      case null:
        return null;
      default:
        return null;
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <Select
        defaultValue="Participants"
        onValueChange={(value) => setSelectedValue(value)}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>

        <SelectContent className={'w-fit'}>
          <SelectItem value="Participants">Participants</SelectItem>
          <SelectItem value="Residential Instructors">
            Residential Instructors
          </SelectItem>
          <SelectItem value="Speakers & Guests">Speakers & Guests</SelectItem>
          <SelectItem value="Organizers">Organizers</SelectItem>
          <SelectItem value="Gallery">Gallery</SelectItem>
        </SelectContent>
      </Select>

      {renderContent(selectedValue)}
    </div>
  );
}

// All the components to be displayed beneath the Tabs/Select
function Participants() {
  return <p>Participants will be added here.</p>;
}
function ResidentialInstructors() {
  return <p>Residential instructors will be added here.</p>;
}
function SpeakersAndGuests() {
  return <p>Speakers & guests will be added here.</p>;
}
function Organizers() {
  return <p>Organizers will be added here.</p>;
}
function Gallery() {
  return <p>Gallery will be added here.</p>;
}
