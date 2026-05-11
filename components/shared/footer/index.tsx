import Link from "next/link";
import { Logo } from "../logo";
import { MapPinPlusInside, PhoneCall, Mail } from "lucide-react";

const navItems = [
  { name: "Hakkımızda", href: "#hero" },
  { name: "Çalışma Alanlarımız", href: "#skills" },
  { name: "Ekibimiz", href: "#team" },
  { name: "İletişim", href: "#contact" },
];

const FooterBlock = () => {
  return (
    <footer>
      {/* ÜST FOOTER – 3 SÜTUN */}
      <div className="bg-brand-white text-brand-navy border-t border-brand-gold/20">
        <div className="max-w-360 mx-auto px-8 py-12">
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-3">
            {/* 1. Sütun: Logo + LinkedIn */}
            <div className="flex flex-col gap-6">
              <Link href="/" aria-label="Anasayfa" className="inline-flex">
                <Logo />
              </Link>
              <Link
                href="https://www.linkedin.com/company/kocturk-sahin-law-office"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-9 h-9 items-center justify-center rounded-full border border-brand-gold/40 text-brand-navy hover:text-brand-gold hover:border-brand-gold transition duration-300 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>

            {/* 2. Sütun: Hızlı Bağlantılar */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Hızlı Bağlantılar
              </h3>
              <nav aria-label="Footer navigasyonu">
                <ul className="flex flex-col gap-2.5">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-brand-navy/60 hover:text-brand-gold transition duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* 3. Sütun: İletişim */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                İletişim
              </h3>
              <div className="flex flex-col gap-3">
                <p className="flex gap-2.5 items-start text-sm text-brand-navy/60">
                  <MapPinPlusInside
                    className="mt-0.5 shrink-0 text-brand-gold"
                    size={16}
                  />
                  <span>
                    Mustafa Kemal Mahallesi Barış Sitesi
                    <br />
                    2161. Sokak No:6 Çankaya / Ankara
                  </span>
                </p>
                <Link
                  href="tel:+903124356886"
                  className="flex gap-2.5 items-center text-sm text-brand-navy/60 hover:text-brand-gold transition duration-300"
                >
                  <PhoneCall className="shrink-0 text-brand-gold" size={16} />
                  <span>+90 312 435 68 86</span>
                </Link>
                <Link
                  href="mailto:kocturksahinhukukburosu@gmail.com"
                  className="flex gap-2.5 items-center text-sm text-brand-navy/60 hover:text-brand-gold transition duration-300"
                >
                  <Mail className="shrink-0 text-brand-gold" size={16} />
                  <span>kocturksahinhukukburosu@gmail.com</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HARİTA BANDI – tam genişlik */}
      <div className="w-full h-48 sm:h-64 lg:h-72">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.382990910869!2d32.75846369999999!3d39.9104446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347cb05088987%3A0x4f6d8dbc5af82e1b!2sKocturk%26Sahin%20Hukuk%20Burosu!5e0!3m2!1str!2sbe!4v1764672846971!5m2!1str!2sbe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title="Koçtürk & Şahin Hukuk Bürosu Konum"
        />
      </div>

      {/* ALT FOOTER – NAVY */}
      <div className="bg-brand-navy border-t border-brand-gold/20">
        <div className="max-w-360 mx-auto px-8 py-4 flex justify-center text-center">
          <p className="text-sm text-brand-cream/80">
            © {new Date().getFullYear()} Koçtürk &amp; Şahin Hukuk Bürosu —
            Tüm Hakları Saklıdır
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock;
