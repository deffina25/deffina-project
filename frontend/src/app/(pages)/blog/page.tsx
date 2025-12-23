import Image from 'next/image';
import Link from 'next/link';
import PlusTitleIcon from './../../assets/icons/title-plus.svg';
import { formatDate } from '@/app/function/formatDate';
import { ErrorPage } from '@/app/components/error-page';
import axios from 'axios';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export type Banner = {
  id: number;
  href?: string;
  text: string;
  title: string;
};

export type Items = {
  id: number;
  blog_item: {
    title: string;
    text: string;
  };
  updatedAt: string;
  case_item: {
    id: number;
    image?: {
      url: string;
    };
    title?: string | null;
    text: string;
    alt: string;
  };
  documentId: string;
};

export async function generateMetadata(): Promise<Metadata> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/seo-home-page`,
    {
      params: {
        populate: {
          blog_home_seo: { populate: '*' },
        },
      },
    },
  );

  const seo = res.data?.data?.blog_home_seo || {};
  const {
    meta_title = '',
    meta_description = '',
    meta_canonical = './',
    meta_index = false,
    meta_follow = false,
  } = seo;

  return {
    title: meta_title,
    description: meta_description,
    robots: {
      index: meta_index,
      follow: meta_follow,
    },
    alternates: {
      canonical: meta_canonical,
    },
  };
}

export default async function BlogPage() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blog-pages`,
    {
      params: {
        populate: '*',
        sort: 'createdAt:desc',
        'pagination[page]': 1,
        'pagination[pageSize]': 10,
      },
    },
  );

  if (!res || !res.data) {
    return <ErrorPage />;
  }

  const { data } = res.data || {};

  return (
    <div className="container mx-auto mt-[182px] max-w-[1202px] px-2 text-white md:px-4">
      <div className="border-1 border-[#8F8D81]">
        <div className="relative border-b border-[#8F8D81] px-4 py-[49px] text-center text-[28px] leading-0 font-bold md:px-[32px] md:py-[73px] md:text-[56px] lg:text-[80px]">
          <Image
            src={PlusTitleIcon}
            alt="Plus"
            className="absolute -top-[12px] -left-[13px]"
          />
          <span>Blog</span>
          <Image
            src={PlusTitleIcon}
            alt="Plus"
            className="absolute -top-[12px] -right-[12px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {data?.map(
            (
              { id, blog_item: { title, text }, documentId, updatedAt }: Items,
              index: number,
            ) => {
              const isLastCol = (index + 1) % 3 === 0;
              const isLastRow = index >= data.length - (data.length % 3 || 3);

              return (
                <Link
                  key={id}
                  href={`/blog/${documentId}`}
                  className={`border-r border-b border-[#8F8D81] px-2 py-[48px] md:px-8 xl:py-[72px] ${isLastCol ? 'border-r-0' : ''} ${isLastRow ? 'border-b-0' : ''}`}
                >
                  {title && (
                    <h3 className="text-base leading-[35px] font-normal md:text-[28px] xl:text-[32px]">
                      {title}
                    </h3>
                  )}

                  {text && (
                    <div
                      className="mt-4 text-base"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  )}

                  <div className="mt-[24px] text-[12px] text-[#8F8D81] md:text-base xl:mt-[32px]">
                    {formatDate(updatedAt)}
                  </div>
                </Link>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}
