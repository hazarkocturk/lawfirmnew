import Image from "next/image";
import TeamMember1 from "@/public/ulkukocturk.jpeg";
import TeamMember2 from "@/public/mehmetsahin.jpeg";
import TeamMember3 from "@/public/aysegulbulutsahin.jpeg";
import TeamMember4 from "@/public/beyzaarslan.jpeg";
import TeamMember5 from "@/public/arzudenizkir.jpeg";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { StaticImageData } from "next/image";

export interface Member {
  title: string;
  position: string;
  cover: StaticImageData;
}
// --- Card
const TeamCard = ({ cover, title, position }: Member) => {
    return (
        <Card
        className="
          bg-white rounded-2xl dark:bg-gray-900 
          shadow-lg shadow-gray-200/50 dark:shadow-transparent 
          border border-gray-200/50 dark:border-gray-800/50 
          overflow-hidden
          transform transition-transform duration-300 ease-out
          hover:scale-[1.03] hover:shadow-xl
        "
      >
        <CardContent className="grid grid-rows-[80%_20%] md:aspect-[3/5] aspect-[3/4]">
          <div className="relative w-full h-full pb-10 sm:pb-0">
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover object-top bg-gray-100 dark:bg-gray-900"
            />
          </div>
  
          <div className="p-6 flex flex-col justify-center">
            <h3 className="lg:text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{position}</p>
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    image: TeamMember2,
    name: "Mehmet Şahin",
    position: "Kurucu Avukat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    image: TeamMember3,
    name: "Ayşegül Bulut Şahin",
    position: "Avukat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    image: TeamMember4,
    name: "Beyza Arslan",
    position: "Avukat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    image: TeamMember5,
    name: "Arzu Deniz Kır",
    position: "Ofis Koordinatörü",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
];

const TeamSection = () => {
  return (
    <section className="mx-auto p-8 max-w-[1440px]" id="team">
      <div className="flex flex-col gap-y-6">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold dark:text-white capitalize">
          Çalışanlarımız
          </h1>
          <p className="dark:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            perferendis eos amet eum repudiandae aspernatur mollitia quos
            consectetur voluptatibus pariatur
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <TeamCard
              title={member.name}
              cover={member.image}
              key={member.name}
              {...member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
