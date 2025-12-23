import PlusTitleIcon from './../../assets/icons/title-plus.svg';
import axios from 'axios';
import Image from 'next/image';
import { ErrorPage } from '@/app/components/error-page';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      console.error('NEXT_PUBLIC_API_URL is not defined');
      return {
        title: 'Политика конфиденциальности',
        description: 'Политика конфиденциальности',
      };
    }

    const res = await axios.get(`${apiUrl}/api/seo-home-page`, {
      params: {
        populate: {
          privacy_policy_home_seo: { populate: '*' },
        },
      },
    });

    const seo = res.data?.data?.privacy_policy_home_seo || {};

    const {
      meta_title = '',
      meta_description = '',
      meta_canonical = './',
      meta_index = false,
      meta_follow = false,
    } = seo;

    return {
      title: meta_title || 'Политика конфиденциальности',
      description: meta_description || 'Политика конфиденциальности',
      robots: {
        index: meta_index,
        follow: meta_follow,
      },
      alternates: {
        canonical: meta_canonical,
      },
    };
  } catch (error) {
    console.error(
      'Ошибка генерации метаданных для политики конфиденциальности:',
      error,
    );
    return {
      title: 'Политика конфиденциальности',
      description: 'Политика конфиденциальности',
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: './',
      },
    };
  }
}

const Page = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/privacy-policy`,
  );

  if (!res || !res.data) {
    return <ErrorPage />;
  }

  const { data } = res.data || {};

  return (
    <div className="container mx-auto mt-[172px] max-w-[1202px] px-4 text-white">
      <div className="border-1 border-[#8F8D81] pb-[72px]">
        <div className="relative border-b border-[#8F8D81] px-4 py-[49px] text-center text-[28px] leading-0 font-bold md:px-[32px] md:py-[73px] md:text-[56px] lg:text-[80px]">
          <Image
            src={PlusTitleIcon}
            alt=""
            className="absolute -top-[12px] -left-[13px]"
          />
          <Image
            src={PlusTitleIcon}
            alt=""
            className="absolute -bottom-[13px] -left-[13px]"
          />
          <span>{data?.title}</span>
          <Image
            src={PlusTitleIcon}
            alt=""
            className="absolute -top-[12px] -right-[12px]"
          />
          <Image
            src={PlusTitleIcon}
            alt=""
            className="absolute -right-[13px] -bottom-[13px]"
          />
        </div>
        <div
          className="mt-[48px] px-2 md:mt-[72px] md:px-[32px] [&_h2]:mt-[24px] [&_h2]:mb-4 [&_h2]:text-[24px] [&_h2]:font-semibold md:[&_h2]:mt-[72px] md:[&_h2]:mb-[24px] md:[&_h2]:text-[40px] lg:[&_h2]:text-[48px] [&_h3]:mt-[48px] [&_h3]:mb-[16px] [&_h3]:text-[20px] [&_h3]:font-semibold md:[&_h3]:text-[28px] lg:[&_h3]:text-[32px] [&_li]:list-disc [&_p]:mb-2 [&_p]:text-sm [&_p]:last:mb-0 md:[&_p]:mb-4 md:[&_p]:text-base lg:[&_p]:text-[20px] [&_ul]:pl-[18px] [&_ul]:text-base"
          dangerouslySetInnerHTML={{ __html: data?.text }}
        />
      </div>
    </div>
  );
};

export default Page;
