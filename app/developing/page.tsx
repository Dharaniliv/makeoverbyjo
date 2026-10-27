import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Developing() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F5F0]">
      <Navbar />

      <main className="flex flex-1 items-center justify-center px-[24px] py-[100px]">
        <div className="flex w-full max-w-[700px] flex-col items-center text-center">
          <p className="font-body text-[11px] font-semibold uppercase leading-[18px] tracking-[2.2px] text-[#76506A]">
            COMING SOON
          </p>

          <h1 className="mt-[22px] font-display text-[64px] font-normal leading-[1] tracking-[-1.5px] text-[#3B1F35] max-[767px]:text-[46px] max-[767px]:tracking-[-1px]">
            This page
            <br />
            is currently under development.
          </h1>

          <p className="mt-[28px] max-w-[500px] font-body text-[15px] font-normal leading-[25px] text-[#76506A] max-[767px]:mt-[22px] max-[767px]:text-[14px] max-[767px]:leading-[23px]">
            This page is currently being developed. Please check back soon to
            explore more of Makeover by Jo.
          </p>

          <Link
            href="/"
            className="group mt-[35px] flex h-[50px] w-[175px] items-center justify-center gap-[8px] rounded-[6px] bg-[#3B1F35] !text-[#F8F5F0] font-body text-[11px] font-semibold uppercase leading-[24px] tracking-[1px] transition-colors duration-250 hover:bg-[#76506A]"
          >
            <span className="!text-[#F8F5F0]">BACK TO HOME</span>

            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="!text-[#F8F5F0] transition-transform duration-250 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
            />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}