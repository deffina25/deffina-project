
import Team1Icon from './../../assets/team/team1.png';
import Link from "next/link";
import Image from "next/image";

export const FormAboutYouPhone = () => {
  return (
    <div className="grid grid-cols-1 border-b border-[#8F8D81] md:grid-cols-2 lg:grid-cols-3">
      <div className="ld:border-0 order-2 px-4 py-[48px] md:order-1 md:border-r md:border-[#8F8D81] md:px-[32px] lg:border-0 lg:py-[72px]">
        <h3 className="mb-[32px] text-[20px] font-semibold md:mb-[48px] md:text-[28px] lg:text-[32px]">
          We’re Near
        </h3>
        <ul className="text-base [&_li]:mt-2 [&_li]:first:mb-0 [&_li]:last:mt-[24px]">
          <li>
            <Link
              href="tel:+48111111111"
              className="duration-300 hover:underline"
            >
              🗣️ + 48 111 111 111
            </Link>
          </li>
          <li>
            <Link
              href="mailto:contact@deffina.com"
              className="duration-300 hover:underline"
            >
              ✉️ contact@deffina.com
            </Link>
          </li>
          <li>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=Poland,+Warsaw,+Dobra+1,+01-101"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-300 hover:underline"
            >
              🇵🇱 Poland, Warsaw, Dobra 1, 01-101
            </Link>
          </li>
        </ul>
      </div>

      <div className="order-1 flex flex-col items-center border-b border-[#8F8D81] px-4 py-[48px] text-center md:order-2 md:border-0 md:px-[32px] lg:order-3">
        <h3 className="mb-[24px] text-[20px] font-semibold md:text-[28px] lg:text-[32px]">
          Speak to Our CTO <br /> Alex Directly
        </h3>
        <div className="h-[112px] w-[112px] overflow-hidden rounded-full bg-black md:h-[160px] md:w-[160px]">
          <Image src={Team1Icon} alt="" />
        </div>
        <Link
          href="/contact-us"
          className="mt-[40px] flex h-[46px] items-center justify-center rounded-4xl border border-white bg-white px-[32px] py-4 text-base text-black duration-300 hover:bg-transparent hover:text-white md:mt-[48px] md:h-[60px] md:text-[20px]"
        >
          Book on Calendly
        </Link>
      </div>

      <div className="order-3 h-[275px] px-0 md:order-3 md:col-span-2 md:h-[565px] lg:order-2 lg:col-span-1 lg:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.286647178269!2d21.024271398782737!3d52.23817691905496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd757ddbb90d%3A0x6c02adc681e0d8c6!2sDobra%20Coworking!5e0!3m2!1sru!2spl!4v1758958537398!5m2!1sru!2spl"
          width="100%"
          height="100%"
          className="border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
