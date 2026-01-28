'use client';

import { PortableText } from '@portabletext/react';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, use, useState } from 'react';
import type { PortableTextBlock } from 'sanity';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { client } from '@/sanity/lib/client';
import { EventsQuery } from '@/sanity/lib/queries';
import type { EventsQueryResult } from '@/sanity/types';
import { Spinner } from '../research-and-publications/journal/Spinner';

const EVENTS_PER_PAGE = 6;

type fetchEventsResult =
  | {
      errorOccurred: true;
    }
  | {
      errorOccurred: false;
      events: EventsQueryResult;
    };

async function fetchEvents(): Promise<fetchEventsResult> {
  try {
    const events = await client.fetch(EventsQuery);
    return {
      errorOccurred: false,
      events,
    };
  } catch {
    return {
      errorOccurred: true,
    };
  }
}

export default function EventsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const fetchEventsPromise = fetchEvents();
  const eventsResult = use(fetchEventsPromise);

  if (eventsResult.errorOccurred) {
    return (
      <section className="container mx-auto min-h-svh">
        <div className="flex flex-col items-center mx-5 mt-15 lg:mt-20 mb-20">
          <p className="mt-10 text-red-500 text-center">
            Error while loading events.
            <br />
            Please try again later.
          </p>
        </div>
      </section>
    );
  }

  const totalPages = Math.ceil(eventsResult.events.length / EVENTS_PER_PAGE);

  function handleNextPage() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const nextPage = Math.min(currentPage + 1, totalPages);
    setCurrentPage(nextPage);
  }

  function handlePrevPage() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
  }

  return (
    <section className="container mx-auto min-h-svh">
      <div className="flex flex-col items-center mx-5 mt-15 lg:mt-20 mb-20">
        {/* Texts */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">Our Events</h1>

          <p className="text-sm mt-4 max-w-96">
            Learn about the upcoming or past events!
          </p>
        </div>

        <Suspense fallback={<Spinner />}>
          {/* No events available */}
          {eventsResult.events.length === 0 && (
            <p className="mt-10">No events available for now.</p>
          )}

          {/* Events available. Show events grid and pagination */}
          {eventsResult.events.length > 0 && (
            <>
              {/* Events grid */}
              <EventsGrid
                currentPage={currentPage}
                eventsData={eventsResult.events}
              />

              {/* Pagination */}
              <PaginationSection
                currentPage={currentPage}
                totalPages={totalPages}
                onNextPage={handleNextPage}
                onPrevPage={handlePrevPage}
              />
            </>
          )}
        </Suspense>
      </div>
    </section>
  );
}

function EventsGrid({
  currentPage,
  eventsData,
}: {
  currentPage: number;
  eventsData: EventsQueryResult;
}) {
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const endIndex = startIndex + EVENTS_PER_PAGE;
  const displayedEvents = eventsData.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5 w-full mt-12">
      {displayedEvents.map((event) => (
        <EventCard
          key={event._id}
          image={event.cardImage?.asset?.url || null}
          alt={event.cardImage?.alt || null}
          href={event.slug || null}
          title={event.title || null}
          content={event.content || null}
          fromDate={event.from_date || null}
          toDate={event.to_date || null}
        />
      ))}
    </div>
  );
}

function EventCard({
  image,
  alt,
  href,
  title,
  content,
  fromDate,
  toDate,
}: {
  image: string | null;
  alt: string | null;
  href: string | null;
  title: string | null;
  content: PortableTextBlock[] | null;
  fromDate: string | null;
  toDate: string | null;
}) {
  let isUpcoming = false;
  let isOngoing = false;

  if (fromDate && toDate) {
    const today = new Date();
    const eventStartDate = new Date(fromDate);
    const eventEndDate = new Date(toDate);

    // Set the end date to the end of the day (23:59:59.999)
    eventEndDate.setHours(23, 59, 59, 999);

    isUpcoming = eventStartDate > today;
    isOngoing = today >= eventStartDate && today <= eventEndDate;
  }

  return (
    <Link href={`/events/${href}`}>
      <div className="flex flex-col rounded-2xl p-4 border-2 border-gray-100 hover:border-sedGreen transition duration-350 ease-in-out h-full">
        {image && (
          <Image
            src={image}
            alt={alt || 'Event image'}
            className="rounded-xl"
            priority
            width={500}
            height={500}
          />
        )}

        <p className="mt-6 text-xl font-semibold">{title}</p>

        {isUpcoming && <UpcomingTag />}
        {isOngoing && !isUpcoming && <OngoingTag />}

        <div className="mt-2 text-sm line-clamp-5">
          <PortableText value={content || []} />
        </div>
      </div>
    </Link>
  );
}

// For events coming in future
function UpcomingTag() {
  return (
    <div className="flex mt-1 text-sedGreen">
      <Clock className="mr-2" />
      <p>Upcoming</p>
    </div>
  );
}

// For events happening now
function OngoingTag() {
  return (
    <div className="flex mt-1 text-gray-600">
      <Clock className="mr-2" />
      <p>Ongoing</p>
    </div>
  );
}

function PaginationSection({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}: {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}) {
  return (
    <Pagination>
      <PaginationContent className="mt-10">
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPrevPage()}
              className="hover:cursor-pointer"
            />
          </PaginationItem>
        )}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              onClick={() => onNextPage()}
              className="hover:cursor-pointer"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
