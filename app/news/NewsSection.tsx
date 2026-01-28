'use client';

import { PortableText } from '@portabletext/react';
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
import { AllNewsQuery } from '@/sanity/lib/queries';
import type { AllNewsQueryResult } from '@/sanity/types';
import { Spinner } from '../research-and-publications/journal/Spinner';

const NEWS_PER_PAGE = 6;

type fetchNewsResult =
  | {
      errorOccurred: true;
    }
  | {
      errorOccurred: false;
      news: AllNewsQueryResult;
    };

async function fetchNews(): Promise<fetchNewsResult> {
  try {
    const allNews = await client.fetch(AllNewsQuery);
    return {
      errorOccurred: false,
      news: allNews,
    };
  } catch {
    return {
      errorOccurred: true,
    };
  }
}

const fetchNewsPromise = fetchNews();

export default function NewsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const newsResult = use(fetchNewsPromise);

  if (newsResult.errorOccurred) {
    return (
      <section className="container mx-auto min-h-svh">
        <div className="flex flex-col items-center mx-5 mt-15 lg:mt-20 mb-20">
          <p className="mt-10 text-red-500 text-center">
            Error while loading news.
            <br />
            Please try again later.
          </p>
        </div>
      </section>
    );
  }

  const news = newsResult.news;
  const totalPages = Math.ceil(news.length / NEWS_PER_PAGE);

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
          <h1 className="text-3xl md:text-4xl font-semibold">
            What's happening?
          </h1>

          <p className="text-sm mt-4 max-w-96">
            Stay up to date with the latest news and info.
          </p>
        </div>

        <Suspense fallback={<Spinner />}>
          {/* No news available */}
          {news.length === 0 && (
            <p className="mt-10">No news available for now.</p>
          )}

          {/* News available. Show News grid and pagination */}
          {news.length > 0 && (
            <>
              {/* News grid */}
              <NewsGrid currentPage={currentPage} newsData={news} />

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

function NewsGrid({
  currentPage,
  newsData,
}: {
  currentPage: number;
  newsData: AllNewsQueryResult;
}) {
  const startIndex = (currentPage - 1) * NEWS_PER_PAGE;
  const endIndex = startIndex + NEWS_PER_PAGE;
  const displayedNews = newsData.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5 w-full mt-12">
      {displayedNews.map((news) => (
        <NewsCard
          key={news._id}
          image={news.cardImage?.asset?.url || null}
          alt={news.cardImage?.alt || null}
          href={news.slug || null}
          title={news.title || null}
          content={news.content || null}
        />
      ))}
    </div>
  );
}

function NewsCard({
  image,
  alt,
  href,
  title,
  content,
}: {
  image: string | null;
  alt: string | null;
  href: string | null;
  title: string | null;
  content: PortableTextBlock[] | null;
}) {
  return (
    <Link href={`/news/${href || ''}`}>
      <div className="flex flex-col rounded-2xl p-4 border-2 border-gray-100 hover:border-sedGreen transition duration-350 ease-in-out h-full">
        {image && (
          <Image
            src={image}
            alt={alt || 'News image'}
            className="rounded-xl"
            priority
            width={500}
            height={500}
          />
        )}

        <p className="mt-6 text-xl font-semibold">{title || 'Untitled'}</p>

        <div className="mt-2 text-sm line-clamp-5">
          <PortableText value={content || []} />
        </div>
      </div>
    </Link>
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
