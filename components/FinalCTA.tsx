"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const whatsappMessage =
  "Hi Nivethitha, I saw your website and would like to enquire about your makeup services.";

const whatsappUrl = `https://wa.me/919500292511?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export default function FinalCTA() {
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
      { threshold: 0.15 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#DCE3D8]"
    >
      <div className="grid w-full grid-cols-[48%_52%] items-stretch max-[1024px]:grid-cols-1">
        {/* Image */}
        <div
          className={`relative aspect-[7/8] w-full transition-all duration-900 ease-out max-[1024px]:mx-auto max-[1024px]:aspect-[4/5] max-[1024px]:w-[75%] max-[767px]:aspect-[4/5] max-[767px]:w-[82%] ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-[20px] opacity-0"
          }`}
        >
          <Image
            src="/images/cta4.jpg"
            alt="Bridal makeup by Nivethitha Makeover Artistry"
            fill
            sizes="(max-width: 767px) 82vw, (max-width: 1024px) 75vw, 48vw"
            className="object-cover"
          />

          <div className="absolute bottom-[32px] left-[32px] max-[767px]:bottom-[22px] max-[767px]:left-[22px]">
            <p className="font-body text-[9px] font-medium uppercase leading-[15px] tracking-[2px] text-[#F8F5F0] max-[767px]:text-[8px] max-[767px]:tracking-[1.6px]">
              NIVETHITHA MAKEOVER ARTISTRY
            </p>
          </div>
        </div>

        {/* CTA Content */}
        <div
          className={`relative flex items-center px-[90px] py-[80px] transition-all duration-800 delay-150 ease-out max-[1200px]:px-[60px] max-[1024px]:px-[8%] max-[1024px]:py-[90px] max-[767px]:px-[24px] max-[767px]:py-[70px] ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-[20px] opacity-0"
          }`}
        >
          {/* Decorative vertical line */}
          <div className="absolute right-[90px] top-[80px] h-[120px] w-[1px] bg-[#3B1F35]/20 max-[1200px]:right-[60px] max-[1024px]:right-[8%] max-[767px]:right-[24px] max-[767px]:top-[55px] max-[767px]:h-[80px]" />

          <div className="w-full max-w-[590px]">
            {/* Tag */}
            <p className="font-body text-[11px] font-semibold uppercase leading-[18px] tracking-[2.2px] text-[#76506A] max-[767px]:text-[10px] max-[767px]:tracking-[1.8px]">
              LET'S CREATE YOUR LOOK
            </p>

            {/* Main Statement */}
            <h2 className="mt-[24px] max-w-[500px] font-display text-[62px] font-normal leading-[0.98] tracking-[-1.5px] text-[#3B1F35] max-[1200px]:text-[54px] max-[1024px]:text-[58px] max-[767px]:mt-[20px] max-[767px]:max-w-[360px] max-[767px]:text-[43px] max-[767px]:leading-[1] max-[767px]:tracking-[-0.8px]">
              For moments
              <br />
              that deserve
              <br />
              <span className="text-[#76506A]">to feel like you.</span>
            </h2>

            {/* Intro */}
            <p className="mt-[30px] max-w-[430px] font-body text-[15px] font-normal leading-[25px] text-[#76506A] max-[767px]:mt-[23px] max-[767px]:max-w-[430px] max-[767px]:text-[14px] max-[767px]:leading-[24px]">
              Your wedding look should never feel like a version of someone
              else. Let’s create something thoughtful, timeless and completely
              yours.
            </p>

            {/* Divider */}
            <div className="mt-[36px] h-[1px] w-[430px] bg-[#3B1F35]/15 max-[767px]:mt-[30px] max-[767px]:w-full" />

            {/* Bottom CTA */}
            <div className="mt-[28px] flex max-w-[430px] items-center justify-between gap-[25px] max-[600px]:flex-col max-[600px]:items-start">
              <div>
                <p className="font-body text-[9px] font-semibold uppercase leading-[15px] tracking-[1.8px] text-[#76506A]">
                  AVAILABLE FOR
                </p>

                <p className="mt-[4px] font-display text-[18px] font-normal leading-[24px] text-[#3B1F35] max-[767px]:text-[17px]">
                  Bridal &amp; Special Occasions
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-[54px] w-[175px] shrink-0 items-center justify-center gap-[8px] rounded-[6px] bg-[#3B1F35] !text-[#F8F5F0] font-body text-[11px] font-semibold uppercase leading-[24px] tracking-[1px] transition-colors duration-250 hover:bg-[#76506A] max-[600px]:w-[190px]"
              >
                <span className="!text-[#F8F5F0]">ENQUIRE NOW</span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="!text-[#F8F5F0] transition-transform duration-250 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}