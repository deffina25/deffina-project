import {aboutUsPeopleList} from "@/app/components/about-us-people/list/about-us-people-list";
import Image from "next/image";

export const AboutUsPeople = () => {
  return (
    <div className="grid grid-cols-1 border-l-1 border-[#8F8D81] md:grid-cols-2 lg:grid-cols-3">
      {aboutUsPeopleList()?.map(({ id, name, img, alt }) => (
        <div
          key={id}
          className="flex flex-col items-center justify-start border-r-1 border-b-1 border-[#8F8D81] px-2 py-[48px] lg:px-[32px] lg:py-[72px]"
        >
          <div className="h-[112px] w-[112px] overflow-hidden rounded-full bg-black md:h-[160px] md:w-[160px]">
            <Image src={img} alt="" className="h-full w-full object-cover" />
          </div>
          <p className="mt-[24px] text-[20px] font-bold md:text-[24px]">
            {name}
          </p>
          <p className="mt-1 text-base lg:mt-2">{alt}</p>
        </div>
      ))}
    </div>
  );
};
