"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building,
  Building2,
  Car,
  Crown,
  Factory,
  HardHat,
  House,
  KeyRound,
  LibraryBig,
  PenTool,
  Scale,
  Speech,
  Stethoscope,
  UserLock,
  Users,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { JSX } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import imgDanismanlik from "@/public/hukuk sitesi fotolari/danismanlik.jpeg";
import img_arabul from "@/public/hukuk sitesi fotolari/arabuluculuk.jpg";
import img_aile from "@/public/hukuk sitesi fotolari/aile.jpg";
import img_gayrimenkul from "@/public/hukuk sitesi fotolari/gayrimenkul.jpg";
import img_ishukuku from "@/public/hukuk sitesi fotolari/is-hukuku.jpg";
import img_kvkk from "@/public/hukuk sitesi fotolari/kvkk.jpg";
import img_saglik from "@/public/hukuk sitesi fotolari/saglik.jpg";
import img_sirketler from "@/public/hukuk sitesi fotolari/sirketler.jpg";
import img_tuketici from "@/public/hukuk sitesi fotolari/tuketici.jpg";
import img_ceza from "@/public/hukuk sitesi fotolari/ceza.jpg";
import img_kooperatif from "@/public/hukuk sitesi fotolari/kooperatif.webp";
import img_katmulkiyeti from "@/public/hukuk sitesi fotolari/kat-mulkiyeti.jpg";
import img_sendika from "@/public/hukuk sitesi fotolari/sendika.jpg";
import img_fikri from "@/public/hukuk sitesi fotolari/fikri-sinai.jpg";
import img_sigorta from "@/public/hukuk sitesi fotolari/sigorta.jpg";
import img_idare from "@/public/hukuk sitesi fotolari/idare-hukuku.jpg";

export interface Post {
  icon: JSX.Element;
  title: string;
  description: string;
  cover?: StaticImageData; // cover yoksa undefined olsun
}

// --- Card
const BlogCard = ({ cover, icon, title, description }: Post) => {
  return (
    <article
      className="
        h-full flex flex-col
        bg-brand-white rounded-2xl
        shadow-lg shadow-gray-200/40
        border border-brand-gold/20
        overflow-hidden
        transform transition duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      {/* Cover */}
      {cover ? (
        <div className="relative w-full lg:aspect-5/3 aspect-6/4">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Hafif lacivert overlay */}
          <div className="absolute inset-0 bg-brand-navy/15" />
        </div>
      ) : (
        <div className="w-full lg:aspect-5/3 aspect-6/4 bg-brand-cream" />
      )}

      {/* Content */}
      <div className="relative lg:p-6 lg:pt-10 p-4 pt-8">
        {/* Icon badge */}
        <div className="absolute right-4 -top-6 lg:-top-8 bg-brand-gold p-2 lg:p-4 rounded-md text-brand-navy flex shadow-md">
          {icon}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="lg:text-xl font-semibold text-brand-navy">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </article>
  );
};

// --- Data
const posts: Post[] = [
  {
    icon: <Speech />,
    title: "Danışmanlık",
    description:
      "Hukuki süreçlerde yol gösterici olarak, müvekkillerimize profesyonel danışmanlık hizmetleri veriyoruz.",
    cover: imgDanismanlik,
  },
  {
    icon: <PenTool />,
    title: "Arabuluculuk",
    description:
      "Hukuki uyuşmazlıkların çözümünde hızlı ve etkin bir yöntem olan arabuluculuk hizmeti sunuyoruz.",
    cover: img_arabul,
  },
  {
    icon: <Scale />,
    title: "Ceza Hukuku",
    description: "Şikayet ve suç duyurusu başvuruları... temsil hizmeti sunuyoruz.",
    cover: img_ceza,
  },
  {
    icon: <HardHat />,
    title: "İş ve Sosyal Güvenlik Hukuku",
    description:
      "İş kazası tazminatları, işçilik alacakları, işe iade... danışmanlık sunuyoruz.",
    cover: img_ishukuku,
  },
  {
    icon: <House />,
    title: "Gayrimenkul Hukuku",
    description: "Alım satım, kiralama, tapu iptal/tescil... hizmetleri sunuyoruz.",
    cover: img_gayrimenkul,
  },
  {
    icon: <Building />,
    title: "Kat Mülkiyeti Hukuku",
    description: "Apartman/site yönetimi uyuşmazlıklarında çözüm odaklı danışmanlık.",
    cover: img_katmulkiyeti,
  },
  {
    icon: <Building2 />,
    title: "Kooperatifler Hukuku",
    description:
      "Kuruluş, yönetim ve işleyişe ilişkin danışmanlık ve uyuşmazlık çözümü.",
    cover: img_kooperatif,
  },
  {
    icon: <Factory />,
    title: "Şirketler Hukuku",
    description: "Kuruluş, birleşme/devralma gibi ticari işlemlerde hukuki destek.",
    cover: img_sirketler,
  },
  {
    icon: <UserLock />,
    title: "Tüketici Hukuku",
    description: "Ayıplı mal/hizmetler, tüketici hakları davaları...",
    cover: img_tuketici,
  },
  {
    icon: <Stethoscope />,
    title: "Sağlık Hukuku",
    description: "Hekim ve hasta kaynaklı uyuşmazlıklara ilişkin danışmanlık.",
    cover: img_saglik,
  },
  {
    icon: <Users />,
    title: "Aile Hukuku",
    description: "Boşanma, velayet, nafaka, ziynet, mal rejimi, soybağı...",
    cover: img_aile,
  },
  {
    icon: <KeyRound />,
    title: "Kişisel Verilerin Korunması Hukuku",
    description: "KVKK başvuruları, envanter ve metinler, sözleşmelerin revizesi.",
    cover: img_kvkk,
  },
  {
    icon: <LibraryBig />,
    title: "İdare Hukuku",
    description: "İdari işlemler, itirazlar ve davalar konusunda hukuki destek.",
    cover: img_idare,
  },
  {
    icon: <Speech />,
    title: "Sendika Hukuku",
    description: "Sendika kuruluşu, toplu iş sözleşmeleri ve uyuşmazlıklar.",
    cover: img_sendika,
  },
  {
    icon: <Crown />,
    title: "Fikri ve Sınai Mülkiyet Hukuku",
    description: "Telif hakları, patent, marka tescili ve ihlallerine karşı koruma.",
    cover: img_fikri,
  },
  {
    icon: <Car />,
    title: "Sigorta Hukuku",
    description:
      "Sigorta poliçeleri, tazminat talepleri ve uyuşmazlıklarında hukuki danışmanlık.",
    cover: img_sigorta,
  },
];

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const headingRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!headingRef.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          Array.from(headingRef.current!.children),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-brand-cream/60">
      <section className="mx-auto p-8 max-w-360" id="skills">
        <div className="flex flex-col gap-y-10">
          <div ref={headingRef} className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy capitalize">
              Çalışma Alanlarımız
            </h2>
            <p className="text-gray-700">
              Hukukun çeşitli alanlarında uzmanlaşmış ekibimizle, müvekkillerimize
              geniş kapsamlı hizmetler sunuyoruz. İşte başlıca çalışma alanlarımız:
            </p>
          </div>

          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full relative px-10"
          >
            <CarouselPrevious className="left-0 border-brand-gold/40 text-brand-navy hover:bg-brand-gold/15" />
            <CarouselNext className="right-0 border-brand-gold/40 text-brand-navy hover:bg-brand-gold/15" />

            <CarouselContent>
              {posts.map((post) => (
                <CarouselItem
                  key={post.title}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="h-full">
                    <BlogCard {...post} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
