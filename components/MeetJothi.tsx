"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const specialties = [
  "Makeup Artist",
  "Hair Stylist",
  "Saree Drapist",
];

export default function MeetJothi() {
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
      className="relative w-full overflow-hidden bg-[#F8F5F0] px-[13%] py-[110px] max-[1200px]:px-[7%] max-[1024px]:py-[90px] max-[767px]:px-[24px] max-[767px]:py-[75px]"
    >
      <div className="mx-auto flex max-w-[1250px] items-center gap-[115px] max-[1200px]:gap-[70px] max-[1024px]:flex-col max-[1024px]:items-center max-[767px]:gap-0">
        {/* Mobile About Label */}
        <div className="hidden w-full max-[1024px]:block max-[767px]:mb-[28px]">
          <p
            className={`font-body text-[11px] font-semibold uppercase leading-[18px] tracking-[2.2px] text-[#76506A] transition-all duration-700 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-[12px] opacity-0"
            }`}
          >
            ABOUT ME
          </p>
        </div>

        {/* Image */}
        <div
          className={`relative h-[520px] w-[430px] shrink-0 transition-all duration-800 ease-out max-[1024px]:h-[500px] max-[1024px]:w-[420px] max-[767px]:h-[470px] max-[767px]:w-full max-[767px]:max-w-[360px] ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-[20px] opacity-0"
          }`}
        >
          {/* Sage Block */}
          <div className="absolute -bottom-[25px] -left-[25px] h-[420px] w-[350px] bg-[#DCE3D8] max-[1024px]:h-[400px] max-[1024px]:w-[330px] max-[767px]:-bottom-[20px] max-[767px]:-left-[20px] max-[767px]:h-[370px] max-[767px]:w-[285px]" />

          {/* Original Image */}
          <div className="absolute left-[35px] top-0 h-[520px] w-[350px] overflow-hidden max-[1024px]:left-[35px] max-[1024px]:h-[500px] max-[1024px]:w-[350px] max-[767px]:left-[25px] max-[767px]:h-[470px] max-[767px]:w-[calc(100%-25px)]">
            <img
              src="/images/jothi.webp"
              alt="Jothi Arumugam - Makeup Artist"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* About Content */}
        <div
          className={`flex max-w-[555px] flex-col transition-all duration-800 delay-150 ease-out max-[1024px]:w-full max-[1024px]:max-w-[700px] max-[1024px]:pt-[55px] max-[767px]:pt-[48px] ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-[20px] opacity-0"
          }`}
        >
          {/* Desktop About Label */}
          <p className="font-body text-[11px] font-semibold uppercase leading-[18px] tracking-[2.2px] text-[#76506A] max-[1024px]:hidden">
            ABOUT ME
          </p>

          <h2 className="mt-[20px] max-w-[500px] font-display text-[48px] font-normal leading-[1.05] tracking-[-0.8px] text-[#3B1F35] max-[1024px]:text-[46px] max-[767px]:mt-0 max-[767px]:text-[40px] max-[767px]:leading-[1.05] max-[767px]:tracking-[-0.6px]">
            Beauty with care,
            <br />
            <span className="text-[#76506A]">styled just for you.</span>
          </h2>

          <p className="mt-[28px] max-w-[520px] font-body text-[15px] font-normal leading-[26px] text-[#76506A] max-[767px]:mt-[23px] max-[767px]:text-[14px] max-[767px]:leading-[24px]">
            With 7 years of experience in makeup artistry, I believe every
            look should enhance your natural beauty and reflect who you are.
            I take the time to understand your style and how you want to feel
            on your special day.
          </p>

          <p className="mt-[15px] max-w-[520px] font-body text-[15px] font-normal leading-[26px] text-[#76506A] max-[767px]:mt-[13px] max-[767px]:text-[14px] max-[767px]:leading-[24px]">
            From makeup and hairstyling to saree draping, I bring every detail
            together with care to create a look that feels timeless,
            beautiful, and unmistakably you.
          </p>

          {/* Specialties */}
          <div className="mt-[32px] flex flex-wrap items-center gap-x-[20px] gap-y-[8px] border-t border-[#76506A]/20 pt-[18px] max-[767px]:mt-[27px] max-[767px]:justify-center max-[767px]:gap-x-[12px] max-[767px]:gap-y-[8px] max-[767px]:pt-[17px]">
            {specialties.map((specialty, index) => (
              <div
                key={specialty}
                className="flex items-center gap-[20px] max-[767px]:gap-[12px]"
              >
                <span className="font-body text-[12px] font-medium uppercase leading-[20px] tracking-[0.7px] text-[#3B1F35] max-[767px]:text-[10px] max-[767px]:tracking-[0.5px]">
                  {specialty}
                </span>

                {index !== specialties.length - 1 && (
                  <span className="text-[11px] text-[#A8B5A0]">•</span>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/developing"
            className="group mt-[32px] flex h-[48px] w-[190px] items-center justify-center gap-[8px] rounded-[6px] bg-[#3B1F35] !text-[#F8F5F0] font-body text-[11px] font-semibold uppercase leading-[24px] tracking-[1px] transition-colors duration-250 hover:bg-[#76506A] max-[767px]:mx-auto max-[767px]:mt-[28px]"
          >
            <span className="!text-[#F8F5F0]">MEET JOTHI</span>

            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="!text-[#F8F5F0] transition-transform duration-250 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}