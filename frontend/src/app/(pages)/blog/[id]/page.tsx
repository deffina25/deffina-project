import { formatDate } from '@/app/function/formatDate';
import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import axios from 'axios';
import Image from 'next/image';

type BlogItem = {
  id: string;
  title: string;
  alt: string;
  image: {
    url: string;
  };
  top_text: string;
  background_color: string;
  border_color: string;
};

interface Props {
  params: { id: string };
  searchParams?: { documentId?: string };
}

export async function generateStaticParams() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blog-pages`,
    {
      params: {
        populate: '*',
        sort: 'createdAt:desc',
      },
    },
  );

  const pages = res?.data?.data;
  if (!pages || pages.length === 0) {
    return [];
  }

  return pages.map(({ documentId }: { documentId: string }) => ({
    documentId,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;

  if (!id) {
    return {
      title: 'Blog article',
    };
  }

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blog-pages/${id}`,
    {
      params: {
        populate: {
          seo: { populate: '*' },
        },
      },
    },
  );

  const seo = res.data?.data?.seo || {};

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

export default async function Page({ params }: Props) {
  const id = (await params).id;

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blog-pages/${id}`,
    {
      params: {
        populate: {
          blog_item: { populate: '*' },
          box_item: { populate: { blog_item: { populate: ['image'] } } },
          box_2_page: { populate: '*' },
          image_page_1: { populate: '*' },
          image_page_2: { populate: '*' },
          image_page_3: { populate: '*' },
          text_page_2: { populate: '*' },
          text_page_3: { populate: '*' },
          text_page_4: { populate: '*' },
          text_page_5: { populate: '*' },
          title_page: { populate: '*' },
        },
      },
    },
  );
  const { data } = res.data;

  const {
    box_item,
    box_2_page,
    image_page_1,
    image_page_2,
    image_page_3,
    text_page_1,
    text_page_2,
    text_page_3,
    text_page_4,
    text_page_5,
    title_page,
  } = data || {};

  return (
    data && (
      <>
        {title_page && (
          <div className="container mx-auto mt-[172px] max-w-[1202px] px-4 md:mt-[172px]">
            <div className="flex flex-col items-center justify-center px-8 text-center">
              {title_page?.path && (
                <p className="text-[12px] text-[#8F8D81] md:text-base xl:text-[20px]">
                  {title_page.path}
                </p>
              )}
              {title_page?.title && (
                <h2 className="mt-4 max-w-[850px] text-[48px] font-semibold">
                  {title_page?.title}
                </h2>
              )}
            </div>
          </div>
        )}

        {image_page_1 && (
          <div className="container mx-auto max-w-[1202px] px-4">
            <div
              className="mt-[72px] flex w-full justify-center border px-8 pt-[48px]"
              style={{
                backgroundColor: image_page_1?.background_color
                  ? `${image_page_1.background_color}33`
                  : undefined,
                borderColor: image_page_1?.border_color || undefined,
              }}
            >
              <div className="relative h-[553px] w-full overflow-hidden">
                <Image
                  fill
                  unoptimized
                  src={`${process.env.API_URL}${image_page_1?.image?.url}`}
                  alt={image_page_1?.image?.alt || ''}
                />
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto max-w-[1202px] px-4">
          <div className="border-1 border-t-0 border-[#8F8D81] p-8 text-center text-[14px] text-[#8F8D81] md:text-[20px] xl:text-[24px]">
            {formatDate(data?.createdAt)}
          </div>

          {text_page_1 && (
            <div className="border-1 border-t-0 border-[#8F8D81] px-2 py-[48px] md:px-8 md:py-[72px]">
              <div
                className="text-[20px] font-semibold md:text-[28px] xl:text-[32px]"
                dangerouslySetInnerHTML={{ __html: text_page_1 }}
              />
            </div>
          )}

          {text_page_2 && (
            <div className="border-r-1 border-l-1 border-[#8F8D81] px-2 py-[48px] md:px-8 md:py-[72px]">
              {text_page_2?.h2 && (
                <h2 className="text-[24px] font-semibold md:text-[40px] xl:text-[48px]">
                  {text_page_2.h2}
                </h2>
              )}
              {text_page_2?.text && (
                <div
                  className="mt-[24px] text-[14px] font-medium md:text-base xl:text-[20px]"
                  dangerouslySetInnerHTML={{ __html: text_page_2.text }}
                />
              )}
            </div>
          )}
        </div>

        {image_page_2?.image && (
          <div className="container mx-auto max-w-[1202px] px-4">
            <div
              className="flex w-full justify-center border px-8 pt-[48px]"
              style={{
                backgroundColor: image_page_2?.background_color
                  ? `${image_page_2.background_color}33`
                  : undefined,
                borderColor: image_page_2?.border_color || undefined,
              }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${image_page_2?.image?.url}`}
                alt={image_page_2?.image?.alt || ''}
              />
            </div>
          </div>
        )}

        {text_page_3 && (
          <div className="container mx-auto max-w-[1202px] px-2 md:px-4">
            <div className="border-r-1 border-l-1 border-[#8F8D81] px-2 py-12 md:px-8 md:py-[72px]">
              {text_page_3?.h2 && (
                <h2 className="text-[24px] font-semibold md:text-[40px] xl:text-[48px]">
                  {text_page_3.h2}
                </h2>
              )}
              {text_page_3?.text && (
                <div
                  className="mt-[24px] text-[14px] md:text-base xl:text-[20px]"
                  dangerouslySetInnerHTML={{ __html: text_page_3.text }}
                />
              )}
            </div>
          </div>
        )}

        {box_2_page && (
          <div className="container mx-auto max-w-[1202px] px-2 md:px-4">
            <div
              className="flex flex-col items-center justify-between gap-[40px] border p-[37px] md:flex-col md:gap-[72px] lg:flex-row"
              style={{
                backgroundColor: box_2_page?.background_color
                  ? `${box_2_page.background_color}33`
                  : undefined,
                borderColor: box_2_page?.border_color || undefined,
              }}
            >
              {box_2_page?.title && (
                <span className="text-center text-[24px] text-white md:text-left md:text-[40px] xl:text-[48px]">
                  {box_2_page.title}
                </span>
              )}
              {box_2_page?.text_url && (
                <Link
                  href="/contact-us"
                  className="flex h-[40px] w-auto items-center justify-center rounded-4xl border border-white bg-white p-4 text-[12px] text-black duration-300 hover:bg-transparent hover:text-white md:h-[60px] md:w-[265px] md:text-[20px]"
                >
                  {box_2_page.text_url}
                </Link>
              )}
            </div>
          </div>
        )}

        {text_page_4 && (
          <div className="container mx-auto max-w-[1202px] px-2 md:px-4">
            <div className="border-r-1 border-l-1 border-[#8F8D81] px-2 py-12 md:px-8 md:py-[72px]">
              <div className="[&_h2]:text-[48px] [&_h3]:text-[32px] [&_p]:mb-4 [&_p]:text-[20px] [&_p]:last:mb-0">
                {text_page_4?.h2 && (
                  <h2 className="mb-[24px]">{text_page_4.h2}</h2>
                )}
                {text_page_4?.h3 && <h3 className="mb-4">{text_page_4.h3}</h3>}
                {text_page_4?.text && (
                  <div dangerouslySetInnerHTML={{ __html: text_page_4.text }} />
                )}
              </div>
            </div>
          </div>
        )}

        {image_page_3?.image && (
          <div className="container mx-auto max-w-[1202px] px-4">
            <div
              className="flex w-full justify-center border px-8 pt-[48px]"
              style={{
                backgroundColor: image_page_3?.background_color
                  ? `${image_page_3.background_color}33`
                  : undefined,
                borderColor: image_page_3?.border_color || undefined,
              }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${image_page_3?.image?.url}`}
                alt={image_page_3?.image?.alt || ''}
              />
            </div>
          </div>
        )}

        {text_page_5 && (
          <div className="container mx-auto max-w-[1202px] px-2 md:px-4">
            <div className="border-r-1 border-l-1 border-[#8F8D81] px-2 py-12 md:px-8 md:py-[72px]">
              <div className="[&_h2]:text-[24px] md:[&_h2]:text-[40px] xl:[&_h2]:text-[48px] [&_h3]:text-[20px] md:[&_h3]:text-[28px] xl:[&_h3]:text-[32px] [&_p]:mb-4 [&_p]:text-[14px] [&_p]:last:mb-0 md:[&_p]:text-base xl:[&_p]:text-[20px]">
                {text_page_5?.map(
                  ({
                    id,
                    h2,
                    h3,
                    text,
                  }: {
                    id: number;
                    h2: string;
                    h3: string;
                    text: string;
                  }) => {
                    return (
                      <div key={id} className="mb-[24px]">
                        {h2 && <h2 className="mb-4 xl:mb-[24px]">{h2}</h2>}
                        {h3 && <h3 className="mb-4">{h3}</h3>}
                        {text && (
                          <div dangerouslySetInnerHTML={{ __html: text }} />
                        )}
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto max-w-[1202px] px-4">
          <div className="border-r-1 border-l-1 border-[#8F8D81]">
            {box_item?.title && (
              <div className="border-t border-b border-[#8F8D81] px-2 py-[48px] text-center md:px-8 md:py-[72px]">
                <h2 className="text-[24px] font-semibold md:text-[40px] xl:text-[48px]">
                  {box_item.title}
                </h2>
              </div>
            )}

            {box_item && (
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {box_item?.blog_item?.map(
                  (
                    {
                      id,
                      title,
                      alt,
                      image,
                      top_text,
                      background_color,
                      border_color,
                    }: BlogItem,
                    index: number,
                  ) => {
                    const isLastCol = (index + 1) % 3 === 0;
                    const isLastRow =
                      index >= data.length - (data.length % 3 || 3);
                    return (
                      <div
                        key={id}
                        className={`border-r border-b border-[#8F8D81] ${isLastCol ? 'border-r-0' : ''} ${isLastRow ? 'border-b-0' : ''}`}
                      >
                        <div
                          className="relative flex h-[190px] w-full items-center justify-center border"
                          style={{
                            backgroundColor: background_color
                              ? `${background_color}33`
                              : undefined,
                            borderColor: border_color || undefined,
                          }}
                        >
                          {top_text && (
                            <p className="text-[20px]">{top_text}</p>
                          )}
                          {image?.url && (
                            <div className="absolute flex h-full w-full items-center justify-center">
                              <img
                                src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`}
                                alt={alt || ''}
                                className="max-h-[50px]"
                              />
                            </div>
                          )}
                        </div>
                        <div className="px-8 py-[48px]">
                          {title && (
                            <h3 className="xl:p-[32px]font-semibold text-[20px] md:text-[28px]">
                              {title}
                            </h3>
                          )}
                          {data && (
                            <p className="mt-[32px] text-[14px] text-[#8F8D81]">
                              {formatDate(data?.createdAt)}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            )}
          </div>
        </div>
      </>
    )
  );
}
