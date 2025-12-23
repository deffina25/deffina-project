import axios from 'axios';
import { FormAboutYou } from '@/app/components/form-about-you';
import { Recommendations } from '@/app/components/recommendations';
import Link from 'next/link';
import { Metadata } from 'next';
import { Props } from '@/app/types/global-types';

export async function generateStaticParams() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cases-pages`,
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
    `${process.env.NEXT_PUBLIC_API_URL}/api/cases-pages/${id}`,
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

  const resRecommendation = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cases-pages`,
    {
      params: {
        populate: { case_item: { populate: '*' } },
        sort: ['createdAt:desc'],
        pagination: { page: 1, pageSize: 2 },
      },
    },
  );
  const dataRecommendation = resRecommendation.data.data || [];

  const resData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cases-pages/${id}`,
    {
      params: {
        populate: {
          box_1_page: { populate: '*' },
          box_2_page: { populate: '*' },
          box_3_page: { populate: '*' },
          image_page_1: { populate: '*' },
          image_page_2: { populate: '*' },
          image_page_3: { populate: '*' },
          text_page_1: { populate: '*' },
          text_page_2: { populate: '*' },
          text_page_3: { populate: '*' },
          text_page_4: { populate: '*' },
          text_page_5: { populate: '*' },
          title_page: { populate: '*' },
        },
      },
    },
  );
  console.log('resData', resData);
  const data = resData.data.data || [];

  const {
    title_page,
    image_page_1,
    image_page_2,
    image_page_3,
    text_page_1,
    text_page_2,
    text_page_3,
    text_page_4,
    text_page_5,
    box_1_page,
    box_2_page,
    box_3_page,
  } = data || {};

  return (
    data && (
      <>
        {title_page && (
          <div className="container mx-auto mt-[136px] max-w-[1202px] px-2 md:mt-[240px] md:px-4">
            <div className="flex flex-col items-center justify-center px-2 text-center md:px-4">
              {title_page?.path && (
                <p className="text-[12px] text-[#8F8D81] md:text-[16px] xl:text-[20px]">
                  {title_page.path}
                </p>
              )}
              {title_page?.title && (
                <h2 className="max-w-[850px]font-semibold mt-4 text-[28px] md:text-[48px]">
                  {title_page.title}
                </h2>
              )}
            </div>
          </div>
        )}

        {image_page_1 && (
          <div className="container mx-auto max-w-[1202px] px-2 md:px-4">
            <div
              className="mt-[48px] flex w-full justify-center border px-8 pt-[32px] md:mt-[72px]"
              style={{
                backgroundColor: image_page_1?.background_color
                  ? `${image_page_1.background_color}33`
                  : undefined,
                borderColor: image_page_1?.border_color || undefined,
              }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${image_page_1?.image?.url}`}
                alt={image_page_1?.image?.alt || ''}
              />
            </div>
          </div>
        )}

        <div className="container mx-auto max-w-[1202px] px-2 md:px-4">
          {text_page_1?.text && (
            <div className="border-r-1 border-l-1 border-[#8F8D81] px-2 py-[48px] md:px-8 md:py-[72px]">
              <div
                className="text-[20px] font-semibold md:text-[28px] xl:text-[32px]"
                dangerouslySetInnerHTML={{ __html: text_page_1.text }}
              />
            </div>
          )}

          <div className="border-t-1 border-[#8F8D81]">
            {box_1_page?.title && (
              <div className="border-r-1 border-l-1 border-[#8F8D81] px-2 py-[48px] md:px-8 md:py-[72px]">
                <h2 className="text-center text-[24px] font-semibold md:text-[40px] xl:text-[48px]">
                  {box_1_page.title}
                </h2>
              </div>
            )}
            {box_1_page?.box_1_item && (
              <div className="grid grid-cols-1 divide-y divide-[#8F8D81] border border-[#8F8D81] sm:grid-cols-1 md:grid-cols-3 md:divide-x md:divide-y-0">
                {box_1_page?.box_1_item?.map(
                  ({
                    id,
                    text,
                    title,
                  }: {
                    id: number;
                    text: string;
                    title: string;
                  }) => (
                    <div
                      key={id}
                      className="px-2 py-[48px] text-center text-[20px] font-semibold md:px-8 md:text-[28px] xl:text-[32px]"
                    >
                      <p>{title}</p>
                      <p className="text-[#8F8D81]">{text}</p>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>

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

        {image_page_2 && (
          <div className="container mx-auto max-w-[1202px] px-2 md:px-4">
            <div
              className="flex w-full justify-center border px-8 pt-[48px]"
              style={{
                backgroundColor: image_page_2?.background_color
                  ? `${image_page_2.background_color}33` // 20% прозрачности
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

        {image_page_3 && (
          <div className="container mx-auto max-w-[1202px] px-2 md:px-4">
            <div
              className="flex w-full justify-center border px-8 pt-[48px]"
              style={{
                backgroundColor: image_page_3?.background_color
                  ? `${image_page_3.background_color}33` // 20% прозрачности
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

        <div className="container mx-auto max-w-[1202px] px-2 md:px-4">
          <div className="border-r-1 border-l-1 border-[#8F8D81]">
            {box_3_page && (
              <div className="grid grid-cols-1 border-t-1 border-b-1 border-[#8F8D81] text-center md:grid-cols-3">
                {box_3_page?.title && (
                  <div className="col-span-1 flex min-h-auto flex-col items-center justify-center border-b border-[#8F8D81] p-8 text-center text-[32px] leading-normal md:min-h-[220px] md:items-start md:border-r md:border-b-0 md:text-left">
                    <p className="text-[24px] leading-normal font-bold text-white md:text-[40px] xl:text-[48px]">
                      {box_3_page.title}
                    </p>
                  </div>
                )}
                <div className="flex min-h-auto flex-col items-center justify-center p-8 text-[12px] leading-normal text-white md:col-span-2 md:min-h-[310px] md:text-[16px] xl:text-[20px]">
                  {box_3_page?.text && (
                    <div
                      dangerouslySetInnerHTML={{ __html: box_3_page.text }}
                    />
                  )}
                  {box_3_page?.addition && (
                    <div className="mt-[43px] flex items-center justify-center md:mt-[53px]">
                      <span
                        className={`mr-4 h-[24px] w-[24px] rounded-full bg-[${box_3_page?.color_addition}] md:h-[32px] md:w-[32px]`}
                      />
                      <span className="text-[12px] md:text-base">
                        {box_3_page?.addition}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {dataRecommendation && (
              <Recommendations
                data={dataRecommendation}
                className="border-b-1"
              />
            )}

            <FormAboutYou />
          </div>
        </div>
      </>
    )
  );
}
