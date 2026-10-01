"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Bridal beauty by Nivethitha Makeover Artistry",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Bridal makeup by Nivethitha Makeover Artistry",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Bridal makeup by Nivethitha Makeover Artistry",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Bridal hair styling by Nivethitha Makeover Artistry",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Bridal beauty look by Nivethitha Makeover Artistry",
  },
];

export default function GalleryPreview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F8F5F0] px-[10%] py-[110px] max-[1200px]:px-[7%] max-[1024px]:py-[90px] max-[767px]:px-[24px] max-[767px]:py-[75px]"
    >
      <div className="mx-auto max-w-[1250px]">
        {/* Heading */}
        <div
          className={`flex items-end justify-between transition-all duration-700 ease-out max-[767px]:flex-col max-[767px]:items-start ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-[18px] opacity-0"
          }`}
        >
          <div>
            <p className="font-body text-[11px] font-semibold uppercase leading-[18px] tracking-[2.2px] text-[#76506A] max-[767px]:text-[10px] max-[767px]:tracking-[1.8px]">
              SELECTED WORK
            </p>

            <h2 className="mt-[18px] max-w-[550px] font-display text-[52px] font-normal leading-[1.02] tracking-[-1px] text-[#3B1F35] max-[1024px]:text-[46px] max-[767px]:mt-[16px] max-[767px]:text-[40px] max-[767px]:leading-[1.05] max-[767px]:tracking-[-0.7px]">
              A little glimpse
              <br />
              into my artistry.
            </h2>
          </div>

          <p className="mb-[4px] max-w-[310px] font-body text-[14px] font-normal leading-[24px] text-[#76506A] max-[1024px]:max-w-[270px] max-[767px]:mt-[20px] max-[767px]:mb-0 max-[767px]:max-w-[420px] max-[767px]:text-[13px] max-[767px]:leading-[22px]">
            A collection of moments, details and looks created with intention,
            care and a love for beauty.
          </p>
        </div>

        {/* Desktop Gallery */}
        <div
          className={`mt-[55px] grid h-[620px] grid-cols-4 grid-rows-2 gap-[12px] transition-all duration-900 delay-100 ease-out max-[767px]:hidden ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-[20px] opacity-0"
          }`}
        >
          {/* Landscape Feature */}
          <div className="group relative col-span-2 row-span-2 overflow-hidden">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              sizes="50vw"
              loading="eager"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-[#3B1F35]/0 transition-colors duration-500 group-hover:bg-[#3B1F35]/10" />
          </div>

          {/* Portrait 1 */}
          <div className="group relative col-span-1 row-span-1 overflow-hidden">
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              sizes="25vw"
              loading="lazy"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-[#3B1F35]/0 transition-colors duration-500 group-hover:bg-[#3B1F35]/10" />
          </div>

          {/* Portrait 2 */}
          <div className="group relative col-span-1 row-span-1 overflow-hidden">
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              sizes="25vw"
              loading="lazy"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-[#3B1F35]/0 transition-colors duration-500 group-hover:bg-[#3B1F35]/10" />
          </div>

          {/* Portrait 3 */}
          <div className="group relative col-span-1 row-span-1 overflow-hidden">
            <Image
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              sizes="25vw"
              loading="lazy"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-[#3B1F35]/0 transition-colors duration-500 group-hover:bg-[#3B1F35]/10" />
          </div>

          {/* Portrait 4 */}
          <div className="group relative col-span-1 row-span-1 overflow-hidden">
            <Image
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              fill
              sizes="25vw"
              loading="lazy"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-[#3B1F35]/0 transition-colors duration-500 group-hover:bg-[#3B1F35]/10" />
          </div>
        </div>

        {/* Mobile Gallery */}
        <div
          className={`mt-[40px] grid grid-cols-2 gap-[8px] transition-all duration-900 delay-100 ease-out min-[768px]:hidden ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-[20px] opacity-0"
          }`}
        >
          {/* Featured Image */}
          <div className="group relative col-span-2 aspect-[4/3] overflow-hidden">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              sizes="calc(100vw - 48px)"
              loading="eager"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-[#3B1F35]/0 transition-colors duration-500 group-hover:bg-[#3B1F35]/10" />
          </div>

          {/* Image 2 */}
          <div className="group relative aspect-[3/4] overflow-hidden">
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              sizes="calc((100vw - 56px) / 2)"
              loading="lazy"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-[#3B1F35]/0 transition-colors duration-500 group-hover:bg-[#3B1F35]/10" />
          </div>

          {/* Image 3 */}
          <div className="group relative aspect-[3/4] overflow-hidden">
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              sizes="calc((100vw - 56px) / 2)"
              loading="lazy"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-[#3B1F35]/0 transition-colors duration-500 group-hover:bg-[#3B1F35]/10" />
          </div>

          {/* Image 4 */}
          <div className="group relative aspect-[3/4] overflow-hidden">
            <Image
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              sizes="calc((100vw - 56px) / 2)"
              loading="lazy"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-[#3B1F35]/0 transition-colors duration-500 group-hover:bg-[#3B1F35]/10" />
          </div>

          {/* Image 5 */}
          <div className="group relative aspect-[3/4] overflow-hidden">
            <Image
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              fill
              sizes="calc((100vw - 56px) / 2)"
              loading="lazy"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-[#3B1F35]/0 transition-colors duration-500 group-hover:bg-[#3B1F35]/10" />
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-[45px] flex justify-center transition-all duration-700 delay-200 ease-out max-[767px]:mt-[32px] ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-[12px] opacity-0"
          }`}
        >
          <Link
            href="/developing"
            className="group flex h-[50px] w-[220px] items-center justify-center gap-[9px] rounded-[6px] border border-[#3B1F35] bg-transparent !text-[#3B1F35] font-body text-[11px] font-semibold uppercase leading-[24px] tracking-[1px] transition-colors duration-250 hover:bg-[#DCE3D8]"
          >
            <span className="!text-[#3B1F35]">VIEW FULL PORTFOLIO</span>

            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="!text-[#3B1F35] transition-transform duration-250 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}