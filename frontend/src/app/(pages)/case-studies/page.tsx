import { BannerCaseStudies } from '../../components/banner/BannerCaseStudies';
import { RunningLine } from '../../components/running-line';
import { Box1 } from '../../components/box-1';
import { Box2 } from '../../components/box-2';
import { Box3 } from '../../components/box-3';
import { FormAboutYou } from '../../components/form-about-you';
import { NoData } from '../../components/no-data';
import { relationListTopMenu } from '../../components/menu-top/list/list';
import { Metadata } from 'next';
import axios from 'axios';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/seo-home-page`,
    {
      params: {
        populate: {
          case_studies_home_seo: { populate: '*' },
        },
      },
    },
  );

  const seo = res.data?.data?.case_studies_home_seo || {};
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

export default async function Page({ searchParams }: { searchParams: any }) {
  const { category } = await searchParams;

  const runningRes = await fetch(
    `${process.env.API_URL}/api/running-line?populate[running_line][populate]=*`,
    { cache: 'no-store' },
  );
  const runningData = await runningRes.json();
  const images = runningData?.data?.running_line?.images || [];

  const params = new URLSearchParams();
  params.append('populate[case_item][populate]', '*');
  params.append('sort[0]', 'createdAt:desc');
  params.append('pagination[page]', '1');
  params.append('pagination[pageSize]', '10');

  if (category) {
    const categoryValue =
      relationListTopMenu[category as keyof typeof relationListTopMenu];
    if (categoryValue) {
      params.append('filters[category][$eq]', categoryValue);
    }
  }

  console.log('category', category);
  console.log('params', params);

  const allCases = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/cases-pages?${params.toString()}`,
      {
        params: {
          sort: 'createdAt:asc',
        },
      },
    )
    .then((res) => res.data?.data || []);

  const firstCases = allCases.slice(0, 4);
  const secondCases = allCases.slice(4, 10);

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cases-page-banner`,
    {
      params: {
        populate: '*',
      },
    },
  );
  const banner = res.data?.data?.case_page_banner || null;

  return (
    <>
      <div className="relative container mx-auto max-w-[1202px] px-2 md:px-4">
        <BannerCaseStudies data={banner} />
      </div>

      <RunningLine images={images} />

      <div className="relative container mx-auto max-w-[1202px] px-2 md:px-4">
        {firstCases.length > 0 ? <Box1 data={firstCases} /> : <NoData />}
      </div>

      <div className="relative container mx-auto max-w-[1202px] px-2 md:px-4">
        <div className="relative border-1 border-t-0 border-b-0 border-[#8F8D81]">
          <Box2
            text="Want to Be a Part of Our Story?"
            button="Contact Us"
            href="/contact-us"
          />
        </div>

        {secondCases.length > 0 && <Box3 data={secondCases} />}

        <FormAboutYou />
      </div>
    </>
  );
}
