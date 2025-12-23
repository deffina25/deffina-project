import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Items } from '@/app/(pages)/blog/page';

interface Props {
  data: Items[];
  top_title?: boolean;
  className?: string;
}

export const Recommendations: React.FC<Props> = ({
  data,
  top_title = true,
  className,
}) => {
  return (
    <div className="w-full">
      {top_title && (
        <div className="border-b border-[#8F8D81] px-2 py-[48px] text-center md:px-8 md:py-[72px]">
          <h2 className="text-[24px] font-semibold md:text-[40px] xl:text-[48px]">
            Related Case Studies You Might Like
          </h2>
        </div>
      )}

      <div className={`grid grid-cols-1 md:grid-cols-2 ${className || ''}`}>
        {data?.map(({ case_item, documentId }: Items, index: number) => {
          const { id, text, alt, image, title } = case_item || {};
          const columns = 2;
          const totalRows = Math.ceil(data.length / columns);
          const currentRow = Math.ceil((index + 1) / columns);
          const isLastRow = currentRow === totalRows;
          const isRightColumn = (index + 1) % columns === 0;

          return (
            <div
              key={id}
              className={`border-b border-[#8F8D81] px-2 py-[48px] md:px-[32px] md:py-[72px] ${!isRightColumn ? 'md:border-r md:border-[#8F8D81]' : ''} ${isLastRow ? 'md:border-b-0' : ''} duration-300 hover:bg-[#F92672]/20`}
            >
              <h3 className="relative max-h-[150px] text-[20px] font-semibold md:text-[28px] xl:text-[32px]">
                {title ? (
                  title
                ) : (
                  <div className="relativeh-[150px]">
                    <Image
                      unoptimized
                      fill
                      src={
                        image?.url
                          ? `${process.env.NEXT_PUBLIC_API_URL}${image.url}`
                          : ''
                      }
                      alt={alt || ''}
                    />
                  </div>
                )}
              </h3>

              {text && (
                <div
                  className="mt-[24px] text-[20px] md:mt-[32px] md:text-base md:text-[24px] lg:mt-[48px]"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}

              <Link
                className="mt-4 flex items-center justify-start text-base text-[12px] font-normal text-[#4FA8FF] duration-1000 hover:underline md:text-base xl:text-[20px]"
                href={`/case-studies/${documentId}`}
                data-discover="true"
              >
                <span>Read story</span>
                <svg
                  width="56"
                  height="16"
                  viewBox="0 0 56 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-[4px]"
                >
                  <path
                    d="M48.3536 8.35355C48.5488 8.15829 48.5488 7.84171 48.3536 7.64645L45.1716 4.46447C44.9763 4.2692 44.6597 4.2692 44.4645 4.46447C44.2692 4.65973 44.2692 4.97631 44.4645 5.17157L47.2929 8L44.4645 10.8284C44.2692 11.0237 44.2692 11.3403 44.4645 11.5355C44.6597 11.7308 44.9763 11.7308 45.1716 11.5355L48.3536 8.35355ZM8 8V8.5H48V8V7.5H8V8Z"
                    fill="#4FA8FF"
                  />
                </svg>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
