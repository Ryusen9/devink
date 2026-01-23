import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import type { StaticImageData } from "next/image";
import { legalLinks, mainLinks } from "@/Constants";

interface FooterProps {
  logo?: React.ReactNode | StaticImageData;
  brandName?: string;
  socialLinks?: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks?: Array<{
    href: string;
    label: string;
  }>;
  legalLinks?: Array<{
    href: string;
    label: string;
  }>;
  copyright?: {
    text: string;
    license?: string;
  };
}

export function Footer({
  socialLinks = [],
  copyright = {
    text: "© 2026 DEVINK. All rights reserved.",
    license: "Built for developers, by developers.",
  },
}: FooterProps = {}) {
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24 border-t border-gray-300 mt-10">
      <div className="px-4 lg:px-8 max-w-362.5 mx-auto">
        <div className="md:flex md:items-start md:justify-between">
          <div className="flex flex-col gap-y-4">
            <Link
              href="/"
              className="flex items-center gap-x-2"
              aria-label="DEVINK"
            >
              <Image src={logo} alt="Logo" width={40} height={40} />
              <span className="font-bold text-xl text-black">DEVINK</span>
            </Link>
            <Link
              href="/#newsletter"
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg w-fit"
            >
              Subscribe & Stay Updated
            </Link>
          </div>
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 transition-all duration-300"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 underline-offset-4 hover:text-cyan-400 hover:underline transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 underline-offset-4 hover:text-cyan-300 hover:underline transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-sm leading-6 text-gray-500 whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  );
}
