import React from 'react';
import CheckBoxGreenIcon from './../../assets/icons/checkbox-green.png';
import { ContactForm } from './form';
import Image from "next/image";

interface Props {
  className?: string;
  addition?: boolean | undefined;
}

export const FormAboutYou: React.FC<Props> = ({ className, addition }) => {
  return (
    <div
      className={`grid grid-cols-1 gap-[40px] border-1 border-[#4FA8FF] bg-[#4FA8FF]/20 px-2 py-[48px] md:grid-cols-2 md:gap-[40px] md:px-[32px] md:py-[72px] ${className || ''}`}
    >
      <div className="flex flex-col justify-between">
        <div>
          <h4 className="text-[28px] leading-normal font-semibold text-white md:text-[40px] lg:text-[48px]">
            Let’s Talk <br />
            About You
          </h4>
          <p className="mt-[16px] text-base text-white md:mt-[24px] md:text-[20px]">
            Have a project in mind or need help with the tech part? Reach out,
            we’re here to help.
          </p>
        </div>

        {addition && (
          <ul className="font-base mt-[32px] text-[12px] text-white md:text-base [&_li]:mt-2 [&_li]:first:mt-0">
            <li className="flex items-center gap-2">
              <Image src={CheckBoxGreenIcon} alt="check" className="h-5 w-5" />
              No sales pressure
            </li>
            <li className="flex items-center gap-2">
              <Image src={CheckBoxGreenIcon} alt="check" className="h-5 w-5" />
              You’ll hear back within 1 business day
            </li>
            <li className="flex items-center gap-2">
              <Image src={CheckBoxGreenIcon} alt="check" className="h-5 w-5" />
              Most projects kick off in under 7 days
            </li>
          </ul>
        )}
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};
