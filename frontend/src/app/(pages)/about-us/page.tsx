import T1Img from './../../assets/t1.png';
import T2Img from './../../assets/t2.png';
import { AboutUsPeople } from '../../components/about-us-people';
import { FormAboutYou } from '../../components/form-about-you';
import { BannerAboutUs } from '@/app/components/banner/BannerAboutUs';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="container mx-auto mt-[119px] max-w-[1202px] px-4 md:mt-[172px]">
      <BannerAboutUs />
      <div className="border-1 border-b-0 border-[#8F8D81]">
        <div className="flex items-center justify-center">
          <div className="w-full px-2 py-[48px] text-white md:px-[32px] md:py-[72px]">
            <h2 className="text-[24px] leading-normal font-semibold text-white md:text-[40px] lg:text-[48px]">
              <span className="text-[#8F8D81]">Deffina’s</span> 5+ senior
              engineers and designers{' '}
              <span className="text-[#8F8D81]">have shipped</span> 25+ products{' '}
              <span className="text-[#8F8D81]">across</span> 7+ industries{' '}
              <span className="text-[#8F8D81]">
                — fast, clean, and battle-tested.
              </span>
              <br />
            </h2>
          </div>
        </div>

        <div className="h-[1px] bg-[#8F8D81]" />
        <div className="text-center text-base md:grid md:grid-cols-3 lg:text-[24px]">
          <div className="flex items-start justify-center border-[#8F8D81] px-4 py-[24px] md:border-r-1 md:px-[32px] md:py-[72px]">
            <p>We value everyone’s time</p>
          </div>
          <div className="py-[24px]md:px-[32px] flex items-start justify-center border-[#8F8D81] px-4 md:border-r-1 md:py-[72px]">
            <p>We’re not a family, we’re running buddies</p>
          </div>
          <div className="flex items-start justify-center px-4 py-[24px] md:px-[32px] md:py-[72px]">
            <p>We’re fully distributed and async</p>
          </div>
        </div>
        <div className="h-[1px] bg-[#8F8D81]" />

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col items-center justify-start border-b-1 border-[#8F8D81] px-2 py-[48px] text-left text-[32px] leading-normal md:items-start md:p-8 md:px-[32px] md:py-[72px] md:text-left">
            <p className="mb-4 text-[24px] leading-normal font-bold text-white md:mb-[24px] md:text-[40px] lg:mb-4 lg:text-[48px]">
              We Value Every Team Member
            </p>
            <p className="text-base">
              What unites us is relentless focus, fast execution, and our
              passion for software craftsmanship. We are all makers at heart and
              care deeply about the quality of our work, down to the smallest
              detail.
            </p>
          </div>
          <div className="flex min-h-auto flex-col items-center justify-center border-1 border-[#F92672] bg-[#F92672]/20 px-2 py-[46px] md:col-span-2 md:justify-end md:px-[44px] md:pt-[72px] md:pb-0 lg:px-[32px]">
            <Image src={T1Img} alt="" />
          </div>
        </div>
      </div>

      <AboutUsPeople />

      <div className="border-1 border-t-0 border-b-0 border-[#8F8D81]">
        <div className="lg:px-e[32px] px-2 py-[48px] text-center text-[24px] font-semibold md:px-[32px] md:py-[72px] md:text-[40px] lg:text-[48px]">
          <h2>
            Together We’re Great at Doing <br />
            These 3 Things
          </h2>
        </div>
        <div className="h-[1px] bg-[#8F8D81]" />
        <div className="grid grid-cols-1 text-[32px] font-semibold md:grid-cols-2 lg:grid-cols-3">
          <div className="border-r-1 border-b-1 border-[#8F8D81] border-t-transparent border-l-transparent px-2 py-[48px] md:border-b-0 md:px-[32px] md:py-[72px]">
            <h3 className="lx:text-[32px] text-[20px] font-semibold md:text-[28px]">
              Web & App Development
            </h3>
            <p className="mt-4 text-[12px] md:text-base">
              Design and build fast, scalable digital products — from landing
              pages to full platforms.
            </p>
            <Link
              className="mt-[24px] flex items-center justify-start text-base font-normal text-[#4FA8FF] duration-1000 hover:underline md:mt-[48px]"
              href="#"
              data-discover="true"
            >
              <span>Learn more</span>
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
                ></path>
              </svg>
            </Link>
          </div>
          <div className="border-r-1 border-b-1 border-[#8F8D81] border-t-transparent border-l-transparent px-2 py-[48px] md:border-b-0 md:px-[32px] md:py-[72px]">
            <h3 className="lx:text-[32px] text-[20px] font-semibold md:text-[28px]">
              Digital Growth & Marketing
            </h3>
            <p className="mt-[24px] text-[12px] md:text-base lg:mt-4">
              SEO, content, and social media strategies to help your business
              grow and drive real engagement.
            </p>
            <Link
              className="mt-[24px] flex items-center justify-start text-base font-normal text-[#4FA8FF] duration-1000 hover:underline md:mt-[48px]"
              href="#"
              data-discover="true"
            >
              <span>Learn more</span>
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
                ></path>
              </svg>
            </Link>
          </div>
          <div className="flex justify-center border-b-1 border-[#8F8D81] px-2 py-[48px] text-left md:col-span-2 md:border-t-1 md:px-[32px] md:py-[72px] md:text-center lg:col-span-1 lg:text-left">
            <div className="md:w-[495px]">
              <h3 className="lx:text-[32px] text-[20px] font-semibold md:text-[28px]">
                AI & E-commerce Solutions
              </h3>
              <p className="mt-4 text-[12px] md:text-base">
                We develop secure, high-performing online stores and integrate
                AI tools that make your product smarter.
              </p>
              <Link
                className="mt-[24px] flex items-center justify-start text-base font-normal text-[#4FA8FF] duration-1000 hover:underline md:mt-[48px] md:justify-center"
                href="#"
                data-discover="true"
              >
                <span>Learn more</span>
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
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 text-center md:grid-cols-3">
          <div className="order-1 col-span-1 flex flex-col items-center justify-start border-b-1 border-[#8F8D81] px-2 py-[48px] text-center text-[32px] leading-normal md:order-1 md:items-start md:p-8 md:py-[72px] md:text-left lg:order-2 lg:items-end">
            <p className="text-[24px] leading-normal font-bold text-white md:text-[40px] lg:text-[48px]">
              And Having Fun Along the Way!
            </p>
          </div>
          <div className="order-2 flex min-h-auto flex-col items-center justify-center border-1 border-[#4FA8FF] bg-[#4FA8FF]/20 px-2 py-[48px] md:order-2 md:col-span-2 lg:order-1 lg:px-[32px] lg:pt-[72px]">
            <Image src={T2Img} alt="" />
          </div>
        </div>
        <FormAboutYou className="!border-0 bg-transparent" addition />
        <div className="h-[1px] bg-[#8F8D81]" />
      </div>
    </div>
  );
};

export default Page;
