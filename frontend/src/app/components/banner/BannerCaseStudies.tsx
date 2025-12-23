import React from 'react';
import BannerStudies from './../../assets/banner-case-studies.png';
import BannerBg from './../../assets/banner-bg.png';
import Link from 'next/link';
import { Banner } from '@/app/(pages)/blog/page';

interface Props {
  data: Banner | null;
}

export const BannerCaseStudies: React.FC<Props> = ({ data }) => {
  const { href, text, title } = data || {};

  return (
    <div
      className="relative mt-[172px] h-[569px] w-full bg-contain bg-bottom-right bg-no-repeat md:h-[800px]"
      style={{ backgroundImage: `url(${BannerStudies.src})` }}
    >
      <div
        className="container mx-auto flex h-full w-full max-w-[1202px] items-start justify-center bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${BannerBg.src})` }}
      >
        {data && (
          <div className="relative mx-[22px] mt-[72px] flex flex-col items-center bg-[#1E1E1E] px-2 py-[24px] text-center text-white md:mx-[77px] md:py-[48px]">
            {title && (
              <h1 className="md-[16px] text-[28px] leading-normal font-bold text-white md:mb-[24px] md:text-[56px] xl:text-[80px]">
                {title}
              </h1>
            )}

            <div className="max-w-[570px] text-base md:text-[20px]">{text}</div>

            {href && (
              <Link
                href={href}
                className="mt-[40px] flex h-[46px] min-w-[198px] items-center justify-center rounded-4xl border border-white bg-white p-4 text-base text-black duration-300 hover:bg-transparent hover:text-white md:mt-[48px] md:h-[60px] md:min-w-[250px] md:text-[20px]"
              >
                Get in Touch
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
