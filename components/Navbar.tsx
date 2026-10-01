"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "MEET NIVETHITHA", href: "/developing" },
  { name: "SERVICES", href: "/developing" },
  { name: "PORTFOLIO", href: "/developing" },
  { name: "CONTACT", href: "/developing" },
];

const whatsappMessage =
  "Hi Nivethitha, I saw your website and would like to enquire about your makeup services.";

const whatsappUrl = `https://wa.me/919500292511?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="relative z-50 w-full bg-[#F8F5F0]">
      <nav className="relative flex h-[80px] w-full items-center border-b border-[#76506A]/20 px-[100px] max-[1024px]:px-[50px] max-[767px]:h-[72px] max-[767px]:px-[24px]">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Nivethitha Makeover Artistry"
          className="flex shrink-0 flex-col items-start justify-center"
        >
          <span className="font-logo text-[28px] font-normal leading-[25px] tracking-[2.24px] text-[#3B1F35] max-[767px]:text-[24px] max-[767px]:leading-[22px] max-[767px]:tracking-[1.92px]">
            NIVETHITHA
          </span>

          <span className="font-body text-[8px] font-normal leading-[15px] tracking-[1.44px] text-[#76506A] max-[767px]:text-[7px] max-[767px]:leading-[13px] max-[767px]:tracking-[1.2px]">
            MAKEOVER ARTISTRY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2 max-[1024px]:hidden">
          <div className="flex items-center gap-[30px]">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative whitespace-nowrap font-body text-[12px] font-medium uppercase leading-[24px] tracking-[1.08px] transition-colors duration-200 ${
                    active
                      ? "!text-[#3B1F35]"
                      : "!text-[#76506A] hover:!text-[#3B1F35]"
                  }`}
                >
                  {link.name}

                  <span className="absolute -bottom-[3px] left-0 h-[1px] w-0 bg-[#3B1F35] transition-all duration-200 group-hover:w-full" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Desktop Enquire Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group ml-auto flex h-[50px] w-[180px] items-center justify-center gap-[7px] rounded-[6px] bg-[#3B1F35] font-body text-[12px] font-semibold uppercase leading-[24px] tracking-[0.84px] !text-[#F8F5F0] transition-colors duration-250 hover:bg-[#76506A] max-[1024px]:hidden"
        >
          <span className="!text-[#F8F5F0]">ENQUIRE NOW</span>

          <ArrowUpRight
            size={17}
            strokeWidth={2}
            className="!text-[#F8F5F0] transition-transform duration-250 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto hidden h-[42px] w-[42px] items-center justify-center rounded-[6px] text-[#3B1F35] max-[1024px]:flex"
        >
          {menuOpen ? <X size={23} strokeWidth={1.8} /> : <Menu size={23} strokeWidth={1.8} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-b border-[#76506A]/20 bg-[#F8F5F0] transition-all duration-300 ease-out max-[1024px]:block ${
          menuOpen
            ? "pointer-events-auto max-h-[420px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="px-[24px] pb-[28px] pt-[12px]">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#76506A]/10 py-[17px] font-body text-[11px] font-medium uppercase leading-[20px] tracking-[1.08px] !text-[#3B1F35]"
              >
                {link.name}
              </Link>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-[18px] flex h-[50px] w-full items-center justify-center gap-[7px] rounded-[6px] bg-[#3B1F35] font-body text-[11px] font-semibold uppercase leading-[24px] tracking-[0.84px] !text-[#F8F5F0]"
            >
              <span className="!text-[#F8F5F0]">ENQUIRE NOW</span>
              <ArrowUpRight size={16} strokeWidth={2} className="!text-[#F8F5F0]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}