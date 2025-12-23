'use client';

import React, { useEffect, useRef, useState } from 'react';
import img from './img/img.png';

type Item = {
  id: number;
  text: string;
  title: string;
};

interface Props {
  data: {
    title: string;
    item: Item[];
  };
}

export const HowWork: React.FC<Props> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const [targetHeight, setTargetHeight] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setLineHeight((prev) => {
        const diff = targetHeight - prev;
        const delta = diff * 0.1;
        if (Math.abs(diff) < 0.5) return targetHeight;
        return prev + delta;
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [targetHeight]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startOffset = 0.2;
      const maxHeight = containerRef.current.offsetHeight;

      let progress =
        ((windowHeight - containerRect.top - startOffset * windowHeight) /
          (containerRect.height + windowHeight * (1 - startOffset))) *
        1.8;

      progress = Math.min(Math.max(progress, 0), 1);
      const height = progress * maxHeight;

      setTargetHeight(height);
      setShowSuccess(height >= maxHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { title, item } = data || {};

  return (
    <div className="wrapper-index container mx-auto max-w-[1202px] py-[48px] text-white md:px-[122px] md:py-[72px]">
      {title && (
        <h4 className="text-center text-[24px] font-semibold text-white md:text-[48px]">
          {title}
        </h4>
      )}

      <div className="relative mt-[48px] pb-12 md:mt-[72px]" ref={containerRef}>
        <div
          ref={lineRef}
          className="absolute top-0 left-1/2 w-[3px]"
          style={{
            height: `${lineHeight}px`,
            background:
              'linear-gradient(to bottom, #F92672 0%, #FD971F 22%, #E6DB74 46%, #A6E22E 72%, #66D9EF 100%)',
            transition: 'height 0.1s linear',
          }}
        >
          {lineHeight > 0 && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-t-[8px] border-r-[8px] border-l-[8px] border-t-[#66D9EF] border-r-transparent border-l-transparent" />
          )}
        </div>

        {item?.map(({ id, title, text }: Item, index: number) => (
          <div
            key={id}
            className="mt-[40px] grid grid-cols-2 gap-16 md:mt-[96px]"
          >
            <div
              className={`flex items-start justify-start md:justify-start ${
                index % 2 !== 0 ? 'order-2 md:order-2' : 'order-1 md:order-1'
              }`}
            >
              {title && (
                <div className="text-[20px] font-semibold md:text-[32px]">
                  {title}
                </div>
              )}
            </div>

            <div
              className={`flex items-center justify-end md:justify-center ${
                index % 2 !== 0 ? 'order-1 md:order-1' : 'order-2 md:order-2'
              }`}
            >
              {text && (
                <div
                  className="text-[12px] font-normal md:text-[24px]"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        ref={successRef}
        className={`mt-[48px] flex w-full items-center justify-center transition-all duration-700 ease-out ${
          showSuccess ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div
          className="flex h-[178px] w-[343px] items-center justify-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${img.src})` }}
        >
          <span className="text-5xl font-semibold">Success!</span>
        </div>
      </div>
    </div>
  );
};
