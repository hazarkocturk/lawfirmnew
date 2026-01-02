"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  PhoneCall,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "../logo";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);

  const closeNavbar = () => setNavIsOpened(false);
  const toggleNavbar = () => setNavIsOpened((v) => !v);

  const navItems = [
    { name: "Hakkımızda", href: "#hero" },
    { name: "Çalışma Alanlarımız", href: "#skills" },
    { name: "Ekibimiz", href: "#team" },
    { name: "İletişim", href: "#contact" },
  ];

  return (
    <>
      {/* ÜST BAR */}
      <section>
        <div className="w-full justify-between flex px-8 py-4 bg-brand-navy text-brand-cream">
          <div className="flex items-center gap-x-4">
            <Link
              href="tel:+903124356886"
              className="flex gap-1 items-center duration-300 ease-linear hover:text-brand-gold"
            >
              <PhoneCall />
              <span className="hidden sm:flex">+90 312 435 68 86</span>
            </Link>

            <Link
              href="mailto:kocturksahinhukukburosu@gmail.com?subject=İletişim"
              target="_blank"
              className="flex gap-1 items-center duration-300 ease-linear hover:text-brand-gold"
            >
              <Mail />
              <span className="hidden sm:flex">kocturksahinhukuk.com</span>
            </Link>
          </div>

          <div className="flex items-center gap-x-4">
            {/* Linklerin hazır değilse boş bırakma: # koy */}
            <Link
              href="#"
              aria-label="Facebook"
              className="duration-300 ease-linear hover:text-brand-gold"
            >
              <Facebook />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="duration-300 ease-linear hover:text-brand-gold"
            >
              <Twitter />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="duration-300 ease-linear hover:text-brand-gold"
            >
              <Linkedin />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="duration-300 ease-linear hover:text-brand-gold"
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </section>

      {/* ALT STICKY NAV */}
      <div className="sticky top-0 z-50 bg-brand-white/90 backdrop-blur-xl">
        <div className="max-w-360 mx-auto relative">
          <header className="flex items-center justify-between px-8">
            <Link href="#" aria-label="Homepage">
              <Logo />
            </Link>

            {/* Mobil açılır menü paneli */}
            <div
              className={`
                duration-300 ease-linear absolute top-full left-0 w-full
                lg:static lg:w-auto lg:border-0 lg:p-0
                border-b p-8 border-brand-gold/30
                ${
                  navIsOpened
                    ? "translate-y-0 visible opacity-100 bg-white/95 backdrop-blur-3xl"
                    : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"
                }
              `}
            >
              <nav id="main-navigation" role="navigation" aria-label="Main">
                <ul className="flex flex-col lg:flex-row gap-6 lg:items-center lg:w-full lg:justify-center">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="relative py-2.5 duration-300 ease-linear
                                  hover:text-brand-gold
                                  after:absolute after:w-full after:left-0 after:bottom-0 after:h-px
                                  after:rounded-md after:origin-left after:ease-linear after:duration-300
                                  after:scale-x-0 hover:after:scale-100
                                  after:bg-brand-gold"
                        onClick={closeNavbar}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleNavbar}
                aria-label="Toggle navigation menu"
                aria-expanded={navIsOpened}
                aria-controls="main-navigation"
                className="outline-none relative lg:hidden"
              >
                <span
                  aria-hidden
                  className={`flex h-0.5 w-6 rounded bg-brand-navy transition duration-300
                              ${
                                navIsOpened
                                  ? "rotate-45 translate-y-[.324rem]"
                                  : ""
                              }`}
                />
                <span
                  aria-hidden
                  className={`mt-2 flex h-0.5 w-6 rounded bg-brand-navy transition duration-300
                              ${
                                navIsOpened
                                  ? "-rotate-45 -translate-y-[.324rem]"
                                  : ""
                              }`}
                />
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* Sticky nav DIŞINDA separator */}
      <Separator className="max-w-360 mx-auto text-gray-200" />

      {/* Mobil menü açıkken arkaplan overlay */}
      <div
        aria-hidden
        onClick={closeNavbar}
        className={`fixed inset-0 ${
          navIsOpened ? "lg:hidden z-40" : "hidden lg:hidden"
        }`}
      />
    </>
  );
};

export default Navbar;
