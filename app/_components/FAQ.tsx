import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import GirlWithTree from '@/public/svgs/girl-with-tree.svg';

export function FAQ() {
  return (
    <section className="container flex justify-center mt-20 lg:mt-40 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full mx-5">
        <div className="flex flex-col items-left text-left">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Frequently <span className="text-sedGreen">Asked</span> Questions
            <span className="text-sedGreen">.</span>
          </p>
          <p className="text-stone-600 mt-2 font-sans">
            These are the most commonly asked questions about us.
          </p>

          <Accordion className="w-full sm:w-[29rem] mt-10">
            {accordionData.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-left cursor-pointer">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-left">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Image src={GirlWithTree} alt="Girl with tree" className="w-[25rem]" />
      </div>
    </section>
  );
}

const accordionData = [
  {
    question: 'What does the organization actually do?',
    answer:
      'We work on various environmental initiatives, from local conservation projects to global climate policy advocacy. Our main focus areas are reducing carbon emissions, protecting biodiversity, and promoting sustainable practices.',
  },
  {
    question: 'Do you work with schools or youth groups?',
    answer:
      'Yes, we offer educational programs for schools and youth groups, including workshops, field trips, and curriculum resources. Contact our Education Coordinator for more information.',
  },

  {
    question: 'Where does my funding go?',
    answer:
      'Your donations directly fund our projects, research, and advocacy efforts. We allocate 80% of funds to programs, 15% to administration, and 5% to fundraising. Detailed financial reports are available on our website.',
  },
  {
    question: 'How do you measure your impact?',
    answer:
      'We use various metrics, including changes in local environmental conditions, policy adoptions, and community engagement levels. We publish an annual impact report detailing our achievements and challenges.',
  },
  {
    question: "What's the difference from other climate groups?",
    answer:
      'We focus on evidence-based solutions and collaborate closely with local communities and policymakers. Our approach combines grassroots action with high-level advocacy to create lasting change.',
  },
];
