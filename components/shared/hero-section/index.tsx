"use client";

import Image from "next/image";
import img from "@/public/hero-section.jpeg";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img}
          alt="hero background"
          fill
          priority
          className="object-cover"
        />

        {/* Koyu lacivert overlay */}
        <div className="absolute inset-0 bg-brand-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center space-y-8">
        <h1 className="font-medium leading-tight text-brand-white text-4xl sm:text-5xl lg:text-6xl">
          Hukuki ihtiyaçlarınızda{" "}
          <span className="text-brand-gold">
            güvenilir çözüm ortağınız.
          </span>
        </h1>

        <p className="text-brand-cream max-w-2xl text-lg">
          Alanında uzman ekibimizle bireysel ve kurumsal müvekkillerimize,
          hukuki süreçlerin her aşamasında profesyonel destek sağlıyoruz.
          Haklarınızı korumak ve ihtiyaçlarınıza özel çözümler sunmak için
          titizlikle çalışıyoruz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#skills"
            className="px-8 h-12 rounded-3xl bg-brand-gold text-brand-navy hover:bg-brand-gold/90 flex items-center justify-center transition font-medium"
          >
            Hizmetlerimizi inceleyin
          </Link>

          <Link
            href="#contact"
            className="px-8 h-12 rounded-3xl border border-brand-gold text-brand-white hover:bg-brand-gold/90 hover:text-brand-navy flex items-center justify-center transition font-medium"
          >
            İletişime geçin
          </Link>
        </div>
      </div>
    </section>
  );
};
