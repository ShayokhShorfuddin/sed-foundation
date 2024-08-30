import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GirlTree from "@/public/girl-tree.svg";
import Image from "next/image";

export default function FAQ() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center mt-40 mx-10 text-center">
      <div className="flex flex-col items-center lg:mr-52 xl:mr-72">
        <h1 className="text-4xl font-outfit">
          Frequently <span className="text-sedGreen">Asked</span> Questions
          <span className="text-sedGreen">.</span>
        </h1>

        <p className="text-gray-600 mt-2">
          These are the most commonly asked questions about us.
        </p>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-[500px] mt-12"
        >
          {accordionData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-left">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Image
        src={GirlTree}
        alt="Girl Tree"
        className="h-80 w-min mt-14 lg:mt-0"
      />
    </section>
  );
}

const accordionData = [
  {
    question: "What does the organization actually do?",
    answer:
      "We work on various environmental initiatives, from local conservation projects to global climate policy advocacy. Our main focus areas are reducing carbon emissions, protecting biodiversity, and promoting sustainable practices.",
  },
  {
    question: "Do you work with schools or youth groups?",
    answer:
      "Yes, we offer educational programs for schools and youth groups, including workshops, field trips, and curriculum resources. Contact our Education Coordinator for more information.",
  },

  {
    question: "Where does my funding go?",
    answer:
      "Your donations directly fund our projects, research, and advocacy efforts. We allocate 80% of funds to programs, 15% to administration, and 5% to fundraising. Detailed financial reports are available on our website.",
  },
  {
    question: "How do you measure your impact?",
    answer:
      "We use various metrics, including changes in local environmental conditions, policy adoptions, and community engagement levels. We publish an annual impact report detailing our achievements and challenges.",
  },
  {
    question: "What's the difference from other climate groups?",
    answer:
      "We focus on evidence-based solutions and collaborate closely with local communities and policymakers. Our approach combines grassroots action with high-level advocacy to create lasting change.",
  },
];
