import Image, { StaticImageData } from "next/image";
import TeamMember1 from "@/public/ulkukocturk.jpeg";
import TeamMember2 from "@/public/mehmetsahin.jpeg";
import TeamMember3 from "@/public/aysegulbulutsahin.jpeg";
import TeamMember4 from "@/public/beyzaarslan.jpeg";
import TeamMember5 from "@/public/arzudenizkir.jpeg";
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
    image: undefined, // boşsa undefined bırak
    name: "Elif Bilal",
    position: "Avukat",
  },
  {
    image: TeamMember5,
    name: "Arzu Deniz Kır",
    position: "Ofis Koordinatörü",
    objectPosition: "top",
  },
];

const TeamSection = () => {
  return (
    <section className="mx-auto p-8 max-w-360 bg-brand-cream" id="team">
      <div className="flex flex-col gap-y-10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-navy capitalize">Ekibimiz</h2>
          <p className="text-gray-700">
            Profesyonel ve deneyimli ekibimizle tanışın. Hukukun farklı alanlarında
            uzmanlaşmış avukatlarımız, müvekkillerimize en iyi hizmeti sunmak için
            burada.
          </p>
        </div>

        {/* 1-2-2-1 düzeni */}
        <div className="flex flex-col gap-8">
          {/* ROW 1 – 1 kart */}
          <div className="flex justify-center">
            <div className="max-w-xs w-full">
              <TeamCard
                title={team[0].name}
                position={team[0].position}
                cover={team[0].image}
                objectPosition={team[0].objectPosition}
              />
            </div>
          </div>

          {/* ROW 2 – 2 kart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[team[1], team[2]].map((member) => (
              <div key={member.name} className="max-w-xs w-full mx-auto">
                <TeamCard
                  title={member.name}
                  position={member.position}
                  cover={member.image}
                  objectPosition={member.objectPosition}
                />
              </div>
            ))}
          </div>

          {/* ROW 3 – 2 kart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[team[3], team[4]].map((member) => (
              <div key={member.name} className="max-w-xs w-full mx-auto">
                <TeamCard
                  title={member.name}
                  position={member.position}
                  cover={member.image}
                  objectPosition={member.objectPosition}
                />
              </div>
            ))}
          </div>

          {/* ROW 4 – 1 kart */}
          <div className="flex justify-center">
            <div className="max-w-xs w-full">
              <TeamCard
                title={team[5].name}
                position={team[5].position}
                cover={team[5].image}
                objectPosition={team[5].objectPosition}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
