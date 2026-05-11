import Link from "next/link";
import { Logo } from "../logo";
import {
  MapPinPlusInside,
  PhoneCall,
} from "lucide-react";

const FooterBlock = () => {
  return (
    <footer>
      {/* ÜST FOOTER – BEYAZ */}
      <div className="bg-brand-white text-brand-navy">
        <div className="max-w-360 mx-auto p-8">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Sol blok */}
            <div className="flex flex-col space-y-6">
              <Link href="#" aria-label="Homepage" className="inline-flex">
                <Logo />
              </Link>

              <div className="flex flex-col gap-3 text-sm sm:text-base">
                <p className="flex gap-2 items-start">
                  <MapPinPlusInside className="mt-1 shrink-0 text-brand-gold" />
                  <span>
                    Mustafa Kemal Mahallesi Barış Sitesi
                    <br />
                    2161. Sokak No:6 Çankaya / Ankara
                  </span>
                </p>

                <Link
                  href="tel:+903124356886"
                  className="flex gap-2 items-center transition hover:text-brand-gold"
                >
                  <PhoneCall className="shrink-0 text-brand-gold" />
                  <span>+90 312 435 68 86</span>
                </Link>

              </div>
            </div>

            {/* Harita */}
            <div className="w-full h-75 rounded-xl overflow-hidden border border-brand-gold/25">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.382990910869!2d32.75846369999999!3d39.9104446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347cb05088987%3A0x4f6d8dbc5af82e1b!2sKocturk%26Sahin%20Hukuk%20Burosu!5e0!3m2!1str!2sbe!4v1764672846971!5m2!1str!2sbe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Koçtürk & Şahin Hukuk Bürosu Konum"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ALT FOOTER – NAVY */}
      <div className="bg-brand-navy border-t border-brand-gold/20">
        <div className="max-w-360 mx-auto px-8 py-4 flex justify-center text-center">
          <p className="text-sm text-brand-cream/80">
            © 2025 Koçtürk &amp; Şahin Hukuk Bürosu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock;
