import { PortableText, type PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { NewsBySlugQuery } from '@/sanity/lib/queries';
import type { NewsBySlugQueryResult } from '@/sanity/types';

export default async function Info({ slug }: { slug: string }) {
  const news = await client.fetch(NewsBySlugQuery, { slug });

  return <NewsContent news={news} />;
}

const components: PortableTextComponents = {
  block: {
    // Custom serializer for paragraphs
    normal: ({ children }) => (
      <p className="leading-loose text-sm mb-6">{children}</p>
    ),
  },
};

function NewsContent({ news }: { news: NewsBySlugQueryResult }) {
  return (
    <section className="container mx-auto flex justify-center">
      <div className="flex flex-col max-w-[60rem] mx-5 mt-12 mb-20">
        {/* Heading image */}
        <Image
          src={news?.cardImage?.asset?.url || ''}
          alt={news?.cardImage?.alt || 'News image'}
          priority
          width={800}
          height={500}
          className="rounded-lg w-full"
        />

        {/* Headline */}
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl mt-8 font-semibold">
          {news?.title}
        </h1>

        {/* DD/MM/YYYY */}
        <p className="px-3 py-1 border border-sedGreen w-min rounded-full text-sm mt-5">
          {new Intl.DateTimeFormat('en-GB').format(new Date(news?.date || ''))}
        </p>

        <div className="mt-10 text-sm">
          <PortableText value={news?.content || []} components={components} />
        </div>
      </div>
    </section>
  );
}
