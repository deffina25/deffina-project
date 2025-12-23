'use client'

import * as React from 'react';
import { useEffect, useState } from 'react';
import Link from "next/link";
import axios, { type AxiosResponse } from 'axios';
import Image from "next/image";


type SocialNetworksPropsItem = {
  id: number;
  alt: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  url: string;
};

interface SocialNetworksProps {
  className?: string;
}

export const RenderNetworks: React.FC<SocialNetworksProps> = ({
  className,
}) => {
  const [data, setData] = useState<SocialNetworksPropsItem[] | null>(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/social-network`, {
        params: {
          populate: {
            item: {
              populate: '*',
            },
          },
        },
      })
      .then((response: AxiosResponse) => {
        setData(response.data.data.item);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных', error);
      });
  }, []);

  return (
    <>
      {data?.map(({ id, image, url, alt }: SocialNetworksPropsItem) => (
        <Link
          key={id}
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-black text-white duration-300 hover:bg-[#4FA8FF]/20 ${className || ''}`}
          target="_blank"
          href={url}
        >
          {image?.url && (
            <Image
              src={image?.url ? `${process.env.NEXT_PUBLIC_API_URL}${image.url}` : ''}
              alt={alt || ''}
              width={image.width}
              height={image.height}
            />
          )}
        </Link>
      ))}
    </>
  );
};
