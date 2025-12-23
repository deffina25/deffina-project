import LogoBg from './../../assets/banner-1.png';
import BannerBg from './../../assets/banner-bg.png';
import Link from "next/link";


export const Banner = () => {
  return (
    <div
      className="relative h-[569px] w-full bg-contain bg-[center_bottom] bg-no-repeat pt-[161px] md:h-[974px]"
      style={{ backgroundImage: `url(${LogoBg.src})` }}
    >
      <div
        className="container mx-auto flex h-full w-full max-w-[1202px] items-start justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BannerBg.src})` }}
      >
        <div className="relative mx-[22px] mt-[22px] flex flex-col items-center bg-[#1E1E1E] px-2 py-[24px] text-center text-white md:mx-[77px] md:py-[48px]">
          <h1 className="md-[16px] text-[28px] leading-normal font-bold text-white md:mb-[24px] md:text-[56px] xl:text-[80px]">
            Development that move your business forward
          </h1>
          <p className="max-w-[570px] text-base md:text-[20px]">
            Focus on your business — we’ll handle the product strategy, <br />
            design, and development to deliver scalable, user-ready solutions
            with speed and clarity.
          </p>
          <Link
            href="/"
            className="mt-[40px] flex h-[46px] min-w-[198px] items-center justify-center rounded-4xl border border-white bg-white p-4 text-base text-black duration-300 hover:bg-transparent hover:text-white md:mt-[48px] md:h-[60px] md:min-w-[250px]"
          >
            Let’s Build Together
          </Link>
        </div>
      </div>
    </div>
  );
};
