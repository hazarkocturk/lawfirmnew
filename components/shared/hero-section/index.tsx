"use client";

import Image from "next/image";
import img from "@/public/hero-section.jpeg";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <>
      <section className="overflow-x-hidden" id="hero">
        <div className="mx-auto p-8 max-w-[1440px] grid lg:grid-cols-2 lg:items-center gap-10">
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
            <h1 className="font-semibold leading-tight dark:text-white text-4xl sm:text-5xl lg:text-6xl">
              Hukuki ihtiyaçlarınızda{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-orange-800">
                güvenilir çözüm ortağınızız.
              </span>
            </h1>
            <p className="flex text-gray-700 dark:text-gray-300 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
              Alanında uzman ekibimizle bireysel ve kurumsal müvekkillerimize,
              hukuki süreçlerin her aşamasında profesyonel destek sağlıyoruz.
              Haklarınızı korumak ve ihtiyaçlarınıza özel çözümler sunmak için
              titizlikle çalışıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
              <Link
                href="#skills"
                className="px-6 items-center h-12 rounded-3xl bg-pink-600 hover:bg-pink-800 text-white duration-100 ease-linear flex justify-center w-full sm:w-auto"
              >
                Hizmetlerimizi İnceleyin
              </Link>
              <Link
                href="#contact"
                className="px-6 items-center h-12 rounded-3xl text-pink-700 border border-gray-100 dark:border-gray-800 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-700 duration-100 ease-linear flex justify-center w-full sm:w-auto"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>

          <div className="w-full hidden sm:flex aspect-square lg:aspect-auto h-[30rem] lg:h-[35rem] relative">
            <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950 z-30">
              <Image
                src={img}
                alt="buildind plan image"
                width={1300}
                height={1300}
                className="w-full h-full object-cover z-30"
              />
            </div>
            <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-3/5 sm:w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 dark:border-gray-800 z-10">
              <Image
                src={img}
                alt="working-on-housing-project"
                height={1300}
                width={1300}
                className="z-10 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full flex sm:hidden aspect-square relative">
            <div className="w-full rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950 z-30">
              <Image
                src={img}
                alt="building plan image"
                width={1300}
                height={1300}
                className="w-full h-full object-cover z-30"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
