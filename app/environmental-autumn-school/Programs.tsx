"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Forest2 from "@/public/forest-wide2.jpg";
import Advantage from "./_images/advantage.jpg";
import Application from "./_images/application.jpg";
import School from "./_images/school.jpg";
import School2 from "./_images/school2.jpg";

const ITEMS_PER_PAGE = 6;

export default function Programs() {
  const [currentPage, setCurrentPage] = useState(1);
  type Program = {
    image: StaticImageData;
    title: string;
    description: string;
  };

  const programs: Program[] = [
    {
      image: School,
      title: "What is Autumn School?",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Advantage,
      title: "Advantage & Scope",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Application,
      title: "Call for Application",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: School2,
      title: "Previous Schools",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Forest2,
      title: "Mountains",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Forest2,
      title: "Mountains",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Forest2,
      title: "Mountains",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Forest2,
      title: "Mountains",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },
  ];
  const totalPages = Math.ceil(programs.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <section className="container mt-20 mb-10">
      <ProgramsGrid currentPage={currentPage} programs={programs} />
      <PaginationSection
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </section>
  );
}

function ProgramsGrid({
  currentPage,
  programs,
}: {
  currentPage: number;
  programs: any[];
}) {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedPrograms = programs.slice(startIndex, endIndex);
  const displayedCount = displayedPrograms.length; // Get the number of items

  const gridRows = displayedCount <= 3 ? 1 : 2;

  return (
    <section
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-${gridRows} h-fit w-full gap-7 px-0 2xl:px-32`}
    >
      {displayedPrograms.map((program, index) => (
        <ProgramCard
          key={startIndex + index}
          image={program.image}
          title={program.title}
          description={program.description}
        />
      ))}
    </section>
  );
}

function ProgramCard({
  image,
  title,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl p-5 border border-gray-100 hover:border-sedGreen transition duration-300 ease-in-out">
      <Image src={image} alt="forest" className="rounded-xl" />

      <h1 className="mt-7 text-xl">{title}</h1>
      <p className="mt-2">{description}</p>
    </div>
  );
}

function PaginationSection({
  onNextPage,
  onPrevPage,
}: {
  onNextPage: () => void;
  onPrevPage: () => void;
}) {
  return (
    <Pagination>
      <PaginationContent className="mt-10">
        <PaginationItem>
          <PaginationPrevious onClick={() => onPrevPage()} />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext onClick={() => onNextPage()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
