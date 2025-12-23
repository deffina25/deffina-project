import React from 'react';

interface Props {
  text: string;
  button: string;
  href: string;
}

export const Box2: React.FC<Props> = ({ text, button, href }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-y-[40px] p-[32px] md:gap-[72px] md:gap-y-0 md:p-[37px] xl:flex-row">
      <span className="text-center text-[24px] text-white md:text-left md:text-[40px] xl:text-[48px]">
        {text}
      </span>
      <a
        className="flex h-[40px] w-auto items-center justify-center rounded-4xl border border-white bg-white p-4 text-[12px] text-black duration-300 hover:bg-transparent hover:text-white md:h-[60px] md:w-[265px] md:text-[20px]"
        data-discover="true"
        href={href}
      >
        {button}
      </a>
    </div>
  );
};
