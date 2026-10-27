"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const whatsappMessage =
  "Hi Jothi, I saw your website and would like to enquire about your makeup services.";

const whatsappUrl = `https://wa.me/919500292511?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[680px] w-full overflow-hidden bg-[#F8F5F0] max-[767px]:min-h-0">
      {/* Desktop Sage Decorative Block */}
      <div className="absolute bottom-[10px] right-[10%] h-[420px] w-[350px] bg-[#DCE3D8] max-[1200px]:right-[7%] max-[1024px]:h-[400px] max-[1024px]:w-[310px] max-[767px]:hidden" />

      {/* Hero Content */}
      <div
        className={`absolute left-[10%] top-1/2 w-[500px] -translate-y-1/2 transition-all duration-700 ease-out max-[1200px]:left-[7%] max-[1024px]:relative max-[1024px]:left-auto max-[1024px]:top-auto max-[1024px]:w-full max-[1024px]:translate-y-0 max-[1024px]:px-[7%] max-[1024px]:pb-[65px] max-[1024px]:pt-[75px] max-[767px]:px-[24px] max-[767px]:pb-[42px] max-[767px]:pt-[55px] ${
          visible
            ? "translate-x-0 opacity-100 max-[1024px]:translate-x-0"
            : "-translate-x-[18px] opacity-0 max-[1024px]:-translate-x-[10px]"
        }`}
      >
        <p className="font-body text-[11px] font-semibold uppercase leading-[18px] tracking-[2.2px] text-[#76506A] max-[767px]:text-[10px] max-[767px]:leading-[17px] max-[767px]:tracking-[1.8px]">
          MUA • HAIR • DRAPING
        </p>

        <h1 className="mt-[24px] font-display text-[68px] font-normal leading-[0.98] tracking-[-1.5px] text-[#3B1F35] max-[1200px]:text-[60px] max-[1024px]:text-[62px] max-[767px]:mt-[20px] max-[767px]:text-[48px] max-[767px]:leading-[1] max-[767px]:tracking-[-1px]">
          YOUR LOOK,
          <br />
          BEAUTIFULLY
          <br />
          COMPLETE.
        </h1>

        <p className="mt-[27px] w-[445px] font-body text-[15px] font-normal leading-[25px] text-[#76506A] max-[767px]:mt-[22px] max-[767px]:w-full max-[767px]:max-w-[460px] max-[767px]:text-[14px] max-[767px]:leading-[23px]">
          From flawless bridal makeup to hair and saree draping, every element
          is thoughtfully styled to create a look that feels beautifully,
          unmistakably you.
        </p>

        {/* CTA Buttons */}
        <div className="mt-[32px] flex items-center gap-[14px] max-[767px]:mt-[28px] max-[600px]:flex-col max-[600px]:items-start">
          {/* WhatsApp Enquiry */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[50px] w-[165px] items-center justify-center gap-[8px] rounded-[6px] bg-[#3B1F35] !text-[#F8F5F0] font-body text-[11px] font-semibold uppercase leading-[24px] tracking-[1px] transition-colors duration-250 hover:bg-[#76506A] max-[600px]:w-full max-[600px]:max-w-[300px]"
          >
            <span className="!text-[#F8F5F0]">ENQUIRE NOW</span>

            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="!text-[#F8F5F0] transition-transform duration-250 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
            />
          </a>

          {/* Developing Portfolio Page */}
          <Link
            href="/developing"
            className="group flex h-[50px] w-[175px] items-center justify-center gap-[8px] rounded-[6px] border border-[#3B1F35] bg-transparent !text-[#3B1F35] font-body text-[11px] font-semibold uppercase leading-[24px] tracking-[1px] transition-colors duration-250 hover:bg-[#DCE3D8] max-[600px]:w-full max-[600px]:max-w-[300px]"
          >
            <span className="!text-[#3B1F35]">EXPLORE MY WORK</span>

            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="!text-[#3B1F35] transition-transform duration-250 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
            />
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div
        className={`absolute right-[13%] top-[35px] h-[610px] w-[435px] transition-all duration-1000 ease-out max-[1200px]:right-[8%] max-[1200px]:w-[400px] max-[1024px]:relative max-[1024px]:right-auto max-[1024px]:top-auto max-[1024px]:mx-auto max-[1024px]:mt-[5px] max-[1024px]:mb-[70px] max-[1024px]:h-[570px] max-[1024px]:w-[420px] max-[767px]:h-[500px] max-[767px]:w-[88%] max-[767px]:max-w-[390px] ${
          visible
            ? "translate-x-0 opacity-100"
            : "translate-x-[20px] opacity-0"
        }`}
      >
        {/* Mobile Sage Block */}
        <div className="absolute bottom-[-25px] left-[-25px] z-0 hidden h-[420px] w-[300px] bg-[#DCE3D8] max-[767px]:block" />

        {/* Original Image */}
        <div className="absolute right-0 top-0 z-10 h-full w-full overflow-hidden">
          <img
            src="/images/hero.webp"
            alt="Bridal makeup by Jothi Arumugam"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}