
import { PreFooterMenu } from './module/pre-footer-menu';
import { RenderNetworks } from './module/pre-footer-netwoks';
import { preFooterList } from './list/preFooterList';
import Logo from './../../assets/logo.svg';
import Image from "next/image";
import Link from "next/link";

export const PreFooter = () => {
  return (
    <div className="flex flex-col items-center justify-between border-t-0 border-[#8F8D81] px-2 pt-[48px] pb-[24px] md:flex-row md:px-8 md:pt-[72px] md:pb-[56px] xl:border xl:py-[71px]">
      <Link href="/" className="hidden w-full xl:block xl:w-[150px]">
        <Image src={Logo} width={150} height={50} alt='Logo'></Image>
      </Link>
      <PreFooterMenu data={preFooterList} />
      <Link
        href="/"
        className="mt-[40px] block w-full md:mt-0 md:w-[150px] xl:hidden"
      >
        <Image src={Logo} alt="Logo" width={150} height={50} />
      </Link>
      <div className="hidden items-center justify-between gap-4 xl:flex">
        <RenderNetworks />
      </div>
    </div>
  );
};
