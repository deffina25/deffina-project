import { RunningLine } from '../../components/running-line';
import { FormAboutYou } from '../../components/form-about-you';
import { BannerServices } from '../../components/banner/BannerServices';
import RightIcon from './../../assets/icons/right-icon.svg';
import PlusTitleIcon from './../../assets/icons/title-plus.svg';
import { Recommendations } from '../../components/recommendations';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import axios from 'axios';
import { hexToRgb } from '@/app/function/hexToRgb';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

    if (!apiUrl || apiUrl === 'undefined') {
      console.error('NEXT_PUBLIC_API_URL is not defined');
      return {
        title: 'Услуги',
        description: 'Наши услуги',
      };
    }

    const res = await axios.get(`${apiUrl}/api/seo-home-page`, {
      params: {
        populate: {
          services_home_seo: { populate: '*' },
        },
      },
    });

    const seo = res.data?.data?.services_home_seo || {};

    const {
      meta_title = '',
      meta_description = '',
      meta_canonical = './',
      meta_index = false,
      meta_follow = false,
    } = seo;

    return {
      title: meta_title || 'Услуги',
      description: meta_description || 'Наши услуги',
      robots: {
        index: meta_index,
        follow: meta_follow,
      },
      alternates: {
        canonical: meta_canonical,
      },
    };
  } catch (error) {
    console.error('Ошибка генерации метаданных для услуг:', error);
    return {
      title: 'Услуги',
      description: 'Наши услуги',
    };
  }
}

type Item = {
  id: number;
  text: string;
  title: string;
  title_icon: {
    url: string;
  };
  title_link: string;
  title_stack: string;
  url_link: string;
  stack: {
    id: number;
    title: string;
    icon: {
      url: string;
    };
  }[];
};

interface Props {
  id: number;
  item: Item[];
  left_title: string;
  left_text: string;
}

