import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Banner } from '@/app/components/banner/Banner';
import { RunningLine } from '@/app/components/running-line';
import { HowWork } from '@/app/components/how-work';
import { FormAboutYou } from '@/app/components/form-about-you';
import axios from 'axios';
import Start from './assets/icons/start.svg';
import { hexToRgb } from '@/app/function/hexToRgb';

export async function generateMetadata(): Promise<Metadata> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/seo-home-page`,
    {
      params: {
        populate: {
          home_seo: { populate: '*' },
        },
      },
    },
  );

  const seo = res.data?.data?.home_seo || {};
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

export default async function Home() {
  const dataHome = await axios.get(`${process.env.API_URL}/api/home-page`, {
    params: {
      populate: {
        box_1: { populate: '*' },
        box_2: { populate: '*' },
        box_3: { populate: '*' },
        box_4: { populate: '*' },
        color_box: { populate: '*' },
        how_we_work: { populate: '*' },
      },
    },
  });
  const res = await axios.get(`${process.env.API_URL}/api/running-line`, {
    params: {
      'populate[running_line][populate]': '*',
    },
  });

  const { box_1, box_2, box_3, box_4, color_box, how_we_work } =
    dataHome?.data?.data;
  const images = res.data?.data?.running_line?.images || [];

  return (
    <div>
      <Banner />
      <RunningLine images={images} />
      <div className="w-full">
        <div className="h-[1px] bg-[#8F8D81]" />
        <div className="container mx-auto max-w-[1202px] px-4">
          <div className="wrapper-index">
            {box_1 && (
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[870px] px-4 py-[48px] text-center text-white md:py-[72px]">
                  <h2 className="text-[20px] leading-normal font-semibold text-white md:text-[30px]">
                    {box_1.title}
                  </h2>
                  <div className="mt-[23px] line-clamp-4 text-[20px] font-semibold md:mt-[48px] md:text-[24px] xl:text-[32px]" />
                  <div
                    className="text-[20px] leading-normal font-semibold text-[#8F8D81] md:text-[30px]"
                    dangerouslySetInnerHTML={{ __html: box_1.text }}
                  />

                  <Link
                    href={box_1.url_btn && '/contact-us'}
                    className="mt-[40px] inline-block h-[46px] min-w-[133px] items-center justify-center rounded-4xl border border-white bg-white p-4 text-base leading-4 text-black duration-300 hover:bg-transparent hover:text-white md:mt-[48px] md:h-[60px] md:min-w-[170px] md:text-xl md:leading-normal"
                  >
                    {box_1.title_btn && 'Contact Us'}
                  </Link>
                </div>
              </div>
            )}
            <div className="h-[1px] bg-[#8F8D81]" />
            <div className="grid h-auto grid-cols-1 py-[30px] text-center md:h-[220px] md:grid-cols-3 md:py-0">
              {box_2?.map(
                ({
                  id,
                  title,
                  value,
                }: {
                  id: number;
                  title: string;
                  value: number;
                }) => (
                  <div
                    key={id}
                    className="flex h-full flex-row items-center justify-center gap-2 border-0 border-[#8F8D81] px-8 py-4 text-[20px] leading-normal md:flex-col md:gap-0 md:border-r md:p-8 md:text-[32px]"
                  >
                    {value && <p className="text-white">{value}</p>}
                    {title && <p className="text-[#8F8D81]">{title}</p>}
                  </div>
                ),
              )}
            </div>

            <div className="h-[1px] bg-[#8F8D81]" />

            <div className="grid grid-cols-1 text-center md:grid-cols-3">
              <div className="col-span-1 flex min-h-auto flex-col items-center justify-center border-b border-[#8F8D81] p-8 text-center text-[32px] leading-normal md:min-h-[220px] md:items-start md:border-r md:border-b-0 md:text-left">
                {box_3?.left_title && (
                  <p className="text-[24px] leading-normal font-bold text-white md:text-[48px]">
                    {box_3?.left_title}
                  </p>
                )}
                <div className="mt-[40px] flex items-center justify-center text-base text-[#4FA8FF] md:mt-[48px]">
                  {box_3?.left_stars && (
                    <div className="-mt-[4px] mr-1 flex gap-[2px]">
                      {Array.from({ length: box_3.left_stars }).map((_, i) => (
                        <Image
                          key={i}
                          src={Start}
                          alt="Star"
                          width={20}
                          height={20}
                        />
                      ))}
                    </div>
                  )}

                  <Link
                    href={box_3?.left_link_url || ''}
                    className="text-base duration-300 hover:underline"
                  >
                    {box_3?.left_link_text && 'Clutch reviews'}
                  </Link>
                </div>
              </div>
              <div className="flex min-h-auto flex-col items-center justify-center p-8 text-[12px] leading-normal text-white md:col-span-2 md:min-h-[310px] md:text-[20px]">
                {box_3?.right_text && (
                  <div
                    dangerouslySetInnerHTML={{ __html: box_3?.right_text }}
                  />
                )}
                <div className="mt-[43px] flex items-center justify-center md:mt-[53px]">
                  <span
                    style={{
                      backgroundColor: box_3?.right_icon_color || '#FD971F',
                    }}
                    className="mr-4 h-[24px] w-[24px] rounded-full md:h-[32px] md:w-[32px]"
                  />
                  {box_3?.right_author && (
                    <span className="text-[12px] md:text-base">
                      {box_3?.right_author}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-[#8F8D81]" />

            {box_4?.length > 0 && (
              <div className="grid grid-cols-1 text-center md:grid-cols-2">
                {box_4?.map(
                  ({
                    id,
                    text,
                    color_icon,
                    author,
                  }: {
                    id: number;
                    text: string;
                    color_icon: string;
                    author: string;
                  }) => (
                    <div
                      key={id}
                      className="flex min-h-auto flex-col items-center justify-center border-b border-[#8F8D81] p-8 text-[12px] leading-normal text-white md:min-h-[310px] md:border-r md:border-b-0 md:text-[20px]"
                    >
                      <div dangerouslySetInnerHTML={{ __html: text }} />
                      <div className="mt-[43px] flex items-center justify-center md:mt-[53px]">
                        <span
                          style={{
                            backgroundColor: color_icon || '#4FA8FF',
                          }}
                          className="mr-4 h-[24px] w-[24px] rounded-full md:h-[32px] md:w-[32px]"
                        />
                        <span className="text-[12px] md:text-base">
                          {author}
                        </span>
                      </div>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>
        </div>

        <div className="container mx-auto max-w-[1202px] px-4">
          {color_box && (
            <div
              style={{
                backgroundColor: color_box?.background_color
                  ? `rgba(${hexToRgb(color_box.background_color)}, 0.2)`
                  : 'rgba(249,38,114,0.2)',
                borderColor: color_box?.border_color || '#F92672',
              }}
              className="flex flex-row items-center justify-between gap-[40px] border-[1px] p-[37px] md:gap-[72px]"
            >
              {color_box?.title && (
                <span className="text-center text-[24px] text-white md:text-left md:text-[48px]">
                  {color_box?.title}
                </span>
              )}

              {color_box?.title_btn && (
                <Link
                  href={color_box?.url_btn}
                  className="flex h-[40px] w-auto items-center justify-center rounded-4xl border border-white bg-white p-4 text-[12px] text-black duration-300 hover:bg-transparent hover:text-white md:h-[60px] md:w-[265px] md:text-[20px]"
                >
                  {color_box?.title_btn}
                </Link>
              )}
            </div>
          )}

          {how_we_work && <HowWork data={how_we_work} />}
        </div>
      </div>
      <div className="container mx-auto max-w-[1202px] px-4">
        <FormAboutYou />
      </div>
    </div>
  );
}
