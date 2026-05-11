"use client";

import Image from "next/image";
import img from "@/public/hero-section.jpeg";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Giriş animasyonları
        gsap.set([titleRef.current, textRef.current, ctaRef.current], {
          opacity: 0,
          y: 28,
        });

        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 })
          .to(textRef.current, { opacity: 1, y: 0, duration: 0.75 }, "-=0.35")
          .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.35");

        // Arka plan parallax — scrub ile scroll'a bağlı
        gsap.fromTo(
          bgRef.current,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[55vh] overflow-hidden flex items-center"
    >
      {/* Arka plan — container'dan taşarak parallax alanı oluşturur */}
      <div
        ref={bgRef}
        className="absolute -top-[30%] -bottom-[30%] left-0 right-0 z-0"
      >
        <Image
          src={img}
          alt="Koçtürk & Şahin Hukuk Bürosu — Ankara Çankaya avukatlık ofisi"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/80" />
      </div>

      {/* İçerik */}
      <div className="relative z-10 w-full max-w-4xl px-6 mx-auto text-center flex flex-col items-center space-y-6 py-10 md:py-24">
        <h1
          ref={titleRef}
          className="font-medium leading-tight text-brand-white text-4xl sm:text-5xl lg:text-6xl"
        >
          Hukuki ihtiyaçlarınızda{" "}
          <span className="text-brand-gold">güvenilir çözüm ortağınız.</span>
        </h1>

        <p ref={textRef} className="text-brand-cream max-w-2xl text-lg">
          Alanında uzman ekibimizle bireysel ve kurumsal müvekkillerimize,
          hukuki süreçlerin her aşamasında profesyonel destek sağlıyoruz.
          Haklarınızı korumak ve ihtiyaçlarınıza özel çözümler sunmak için
          titizlikle çalışıyoruz.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
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
