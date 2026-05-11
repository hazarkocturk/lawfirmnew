"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";
import TeamMember1 from "@/public/ulkukocturk.jpeg";
import TeamMember2 from "@/public/mehmetsahin.jpeg";
import TeamMember3 from "@/public/aysegulbulutsahin.jpeg";
import TeamMember4 from "@/public/beyzaarslan.jpeg";
import TeamMember5 from "@/public/arzudenizkir.jpeg";
import TeamMember6 from "@/public/elifbilal.jpg";
import TeamMember7 from "@/public/hazarkocturk.jpg";
import { Card, CardContent } from "@/components/ui/card";

export interface Member {
  title: string;
  position: string;
  cover?: StaticImageData; // boş olabilsin
  objectPosition?: string;
}

// --- Card
const TeamCard = ({ cover, title, position, objectPosition }: Member) => {
  return (
    <Card
      className="
        bg-brand-white rounded-xl
        shadow-md shadow-gray-200/30
        border border-brand-gold/25
        overflow-hidden
        transform transition duration-300 ease-out
        hover:-translate-y-0.5 hover:shadow-lg
      "
    >
      <CardContent className="p-0">
        <div className="grid grid-rows-[72%_28%] aspect-[3/3.8]">
          <div className="relative w-full h-full">
            {cover ? (
              <>
                <Image
                  src={cover}
                  alt={title}
                  fill
                  className="object-cover"
                  style={{
                    objectPosition
                  }}
                  sizes="(max-width: 768px) 100vw, 240px"
                />
                {/* Daha koyu lacivert overlay */}
                <div className="absolute inset-0 bg-brand-navy/18" />
              </>
            ) : (
              <div className="absolute inset-0 bg-brand-cream" />
            )}
          </div>

          <div className="px-4 py-4 flex flex-col justify-center">
            <h3 className="text-base lg:text-lg font-semibold text-brand-navy">
              {title}
            </h3>
            <p className="text-gray-600 text-xs">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


// --- Data
const team = [
  {
    image: TeamMember1,
    name: "Ülkü Koçtürk",
    position: "Kurucu Avukat",
    objectPosition: "50% 25%",
  },
  {
    image: TeamMember7,
    name: "Hazar Koçtürk",
    position: "Kurucu Avukat",
    objectPosition: "50% 20%",
  },
  {
    image: TeamMember2,
    name: "Mehmet Şahin",
    position: "Kurucu Avukat",
    objectPosition: "50% 20%",
  },
  {
    image: TeamMember3,
    name: "Ayşegül Bulut Şahin",
    position: "Yönetici Avukat",
    objectPosition: "top",
  },
  {
    image: TeamMember4,
    name: "Beyza Arslan",
    position: "Avukat",
    objectPosition: "top",
  },
  {
    image: TeamMember6, 
    name: "Elif Bilal",
    position: "Avukat",
    objectPosition: "50% 15%",
  },
  {
    image: TeamMember5,
    name: "Arzu Deniz Kır",
    position: "Ofis Koordinatörü",
    objectPosition: "top",
  },
];

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Başlık reveal
        gsap.fromTo(
          Array.from(headingRef.current!.children),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );

        // Kart stagger reveal
        gsap.fromTo(
          ".team-card-item",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".team-cards-grid",
              start: "top 78%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-cream" id="team">
      <div className="mx-auto max-w-360 flex flex-col p-8 gap-y-10">
        <div ref={headingRef} className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-navy capitalize">Ekibimiz</h2>
          <p className="text-gray-700">
            Profesyonel ve deneyimli ekibimizle tanışın. Hukukun farklı alanlarında
            uzmanlaşmış avukatlarımız, müvekkillerimize en iyi hizmeti sunmak için
            burada.
          </p>
        </div>

        {/* mobil: 1 sütun | md: 2-2-2-1 | xl+: 3-3-1 */}
        <div className="flex flex-col gap-8 team-cards-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            {team.slice(0, 6).map((member) => (
              <div key={member.name} className="max-w-xs w-full team-card-item">
                <TeamCard
                  title={member.name}
                  position={member.position}
                  cover={member.image}
                  objectPosition={member.objectPosition}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="max-w-xs w-full team-card-item">
              <TeamCard
                title={team[6].name}
                position={team[6].position}
                cover={team[6].image}
                objectPosition={team[6].objectPosition}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
