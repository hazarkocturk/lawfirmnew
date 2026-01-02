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
}

// --- Card
const TeamCard = ({ cover, title, position }: Member) => {
  return (
    <Card
      className="
        bg-brand-white rounded-2xl
        shadow-lg shadow-gray-200/40
        border border-brand-gold/20
        overflow-hidden
        transform transition duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      <CardContent className="p-0">
        <div className="grid grid-rows-[80%_20%] md:aspect-3/5 aspect-3/4">
          <div className="relative w-full h-full">
            {cover ? (
              <>
                <Image
                  src={cover}
                  alt={title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
                {/* hafif lacivert overlay (fotoğrafı kurumsallaştırır) */}
                <div className="absolute inset-0 bg-brand-navy/5" />
              </>
            ) : (
              <div className="absolute inset-0 bg-brand-cream" />
            )}
          </div>

          <div className="p-6 flex flex-col justify-center">
            <h3 className="lg:text-xl font-semibold text-brand-navy">{title}</h3>
            <p className="text-gray-600 text-sm">{position}</p>
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
  },
  {
    image: TeamMember2,
    name: "Mehmet Şahin",
    position: "Kurucu Avukat",
  },
  {
    image: TeamMember3,
    name: "Ayşegül Bulut Şahin",
    position: "Yönetici Avukat",
  },
  {
    image: TeamMember4,
    name: "Beyza Arslan",
    position: "Avukat",
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
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
