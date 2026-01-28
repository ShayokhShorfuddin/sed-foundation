'use client';

import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import { client } from '@/sanity/lib/client';
import { IssuesQuery } from '@/sanity/lib/queries';

export type IssuesCardType = {
  _id: string;
  _createdAt: string;

  title: string | null;
  slug: string | null;
  coordinators: string | null;

  cardImage: {
    asset: {
      url: string | null;
    } | null;
    alt: string | null;
  } | null;
};

async function fetchIssues() {
  const issues = await client.fetch(IssuesQuery);
  return issues;
}

const fetchIssuesPromise = fetchIssues();

export function Archive() {
  const issues = use(fetchIssuesPromise);

  return (
    <>
      {/* No issues available */}
      {issues.length === 0 && (
        <p className="mt-10">No issues available for now.</p>
      )}

      {/* Issues available */}
      {issues.length > 0 && (
        <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mt-10">
          {issues.map((issue) => (
            <IssuesCard key={issue._id} {...issue} />
          ))}
        </section>
      )}
    </>
  );
}

function IssuesCard({ title, slug, coordinators, cardImage }: IssuesCardType) {
  return (
    <Link href={`journal/${slug}`}>
      <div className="flex flex-col rounded-2xl p-4 border-2 border-stone-100 hover:border-sedGreen transition duration-300 ease-in-out h-full">
        {cardImage?.asset?.url && (
          <Image
            src={cardImage.asset.url}
            alt={cardImage.alt || 'Issue image'}
            priority
            width={300}
            height={500}
            className="rounded-xl self-center"
          />
        )}

        <h1 className="mt-5 text-xl">{title}</h1>

        <p className="mt-3 text-sm">
          <span className="text-sedGreen">
            {coordinators?.includes(',')
              ? 'Editors-in-Chief'
              : 'Editor-in-Chief'}
          </span>
          <br />
          {coordinators}
        </p>
      </div>
    </Link>
  );
}
