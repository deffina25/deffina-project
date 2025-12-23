import RightIcon from './../../assets/icons/right-icon.svg';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Items } from '@/app/(pages)/blog/page';

interface Props {
  data: Items[] | null;
}

export const Box1: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative border-1 border-t-0 border-b-0 border-[#8F8D81]">
      <div className="grid grid-cols-1 text-[32px] font-semibold md:grid-cols-2">
        {data?.map(({ case_item, documentId }, index: number) => {
          const { id, title, alt, image } = case_item || {};
          const removeRightBorder = (index + 1) % 2 === 0;

          return (
            <div
              key={id}
              className={`border-1 border-[#8F8D81] border-t-transparent border-l-transparent px-2 py-[48px] transition-colors duration-300 hover:bg-[#F92672]/20 md:px-8 md:py-[72px] ${
                removeRightBorder ? 'border-r-0' : ''
              }`}
            >
              {image?.url && (
                <div className="relative h-[90px]">
                  <Image
                    fill
                    unoptimized
                    src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`}
                    alt={alt || ''}
                    objectFit="contain"
                    objectPosition="left"
                  />
                </div>
              )}

              {title && (
                <div className="mt-[23px] line-clamp-4 text-[20px] font-semibold md:mt-[48px] md:text-[24px] xl:text-[32px]">
                  {title}
                </div>
              )}

              <Link
                href={`/case-studies/${documentId}`}
                data-discover="true"
                className="mt-4 flex items-center justify-start text-[12px] text-[#4FA8FF] duration-1000 hover:underline md:text-base xl:text-[20px]"
              >
                <span>Read story</span>{' '}
                <Image src={RightIcon} className="ml-[4px]" alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
