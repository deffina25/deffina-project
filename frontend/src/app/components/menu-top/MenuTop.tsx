import { useState, useEffect, useRef } from 'react';
import { ListTopMenu } from './list/list';
import Down from './../../assets/icons/down.svg';
import Link from "next/link";
import Image from "next/image";

type ListTopMenu = {
  id: number;
  title: string;
  href: string;
  children?: ListTopMenu[];
};

export const MenuTop = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={menuRef}
      className="relative items-center justify-start flex h-full flex-col gap-6 overflow-scroll text-[24px] text-white md:text-[40px] xl:h-full xl:flex-row xl:gap-12 xl:overflow-visible xl:text-xl [&_a]:text-white"
    >
      {ListTopMenu()?.map(({ id, title, href, children }) => {
        if (children) {
          const isOpen = openId === id;

          return (
            <div
              key={id}
              className="relative h-full"
              onMouseEnter={() => setOpenId(id)}
              onMouseLeave={() => setOpenId(null)}
            >
              <Link
                href={href}
                className="flex h-full cursor-pointer items-center gap-2 focus:outline-none md:w-full md:justify-between"
              >
                <span>{title}</span>
                <Image src={Down} alt=""
                  className={`w-[8px] transition-transform duration-300 md:w-[16px] xl:w-[8px] ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </Link>

              <ul
                className={` flex min-w-[155px] flex-col gap-4 border-[#8F8D81] bg-transparent px-8 py-4 text-base transition-all duration-300 ease-in-out md:px-10 md:text-[32px] xl:absolute xl:border xl:bg-black xl:px-2 xl:text-base ${
                  isOpen
                    ? 'flex translate-y-0 opacity-100 xl:visible'
                    : 'hidden translate-y-2 opacity-0 xl:invisible'
                }`}
              >
                {children.map(({ id: childId, title, href }) => (
                  <li key={childId} className="block">
                    <Link
                      href={href}
                      className="block duration-300 hover:underline"
                      onClick={() => setOpenId(null)}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return (
          <Link key={id} href={href}>
            {title}
          </Link>
        );
      })}
    </nav>
  );
};