const Page = async () => {
  try {
    // Используем единый API URL с fallback
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

    if (!apiUrl || apiUrl === 'undefined') {
      console.error('❌ API URL невалидный');
      // Возвращаем базовую страницу
      return (
        <div className="container mx-auto max-w-[1202px] px-2 py-8 md:px-4">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold">Услуги</h1>
            <p className="mt-4">Данные временно недоступны</p>
          </div>
        </div>
      );
    }

    // Делаем запросы параллельно с обработкой ошибок
    const [dataPageRes, runningLineRes, recommendationRes] =
      await Promise.allSettled([
        axios.get(`${apiUrl}/api/home-service`, {
          params: {
            populate: {
              banner: { populate: '*' },
              box_1: { populate: '*' },
              box_2: {
                populate: {
                  item: {
                    populate: {
                      title_icon: {
                        populate: '*',
                      },
                      stack: {
                        populate: '*',
                      },
                    },
                  },
                },
              },
              box_3: {
                populate: {
                  item: {
                    populate: '*',
                  },
                },
              },
              box_4: { populate: '*' },
              box_5: { populate: '*' },
            },
          },
          timeout: 10000,
        }),
        axios.get(
          `${apiUrl}/api/running-line?populate[running_line][populate]=*`,
          { timeout: 10000 },
        ),
        axios.get(
          `${apiUrl}/api/cases-pages?populate[case_item][populate]=*&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=4`,
          {
            headers: { 'Cache-Control': 'no-store' },
            timeout: 10000,
          },
        ),
      ]);

    // Обрабатываем результаты запросов
    let banner, box_1, box_2, box_3, box_4, box_5;
    let images = [];
    let dataRecommendation = [];

    if (dataPageRes.status === 'fulfilled' && dataPageRes.value?.data?.data) {
      ({ banner, box_1, box_2, box_3, box_4, box_5 } =
        dataPageRes.value.data.data);
      console.log('Данные страницы услуг загружены');
    } else {
      console.error('Ошибка загрузки данных страницы услуг:', dataPageRes);
    }

    if (
      runningLineRes.status === 'fulfilled' &&
      runningLineRes.value?.data?.data?.running_line?.images
    ) {
      images = runningLineRes.value.data.data.running_line.images;
    } else {
      console.error('Ошибка загрузки running line:', runningLineRes);
    }

    if (
      recommendationRes.status === 'fulfilled' &&
      recommendationRes.value?.data?.data
    ) {
      dataRecommendation = recommendationRes.value.data.data;
    } else {
      console.error('Ошибка загрузки рекомендаций:', recommendationRes);
    }

    const renderBox2 = (data: Props[]) => {
      return data?.map(({ id, item, left_text, left_title }: Props) => (
        <div
          key={id || Math.random()}
          className="grid grid-cols-1 md:grid-cols-[372px_1fr] xl:grid-cols-[372px_1fr]"
        >
          <div className="flex min-h-auto flex-col items-start justify-start border-b border-[#8F8D81] p-2 py-[48px] text-[32px] leading-normal md:min-h-[220px] md:items-start md:border-r md:border-b-0 md:px-8 md:py-[72px]">
            {left_title && (
              <p className="text-[24px] leading-normal font-bold text-white md:text-[48px]">
                {left_title}
              </p>
            )}
            {left_text && <div className="text-base">{left_text}</div>}
          </div>

          <div className="items-start justify-start text-[12px] leading-normal text-white md:text-[20px]">
            {item?.map(
              ({
                id,
                title,
                title_icon,
                text,
                stack,
                title_stack,
                title_link,
                url_link,
              }: Item) => (
                <div
                  key={id || Math.random()}
                  className="border-b-1 border-[#8F8D81] last:border-0"
                >
                  <div className="px-2 py-[48px] md:px-8 md:py-[72px]">
                    <h3 className="flex items-center text-[20px] md:text-[28px] xl:text-[32px]">
                      {title_icon?.url && (
                        <Image
                          unoptimized
                          src={
                            title_icon?.url ? `${apiUrl}${title_icon?.url}` : ''
                          }
                          alt=""
                          width={24}
                          height={24}
                          className="mr-[10px] inline-block"
                        />
                      )}
                      {title || ''}
                    </h3>
                    {text && (
                      <div className="mt-4 text-[12px] md:text-base xl:text-[20px]">
                        {text}
                      </div>
                    )}

                    {title_stack && (
                      <p className="mt-[40px] text-base font-semibold uppercase md:mt-[48px] md:text-[24px] xl:mt-[72px]">
                        {title_stack}
                      </p>
                    )}

                    <div className="mt-[29px] flex flex-wrap gap-6 md:gap-9">
                      {stack?.map(({ id, title, icon }) => (
                        <div key={id || Math.random()} className="text-center">
                          {icon && (
                            <div className="relative flex h-[60px] w-[60px] justify-center">
                              <Image
                                unoptimized
                                src={icon?.url ? `${apiUrl}${icon?.url}` : ''}
                                alt={title || ''}
                                fill
                              />
                            </div>
                          )}
                          <p className="mt-4 text-base">{title || ''}</p>
                        </div>
                      ))}
                    </div>

                    {url_link && (
                      <div className="mt-[40px] md:mt-[48px] xl:mt-[72px]">
                        <Link
                          href={url_link}
                          className="flex items-center justify-start text-[20px] text-[#4FA8FF] duration-300 hover:underline"
                        >
                          <span>{title_link || 'Подробнее'}</span>
                          <Image src={RightIcon} alt="" className="ml-[4px]" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      ));
    };

    return (
      <>
        <div className="relative container mx-auto max-w-[1202px] px-2 md:px-4">
          <div className="relative border-1 border-t-0 border-b-0 border-[#8F8D81]">
            <Image
              src={PlusTitleIcon}
              alt=""
              className="absolute -top-[11px] -left-[13px] -z-10"
            />
            {banner && <BannerServices data={banner} />}
            <Image
              src={PlusTitleIcon}
              alt=""
              className="absolute -top-[11px] -right-[12px] -z-10"
            />
          </div>
        </div>

        {images.length > 0 && <RunningLine images={images} />}

        <div className="container mx-auto max-w-[1202px] px-2 md:px-4">
          <div className="wrapper-index text-white">
            {box_1?.text && (
              <div className="flex items-center justify-center">
                <div className="w-full px-2 py-[48px] text-white md:px-8 md:py-[72px]">
                  <div
                    className="text-[24px] leading-normal font-semibold text-white md:text-[40px] xl:text-[48px]"
                    dangerouslySetInnerHTML={{ __html: box_1?.text }}
                  />
                </div>
              </div>
            )}

            <div className="h-[1px] bg-[#8F8D81]" />

            {box_2?.length > 0 && renderBox2(box_2)}

            <div className="h-[1px] bg-[#8F8D81]" />
            <div className="grid grid-cols-1 gap-[40px] px-2 py-[48px] md:gap-[48px] md:px-8 md:py-[72px] xl:grid-cols-[496px_1fr] xl:gap-[64px]">
              {box_3?.text && (
                <div
                  className="text-[24px] md:text-[40px] xl:text-[48px] [&_span]:text-[#8F8D81]"
                  dangerouslySetInnerHTML={{ __html: box_3.text }}
                />
              )}

              <div>
                {box_3?.title_list && (
                  <h3 className="text-[20px] md:text-[24px] xl:text-[32px]">
                    {box_3.title_list}
                  </h3>
                )}
                {box_3?.item?.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 gap-x-[48px] gap-y-4 md:mt-[48px] md:grid-cols-2 xl:mt-[20px] [&_span]:text-base md:[&_span]:text-[20px] xl:[&_span]:text-[24px]">
                    {box_3?.item?.map(
                      ({
                        id,
                        icon,
                        title,
                      }: {
                        id: number;
                        icon?: { url: string };
                        title: string;
                      }) => (
                        <div
                          key={id || Math.random()}
                          className="flex items-center justify-start gap-2"
                        >
                          {icon?.url && (
                            <Image
                              unoptimized
                              src={icon?.url ? `${apiUrl}${icon?.url}` : ''}
                              alt=""
                              width={24}
                              height={24}
                            />
                          )}
                          <span>{title || ''}</span>
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="h-[1px] bg-[#8F8D81]" />

            {box_4?.title && (
              <div className="px-2 py-[48px] text-center text-[24px] font-semibold md:px-8 md:py-[72px] md:text-[40px] xl:text-[48px]">
                <h2>{box_4.title}</h2>
              </div>
            )}
            <div className="h-[1px] bg-[#8F8D81]" />

            <div className="grid grid-cols-1 text-[12px] md:grid-cols-3 md:text-base xl:text-[20px]">
              <div className="border-r-1 border-b-1 border-[#8F8D81] px-2 py-[48px] md:border-b-0 md:px-8 md:py-[72px]">
                <p>
                  You get speed without the chaos. We move fast — but never at
                  the cost of clarity. No bloated timelines, no handoff drama.
                </p>
              </div>
              <div className="border-r-1 border-b-1 border-[#8F8D81] px-2 py-[48px] md:border-b-0 md:px-[34px] md:py-[72px]">
                <p>
                  You stay focused on what matters. We handle the dev. You focus
                  on strategy, fundraising, or just growing your business.
                </p>
              </div>
              <div className="px-2 py-[48px] md:px-[34px] md:py-[72px]">
                <p>
                  No buzzwords. No layers of bureaucracy. Just experienced folks
                  solving problems alongside you.
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-[#8F8D81]" />

            {box_5 && (
              <div
                style={{
                  backgroundColor: box_5?.background_color_visible
                    ? box_5?.background_color
                      ? `rgba(${hexToRgb(box_5.background_color)}, 0.2)`
                      : 'transparent'
                    : undefined,
                  borderColor: box_5?.border_color || '#F92672',
                }}
                className="flex flex-col items-center justify-between gap-y-[40px] p-[32px] md:gap-[72px] md:gap-y-0 md:p-[37px] xl:flex-row"
              >
                {box_5?.title && (
                  <span className="text-center text-[24px] text-white md:text-left md:text-[40px] xl:text-[48px]">
                    {box_5?.title}
                  </span>
                )}
                {box_5?.url_btn && box_5?.title_btn && (
                  <Link
                    className="flex h-[40px] w-auto items-center justify-center rounded-4xl border border-white bg-white p-4 text-[12px] text-black duration-300 hover:bg-transparent hover:text-white md:h-[60px] md:w-[265px] md:text-[20px]"
                    data-discover="true"
                    href={box_5?.url_btn}
                  >
                    {box_5?.title_btn}
                  </Link>
                )}
              </div>
            )}

            <div className="h-[1px] bg-[#8F8D81]" />
            {dataRecommendation?.length > 0 && (
              <Recommendations data={dataRecommendation} top_title={false} />
            )}

            <FormAboutYou />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('❌ Критическая ошибка на странице услуг:', error);

    return (
      <div className="container mx-auto max-w-[1202px] px-2 py-8 md:px-4">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold">Услуги</h1>
          <p className="mt-4">
            Извините, произошла ошибка при загрузке страницы
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            На главную
          </Link>
        </div>
      </div>
    );
  }
};

export default Page;
