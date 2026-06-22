'use client';

import { Suspense, use, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { client } from '@/sanity/lib/client';
import { NoticesQuery } from '@/sanity/lib/queries';
import type { NoticesQueryResult } from '@/sanity/types';
import { Spinner } from '../research-and-publications/journal/Spinner';

const NOTICES_PER_PAGE = 10;

type fetchNoticesResult =
  | {
      errorOccurred: true;
    }
  | {
      errorOccurred: false;
      notices: NoticesQueryResult;
    };

async function fetchNotices(): Promise<fetchNoticesResult> {
  try {
    const notices = await client.fetch(NoticesQuery);
    return {
      errorOccurred: false,
      notices,
    };
  } catch {
    return {
      errorOccurred: true,
    };
  }
}

const fetchNoticesPromise = fetchNotices();

export default function NoticeSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const noticesResult = use(fetchNoticesPromise);

  if (noticesResult.errorOccurred) {
    return (
      <section className="container mx-auto min-h-svh">
        <div className="flex flex-col items-center mx-5 mt-15 lg:mt-20 mb-20">
          <p className="mt-10 text-red-500 text-center">
            Error while loading notices.
            <br />
            Please try again later.
          </p>
        </div>
      </section>
    );
  }

  const totalPages = Math.ceil(noticesResult.notices.length / NOTICES_PER_PAGE);

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

  const startIndex = (currentPage - 1) * NOTICES_PER_PAGE;
  const endIndex = startIndex + NOTICES_PER_PAGE;
  const currentNotices: NoticesQueryResult = noticesResult.notices.slice(
    startIndex,
    endIndex,
  );

  return (
    <section className="container mx-auto min-h-svh">
      <div className="flex flex-col items-center mx-5 mt-15 lg:mt-20 mb-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">Notice Board</h1>
          <p className="text-sm mt-4 max-w-96">
            Find all the latest notices and announcements here.
          </p>
        </div>

        <Suspense fallback={<Spinner />}>
          {currentNotices.length === 0 ? (
            <p className="mt-10">No notices available at the moment.</p>
          ) : (
            <div className="mt-10 w-full max-w-4xl">
              <div className="grid grid-cols-1 gap-4">
                {currentNotices.map((notice: NoticesQueryResult[number]) => (
                  <div
                    key={notice._id}
                    className="flex justify-between items-center p-4 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold">{notice.name}</h3>
                      <p className="text-sm text-gray-500">
                        File Type: {notice.fileType?.toUpperCase()} | Uploaded
                        on: {notice.uploadedDate}
                      </p>
                    </div>
                    <Button>
                      <a
                        href={`${notice.fileUrl}?dl=`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={handlePrevPage}
                    className={
                      currentPage === 1
                        ? 'pointer-events-none opacity-50'
                        : undefined
                    }
                  />
                </PaginationItem>
                <PaginationItem>
                  <span className="p-2">
                    {currentPage} / {totalPages}
                  </span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    onClick={handleNextPage}
                    className={
                      currentPage === totalPages
                        ? 'pointer-events-none opacity-50'
                        : undefined
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </Suspense>
      </div>
    </section>
  );
}
