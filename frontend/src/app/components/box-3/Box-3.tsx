import React from 'react';
import RightIcon from './../../assets/icons/right-icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Items } from '@/app/(pages)/blog/page';

interface Props {
  data: Items[];
  columnsMd?: number;
  columnsXl?: number;
}

export const Box3: React.FC<Props> = ({
  data,
  columnsMd = 2,
  columnsXl = 3,
}) => {
  const totalItems = data.length;

  return (
    <div className="grid grid-cols-1 border-1 border-[#8F8D81] md:grid-cols-2 xl:grid-cols-3">
      {data?.map(({ case_item, documentId }: Items, index) => {
        const { id, text, alt, image, title } = case_item || {};
        const isLastRowMobile = index === totalItems - 1;
        const totalRowsMd = Math.ceil(totalItems / columnsMd);
        const currentRowMd = Math.ceil((index + 1) / columnsMd);
        const isLastRowMd = currentRowMd === totalRowsMd;
        const isRightColumnMd = (index + 1) % columnsMd === 0;

        const totalRowsXl = Math.ceil(totalItems / columnsXl);
        const currentRowXl = Math.ceil((index + 1) / columnsXl);
        const isLastRowXl = currentRowXl === totalRowsXl;
        const isRightColumnXl = (index + 1) % columnsXl === 0;

        return (
          <div
            key={id}
            className={`border-r border-b border-[#8F8D81] px-2 py-[48px] transition-colors duration-300 hover:bg-[#F92672]/20 ${isLastRowMobile ? 'border-b-0' : ''} md:px-[32px] md:py-[72px] ${isRightColumnMd ? 'md:border-r-0' : 'md:border-r'} ${isLastRowMd ? 'md:border-b-0' : ''} ${isRightColumnXl ? 'xl:border-r-0' : 'xl:border-r'} ${isLastRowXl ? 'xl:border-b-0' : ''} `}
          >
            <h3 className="text-[20px] font-semibold md:text-[28px] xl:text-[32px]">
              {title ? (
                title
              ) : (
                <div className="relative h-[50px]">
                  <Image
                    unoptimized
                    src={`${process.env.API_URL}${image?.url}`}
                    alt={alt || ''}
                    fill
                    objectFit="contain"
                    objectPosition={'center '}
                  />
                </div>
              )}
            </h3>

            {text && (
              <div
                className="mt-[23px] line-clamp-4 text-[20px] font-semibold md:mt-[48px] md:text-[24px] xl:text-[32px]"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}

            <Link
              className="mt-4 flex items-center justify-start text-[12px] text-[#4FA8FF] duration-1000 hover:underline md:text-base xl:text-[20px]"
              href={`/case-studies/${documentId}`}
              data-discover="true"
            >
              <span>Read story</span>
              <Image src={RightIcon} className="ml-[4px]" alt="" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
