
import * as React from 'react';
import Link from "next/link";

type PreFooterMenuItem = {
  id: number;
  title: string;
  href: string;
};

interface PreFooterMenu {
  data: PreFooterMenuItem[];
}

export const PreFooterMenu: React.FC<PreFooterMenu> = ({ data }) => {
  return (
    <nav
      className="flex w-full flex-col items-start gap-6 text-xl text-white duration-300 md:flex-row lg:items-center xl:w-auto xl:gap-12 [&_a]:hover:underline"
      aria-label="Main"
    >
      {data?.map(({ id, title, href }: PreFooterMenuItem) => (
        <Link key={id} href={href}>
          {title}
        </Link>
      ))}
    </nav>
  );
};
