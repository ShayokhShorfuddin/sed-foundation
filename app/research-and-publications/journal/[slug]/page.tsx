import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/app/_components/Footer';
import { MoveUpButton } from '@/app/_components/MoveUpButton';
import { Navbar } from '@/app/_components/Navbar';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { IssueBySlugQuery } from '@/sanity/lib/queries';
import type { IssueBySlugQueryResult } from '@/sanity/types';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const issue = await client.fetch(IssueBySlugQuery, { slug });

  if (!issue) {
    return (
      <section className="container mx-auto flex justify-center">
        <div className="flex flex-col items-center mx-5 max-w-5xl mt-5 mb-10">
          <p className="mt-10 text-red-500 text-center">
            Error while loading news.
            <br />
            Please try again later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <IssuesContent issue={issue} />
      </main>

      <Footer />
      <MoveUpButton />
    </>
  );
}

function IssuesContent({ issue }: { issue: IssueBySlugQueryResult }) {
  return (
    <section className="container mx-auto flex justify-center">
      <div className="flex flex-col items-center mx-5 max-w-5xl mt-5 mb-10">
        <BookCoverWithDetails issue={issue} />
        <AllArticles issue={issue} />
      </div>
    </section>
  );
}

function BookCoverWithDetails({ issue }: { issue: IssueBySlugQueryResult }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-y-8 sm:gap-x-8 max-w-full">
      {issue?.cardImage?.asset?.url && (
        <Image
          src={issue.cardImage.asset.url}
          alt={issue.cardImage.alt || 'Issue image'}
          width={300}
          height={500}
          priority
          className="sm:object-scale-down max-w-80 border border-sedGreen rounded-lg"
        />
      )}

      <TextDetails issue={issue} />
    </div>
  );
}

function TextDetails({ issue }: { issue: IssueBySlugQueryResult }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
        {issue?.title || 'No Title'}
      </h1>

      <div className="flex flex-col mt-7">
        <span className="text-sedGreen">
          {issue?.coordinators?.includes(',')
            ? 'Editors-in-Chief'
            : 'Editor-in-Chief'}
        </span>

        <p>{issue?.coordinators}</p>
      </div>

      <div className="flex flex-col mt-7">
        <span className="text-sedGreen">
          {issue?.articles?.length === 0
            ? 'No articles'
            : issue?.articles?.length === 1
              ? 'Article'
              : 'Articles'}
        </span>

        {issue?.articles?.map((article) => (
          <p key={article.title}>{article.title}</p>
        ))}
      </div>

      <Link
        href={`${issue?.pdfUrl}?dl=${issue?.title}.pdf`}
        download
        className="w-min mt-10 self-center sm:self-start"
      >
        <Button size="sm" className="bg-sedGreen hover:cursor-pointer">
          Download
        </Button>
      </Link>
    </div>
  );
}

function AllArticles({ issue }: { issue: IssueBySlugQueryResult }) {
  return (
    <section className="flex flex-col mt-20 gap-y-20">
      {issue?.articles?.map((article, index) => (
        <div key={article.title} className="flex flex-col">
          <p className="text-lg sm:text-xl md:text-2xl text-sedGreen font-sans">
            {`${index + 1}. ${article.title}`}
          </p>
          <p className="mt-1">{article.authors}</p>

          <p className="text-sedGreen mt-7">
            {article?.keywords?.includes(',') ? 'Keywords' : 'Keyword'}
          </p>
          <p className="text-sm xs:text-base mt-1">{article.keywords}</p>

          <p className="text-sedGreen mt-7">Abstract</p>
          <p className="text-sm xs:text-base mt-1">{article.abstract}</p>

          <Link
            href={`${article.pdfUrl}?dl=${article.title}.pdf`}
            download
            className="w-min mt-5"
          >
            <Button size="sm" className="bg-sedGreen hover:cursor-pointer">
              Download
            </Button>
          </Link>
        </div>
      ))}
    </section>
  );
}
