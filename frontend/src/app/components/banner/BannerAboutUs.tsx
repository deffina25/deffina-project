import BannerBg from './../../assets/banner-2.png';

export const BannerAboutUs = () => {
  return (
    <div
      className="relative mt-[133px] h-[324px] w-full bg-cover pt-[28px] md:h-[449px] lg:h-[600px] lg:pt-[78px]"
      style={{ backgroundImage: `url(${BannerBg.src})` }}
    >
      <div className="container mx-auto flex h-full w-full max-w-[1202px] items-start justify-start">
        <div className="relative m-0 flex flex-col items-start px-0 text-white md:mx-[32px] lg:mx-[22px] lg:px-[32px]">
          <div className="w-[271px] rounded-[60px] rounded-bl-none border-1 border-[#8F8D81] bg-[#1E1E1E] py-4 pr-[48px] pl-4 text-base md:w-[504px] md:py-[30px] md:pr-[99px] md:pl-[46px] md:text-[30px] lg:mb-[43px] lg:w-[673px] lg:py-[41px] lg:pr-[131px] lg:pl-[62px] lg:text-[40px]">
            <p className="line-clamp-2">
              So you’re just a standard outsourcing team?
            </p>
          </div>
          <div className="mt-[32px] w-[342px] rounded-[60px] rounded-br-none border-1 border-[#a6e22e] bg-[#394521] p-4 text-base md:w-full md:max-w-[720px] md:px-[40px] md:py-[32px] md:text-[30px] lg:w-[961px] lg:max-w-full lg:px-[55px] lg:py-[41px] lg:text-[40px]">
            <p className="line-clamp-2">
              We build products, not just code, so you can focus on more
              important stuff.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
