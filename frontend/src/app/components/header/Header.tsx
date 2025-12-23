'use client';

import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import {MenuTop} from '../menu-top';
import {MobileMenuTop} from '../mobile-menu-top';
import Logo from "./../../assets/logo.svg";
import Menu from './../../assets/icons/menu.svg';
import Close from './../../assets/icons/close.svg';
import Image from "next/image";

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 z-[100] w-full bg-[#1E1E1E] py-[24px] pb-[45px] md:py-[56px] md:pt-[56px]">
      <header
        className="relative container mx-auto flex h-[32px] max-w-[1202px] items-center justify-between px-4 md:h-[50px] md:px-8 xl:h-[60px] xl:px-2">
        <Link href="/">
          <Image src={Logo} width={150} height={50} alt="Logo"/>
        </Link>

        <div className="hidden h-full xl:flex">
          <MenuTop/>
        </div>

        <div className="flex cursor-pointer items-center justify-center xl:hidden">
          {!isOpenMenu ? (
            <Image src={Menu} onClick={() => setIsOpenMenu(true)} alt="" title=""/>
          ) : (
            <Image src={Close} onClick={() => setIsOpenMenu(false)} alt="" title=""/>

          )}
        </div>

        {isOpenMenu && <MobileMenuTop/>}

        <Link
          href="/contact-us"
          className="hidden h-[60px] w-[170px] items-center justify-center rounded-4xl border border-white bg-white px-[32px] py-4 text-black duration-300 hover:bg-transparent hover:text-white xl:flex"
        >
          Contact Us
        </Link>
      </header>
    </div>
  );
}
