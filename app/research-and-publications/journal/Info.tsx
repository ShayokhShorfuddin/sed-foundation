'use client';

import Image from 'next/image';
import { Suspense, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import EnvironmentJournal from '@/public/svgs/journal.svg';
import { Archive } from './Archive';
import { Spinner } from './Spinner';

export function Info() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col mx-5 xl:mx-20 mt-10 mb-20 gap-y-25">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-15 gap-x-10 w-full">
          {/* Texts */}
          <div className="flex flex-col gap-y-5 text-center md:text-left max-w-[26rem]">
            <h1 className="text-2xl sm:text-4xl font-semibold">
              <span className="text-sedGreen">SED</span> Journal Of Environment
              Studies
              <span className="text-sedGreen">.</span>
            </h1>

            <p className="text-sm">
              The SED Journal of Environment Studies serves as a premier
              interdisciplinary platform for scholars and practitioners. It
              features peer-reviewed articles, case studies, and critical
              analyses on topics ranging from climate policy to sustainable
              urban development.
            </p>
          </div>

          {/* Image */}
          <Image
            src={EnvironmentJournal}
            priority
            alt="A boy reading an environmental journal"
            className="w-[17rem] xs:w-[18rem] sm:w-[21rem] lg:w-[27rem]"
          />
        </div>

        <SelectComponent />
      </div>
    </section>
  );
}

function SelectComponent() {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    'Editorial Board',
  );

  // Render content based on the selected value
  function renderContent(selectedValue: string | null) {
    switch (selectedValue) {
      case 'Editorial Board':
        return <EditorialBoard />;
      case 'Submission Guideline':
        return <SubmissionGuideline />;
      case 'Archive':
        return (
          <Suspense fallback={<Spinner />}>
            <Archive />
          </Suspense>
        );
      case 'Call For Paper':
        return <CallForPaper />;
      case null:
        return null;
      default:
        return null;
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <Select
        defaultValue="Editorial Board"
        onValueChange={(value) => setSelectedValue(value)}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>

        <SelectContent className={'w-fit'}>
          <SelectItem value="Editorial Board">Editorial Board</SelectItem>
          <SelectItem value="Submission Guideline">
            Submission Guideline
          </SelectItem>
          <SelectItem value="Archive">Archive</SelectItem>
          <SelectItem value="Call For Paper">Call For Paper</SelectItem>
        </SelectContent>
      </Select>

      {renderContent(selectedValue)}
    </div>
  );
}

// All the components to be displayed beneath the Tabs/Select
function EditorialBoard() {
  return <p>Editorial board information will be added here.</p>;
}
function SubmissionGuideline() {
  return <p>Submission guidelines will be added here.</p>;
}
function CallForPaper() {
  return <p>Call for paper information will be added here.</p>;
}
