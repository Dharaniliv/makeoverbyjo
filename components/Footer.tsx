import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Meet Nivethitha", href: "/developing" },
  { name: "Services", href: "/developing" },
  { name: "Portfolio", href: "/developing" },
  { name: "Contact", href: "/developing" },
];

const services = [
  "Bridal Makeup",
  "Hair stylist",
  "Saree drapist",
  "Nail Services",
];

const whatsappMessage =
  "Hi Nivethitha, I saw your website and would like to enquire about your makeup services.";

const whatsappUrl = `https://wa.me/919500292511?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const connectLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nivethithamakeoverartistry",
  },
  {
    name: "Whatsapp",
    href: whatsappUrl,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@anishnive",
  },
  {
    name: "Start An Enquiry",
    href: whatsappUrl,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#3B1F35]">
      <div className="mx-auto flex min-h-[420px] w-full max-w-[1315px] flex-col px-0 max-[1315px]:px-[50px] max-[767px]:px-[24px]">
        <div className="flex flex-1 pt-[67px] max-[1024px]:grid max-[1024px]:grid-cols-2 max-[1024px]:gap-x-[60px] max-[1024px]:gap-y-[55px] max-[1024px]:pt-[60px] max-[767px]:flex max-[767px]:flex-col max-[767px]:items-center max-[767px]:gap-[42px] max-[767px]:pt-[55px]">
          {/* Brand */}
          <div className="w-[555px] shrink-0 pt-[32px] max-[1024px]:w-auto max-[1024px]:pt-0 max-[767px]:w-full max-[767px]:text-center">
            <Link
              href="/"
              className="flex flex-col items-start max-[767px]:items-center"
            >
              <span className="font-logo text-[50px] font-normal leading-[45px] tracking-[4px] text-[#F8F5F0] max-[767px]:text-[40px] max-[767px]:leading-[38px] max-[767px]:tracking-[3.2px]">
                NIVETHITHA
              </span>

              <span className="mt-[5px] font-body text-[15px] font-normal leading-[19px] tracking-[2.4px] text-[#F8F5F0]/30 max-[767px]:text-[11px] max-[767px]:leading-[16px] max-[767px]:tracking-[1.8px]">
                MAKEOVER ARTISTRY
              </span>
            </Link>

            <p className="mt-[22px] font-display text-[30px] font-normal leading-[30px] text-[#DCE3D8] max-[767px]:mx-auto max-[767px]:max-w-[330px] max-[767px]:text-[26px] max-[767px]:leading-[28px]">
              YOUR BEAUTY, YOUR MOMENT.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-[305px] shrink-0 max-[1024px]:w-auto max-[767px]:w-full max-[767px]:text-center">
            <h3 className="font-display text-[18px] font-normal uppercase leading-[22px] tracking-[-0.18px] text-[#F8F5F0]">
              QUICK LINKS
            </h3>

            <div className="mt-[11px] flex flex-col gap-[10px]">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="!text-[#DCE3D8] font-body text-[16px] font-medium leading-[26px] transition-opacity duration-200 hover:opacity-70 max-[767px]:text-[14px] max-[767px]:leading-[24px]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="w-[290px] shrink-0 max-[1024px]:w-auto max-[767px]:w-full max-[767px]:text-center">
            <h3 className="font-display text-[18px] font-normal uppercase leading-[22px] tracking-[-0.18px] text-[#F8F5F0]">
              SERVICES
            </h3>

            <div className="mt-[11px] flex flex-col gap-[10px]">
              {services.map((service) => (
                <span
                  key={service}
                  className="font-body text-[16px] font-medium leading-[26px] text-[#DCE3D8] max-[767px]:text-[14px] max-[767px]:leading-[24px]"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="flex-1 max-[1024px]:w-auto max-[767px]:w-full max-[767px]:text-center">
            <h3 className="font-display text-[18px] font-normal uppercase leading-[22px] tracking-[-0.18px] text-[#F8F5F0]">
              CONNECT
            </h3>

            <div className="mt-[11px] flex flex-col gap-[10px]">
              {connectLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`!text-[#DCE3D8] font-body text-[16px] font-medium leading-[26px] transition-opacity duration-200 hover:opacity-70 max-[767px]:text-[14px] max-[767px]:leading-[24px] ${
                    link.name === "Start An Enquiry"
                      ? "underline decoration-[#DCE3D8]/60 underline-offset-[5px]"
                      : ""
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Bottom Row */}
        <div className="pb-[62px] max-[1024px]:pt-[50px] max-[1024px]:pb-[45px] max-[767px]:w-full max-[767px]:pt-[45px] max-[767px]:pb-[30px]">
          <div className="h-[0.1px] w-full bg-[#F8F5F0]/30" />

          <div className="mt-[27px] flex items-center justify-between max-[767px]:flex-col max-[767px]:gap-[15px] max-[767px]:text-center">
            <p className="font-body text-[10px] font-normal leading-[15px] tracking-[1.8px] text-[#F8F5F0]/80 max-[767px]:text-[8px] max-[767px]:leading-[13px] max-[767px]:tracking-[1.4px]">
              © 2026 NIVETHITHA MAKEOVER ARTISTRY
            </p>

            <div className="flex items-center gap-[7px] font-body text-[10px] font-normal leading-[15px] tracking-[1.8px] text-[#F8F5F0]/80 max-[767px]:text-[8px] max-[767px]:leading-[13px] max-[767px]:tracking-[1.4px]">
              <a
                href="https://www.instagram.com/nivethithamakeoverartistry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nivethitha Makeover Artistry on Instagram"
                className="transition-opacity duration-200 hover:opacity-70"
              >
                <FaInstagram size={13} />
              </a>

              <span>MUA • HAIR • DRAPING • NAILS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}