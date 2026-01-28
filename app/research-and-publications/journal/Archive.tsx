'use client';

import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import { client } from '@/sanity/lib/client';
import { IssuesQuery } from '@/sanity/lib/queries';
import type { IssuesQueryResult } from '@/sanity/types';

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

type fetchIssuesResult =
  | {
      errorOccurred: true;
    }
  | {
      errorOccurred: false;
      issues: IssuesQueryResult;
    };

async function fetchIssues(): Promise<fetchIssuesResult> {
  try {
    const allIssues = await client.fetch(IssuesQuery);
    return {
      errorOccurred: false,
      issues: allIssues,
    };
  } catch {
    return {
      errorOccurred: true,
    };
  }
}
const fetchIssuesPromise = fetchIssues();

export function Archive() {
  console.log(1);
  const issues = use(fetchIssuesPromise);

  if (issues.errorOccurred) {
    return (
      <section className="container mx-auto min-h-svh">
        <div className="flex flex-col items-center mx-5 mt-15 lg:mt-20 mb-20">
          <p className="mt-10 text-red-500 text-center">
            Error while loading issues.
            <br />
            Please try again later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* No issues available */}
      {issues.issues.length === 0 && (
        <p className="mt-10">No issues available for now.</p>
      )}

      {/* Issues available */}
      {issues.issues.length > 0 && (
        <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mt-10">
          {issues.issues.map((issue) => (
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
