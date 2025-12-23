
import { MenuTop } from '../menu-top';
import { RenderNetworks } from '../pre-footer/module/pre-footer-netwoks';
import Link from "next/link";

export const MobileMenuTop = () => {
  return (
    <div className="fixed top-0 left-0 z-[-1] h-full min-h-[752px] w-full bg-[#1E1E1E] p-4 pt-[102px] pb-[24px] md:p-8 md:pt-[162px] md:pb-[56px] xl:hidden">
      <Link
        href="/contact-us"
        className="flex h-[42px] w-full items-center justify-center rounded-4xl border border-white bg-white px-[32px] py-4 text-base text-black duration-300 hover:bg-transparent hover:text-white md:h-[62px] md:text-[20px]"
      >
        Contact Us
      </Link>

      <div className="mt-[48px] md:mt-[52px] md:pr-[100px]">
        <MenuTop />
      </div>

      <div className="mt-[48px] flex items-center justify-start gap-4 md:absolute md:right-[32px] md:bottom-[56px] md:flex-col">
        <RenderNetworks className="md:h-20 md:w-20" />
      </div>

      <div className="absolute bottom-[24px] left-0 w-full p-4 text-base md:bottom-[56px] md:pr-[140px] md:text-[20px]">
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-service">Terms of Service</Link>
        </div>

        <div className="w-full">
          <p className="mt-[48px] text-base md:mt-[24px] md:text-[20px]">
            © 2025 Deffina LLC. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
