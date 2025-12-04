import Link from "next/link";
import { Logo } from "../logo";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPinPlusInside,
  PhoneCall,
  Twitter,
} from "lucide-react";

const FooterBlock = () => {
  const navItems = [
    { name: "Hakkımızda", href: "#hero" },
    { name: "Çalışma Alanlarımız", href: "#skills" },
    { name: "Ekibimiz", href: "#team" },
    { name: "İletişim", href: "#contact" }
  ];

  return (
    <section className="">
      <div className="max-w-[1440px] mx-auto p-8">
        <div className="dark:border-t dark:border-t-gray-800  md:py-10 grid  space-y-6 justify-items-start items-center">
          <div className="w-auto flex flex-col justify-center space-y-6 col-start-1 col-end-1 row-start-1 row-end-1">
            <Link href="#" aria-label="Homepage">
              <Logo />
            </Link>
            <div className="flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <MapPinPlusInside />
                <span>Mustafa Kemal Mahallesi Barış Sitesi <br></br>2161. Sokak No:6 Çankaya Ankara</span>
              </p>
              <Link
                href="tel:+903124356886"
                className="flex gap-2 items-center duration-300 ease-linear hover:text-pink-600"
              >
                <PhoneCall />
                <span>+90 312 435 68 86</span>
              </Link>
              <div className="flex items-center gap-x-4">
                <Link
                  href=""
                  aria-label="Facebook"
                  className="duration-300 ease-linear hover:text-pink-600"
                >
                  <Facebook />
                </Link>
                <Link
                  href=""
                  aria-label="Twitter"
                  className="duration-300 ease-linear hover:text-pink-600"
                >
                  <Twitter />
                </Link>
                <Link
                  href=""
                  aria-label="LinkedIn"
                  className="duration-300 ease-linear hover:text-pink-600"
                >
                  <Linkedin />
                </Link>
                <Link
                  href=""
                  aria-label="Instagram"
                  className="duration-300 ease-linear hover:text-pink-600"
                >
                  <Instagram />
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:col-start-2 sm:col-end-2 sm:row-start-1 sm:row-end-1 col-start-1 col-end-1 row-start-2 row-end-2">
          <nav role="navigation" aria-label="Main" className="flex flex-col gap-2">
            <h3 className="font-semibold text-2xl">Bağlantılar</h3>
                <ul className="flex flex-col gap-2 items-start lg:w-full lg:justify-center">
  
                  {navItems.map(
                    (item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="relative py-2.5 duration-300 ease-linear hover:text-pink-600
                                     after:absolute after:w-full after:left-0 after:bottom-0 after:h-px
                                     after:rounded-md after:origin-left after:ease-linear after:duration-300
                                     after:scale-x-0 hover:after:scale-100 after:bg-pink-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>

          </div>

          <div className="w-full h-[300px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-2 lg:col-start-3 lg:row-start-1">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.382990910869!2d32.75846369999999!3d39.9104446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347cb05088987%3A0x4f6d8dbc5af82e1b!2sKocturk%26Sahin%20Hukuk%20Burosu!5e0!3m2!1str!2sbe!4v1764672846971!5m2!1str!2sbe"
              width="300"
              height="300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="py-3 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex justify-center text-center">
          <p> © 2025 Koçtürk & Şahin Hukuk Bürosu </p>
        </div>
      </div>
    </section>
  );
};

export default FooterBlock;
