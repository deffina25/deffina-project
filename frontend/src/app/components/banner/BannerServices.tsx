import BannerBg from './../../assets/banner-services.png';
import Link from 'next/link';
import React from 'react';

interface Props {
  data: {
    href: string;
    text: string;
    title: string;
    title_btn: string;
  };
}

export const BannerServices: React.FC<Props> = ({ data }) => {
  const { href, title, text, title_btn } = data;
  return (
    <div
      className="relative mt-[183px] h-[569px] w-full border-t-1 border-[#8F8D81] bg-contain bg-[center_bottom_0px] bg-no-repeat md:h-[983px]"
      style={{ backgroundImage: `url(${BannerBg.src})` }}
    >
      <div className="relative flex flex-col items-center bg-[#1E1E1E] px-2 py-[24px] text-center text-white md:mt-[72px] md:px-8 md:py-[47px]">
        {title && (
          <h1 className="mb-[16px] text-[28px] leading-normal font-bold text-white md:mb-4 md:text-[56px] xl:mb-[24px] xl:text-[80px]">
            {title}
          </h1>
        )}
        <div
          className="max-w-[570px] text-base md:text-[20px]"
          dangerouslySetInnerHTML={{ __html: text }}
        />

        <Link
          href={href || ''}
          className="mt-[48px] flex h-[46px] min-w-[198px] items-center justify-center rounded-4xl border border-white bg-white p-4 text-base text-black duration-300 hover:bg-transparent hover:text-white md:mt-[48px] md:h-[60px] md:min-w-[250px] md:text-[20px]"
        >
          {title_btn}
        </Link>
      </div>
    </div>
  );
};
