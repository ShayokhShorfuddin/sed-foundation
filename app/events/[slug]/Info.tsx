import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { EventBySlugQuery } from '@/sanity/lib/queries';
import type { EventBySlugQueryResult } from '@/sanity/types';

export default async function Info({ slug }: { slug: string }) {
  const event = await client.fetch(EventBySlugQuery, { slug });

  return <EventContent event={event} />;
}

const components: PortableTextComponents = {
  block: {
    // Custom serializer for paragraphs
    normal: ({ children }) => (
      <p className="leading-loose text-sm mb-6">{children}</p>
    ),
  },
};

function EventContent({ event }: { event: EventBySlugQueryResult }) {
  return (
    <section className="container mx-auto flex justify-center">
      <div className="flex flex-col max-w-[60rem] mx-5 mt-12 mb-20">
        {/* Heading image */}
        {event?.cardImage?.asset?.url && (
          <Image
            src={event.cardImage.asset.url}
            alt={event.cardImage.alt || 'Event image'}
            priority
            width={800}
            height={500}
            className="rounded-lg w-full"
          />
        )}

        {/* Headline */}
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl mt-8 font-semibold">
          {event?.title}
        </h1>

        <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center mt-4 flex-wrap">
          {
            /* From and To Dates */
            event?.from_date && event?.to_date && (
              <Dates fromDate={event.from_date} toDate={event.to_date} />
            )
          }

          {/* Location of the event */}
          {event?.venue && event?.location_on_google_maps && (
            <Location
              venue={event?.venue}
              location_on_google_maps={event?.location_on_google_maps}
            />
          )}
        </div>

        <div className="mt-10 text-sm">
          <PortableText value={event?.content || []} components={components} />
        </div>
      </div>
    </section>
  );
}

function Location({
  venue,
  location_on_google_maps,
}: {
  venue: string;
  location_on_google_maps: string;
}) {
  return (
    <div className="flex text-gray-800 mt-4 xs:mt-0">
      <MapPin className="mr-2" />
      <Link href={location_on_google_maps} target="_blank">
        {venue}
      </Link>
    </div>
  );
}

function Dates({ fromDate, toDate }: { fromDate: string; toDate: string }) {
  return (
    <div className="flex">
      <p className="px-3 py-1 border border-sedGreen w-min rounded-full text-sm mr-3">
        {/* DD/MM/YYYY */}
        {new Intl.DateTimeFormat('en-GB').format(new Date(fromDate))}
      </p>

      {new Date(toDate) > new Date(fromDate) && (
        <p className="px-3 py-1 border border-red-400 w-min rounded-full text-sm">
          {/* DD/MM/YYYY */}
          {new Intl.DateTimeFormat('en-GB').format(new Date(toDate))}
        </p>
      )}
    </div>
  );
}
