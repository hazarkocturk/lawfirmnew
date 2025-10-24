import { Building, Building2, Factory, HardHat, House, KeyRound, PenTool, Scale, Speech, Stethoscope, UserLock, Users, X } from "lucide-react";
import Image from "next/image";
import { JSX } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

import { StaticImageData } from "next/image";

export interface Post {
    icon: JSX.Element;
    title: string;
    description: string;
    cover: StaticImageData;
}
// --- Card
const BlogCard = ({ cover, icon, title, description }: Post) => {
  return (
    <div
    className="
      bg-white rounded-2xl dark:bg-gray-900 
      shadow-lg shadow-gray-200/50 dark:shadow-transparent 
      border border-gray-200/50 dark:border-gray-800/50 
      overflow-hidden
      transform transition-transform duration-300 ease-out
      hover:scale-[1.03] hover:shadow-xl
    "
  >
      {/* {cover ? ( */}
        <Image
          src={cover}
          alt={title}
          width={650}
          height={700}
          className="w-full lg:aspect-[5/3] aspect-[6/4]  object-cover bg-gray-100 dark:bg-gray-900 rounded-t-2xl"
        />
    {/* //   ) : null } */}
      <div className="relative lg:p-6 lg:pt-10 p-4 pt-8">
        <div className="absolute right-4 -top-6 lg:-top-8  bg-pink-600 p-2 lg:p-4 rounded-md text-white flex">
          {icon}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="lg:text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

// --- Data
const posts = [
  { icon: <Speech />, title: "Danışmanlık", description: "Hukuki süreçlerde yol gösterici olarak, müvekkillerimize profesyonel danışmanlık hizmetleri veriyoruz.", cover: imgDanismanlik },
  { icon: <PenTool />, title: "Arabuluculuk", description: "Hukuki uyuşmazlıkların çözümünde hızlı ve etkin bir yöntem olan arabuluculuk hizmeti sunuyoruz.", cover: img_arabul },
  { icon: <Scale />, title: "Ceza Hukuku", description: "Şikayet ve suç duyurusu başvuruları... temsil hizmeti sunuyoruz.", cover: img_ceza },
  { icon: <HardHat />, title: "İş ve Sosyal Güvenlik Hukuku", description: "İş kazası tazminatları, işçilik alacakları, işe iade... danışmanlık sunuyoruz." , cover: img_ishukuku},
  { icon: <House />, title: "Gayrimenkul Hukuku", description: "Alım satım, kiralama, tapu iptal/tescil... hizmetleri sunuyoruz." , cover: img_gayrimenkul},
  { icon: <Building />, title: "Kat Mülkiyeti Hukuku", description: "Apartman/site yönetimi uyuşmazlıklarında çözüm odaklı danışmanlık.", cover: img_katmulkiyeti },
  { icon: <Building2 />, title: "Kooperatifler Hukuku", description: "Kuruluş, yönetim ve işleyişe ilişkin danışmanlık ve uyuşmazlık çözümü." , cover: img_kooperatif},
  { icon: <Factory />, title: "Şirketler Hukuku", description: "Kuruluş, birleşme/devralma gibi ticari işlemlerde hukuki destek.", cover: img_sirketler},
  { icon: <UserLock />, title: "Tüketici Hukuku", description: "Ayıplı mal/hizmetler, tüketici hakları davaları..." , cover: img_tuketici},
  { icon: <Stethoscope />, title: "Sağlık Hukuku", description: "Hekim ve hasta kaynaklı uyuşmazlıklara ilişkin danışmanlık." , cover: img_saglik},
  { icon: <Users />, title: "Aile Hukuku", description: "Boşanma, velayet, nafaka, ziynet, mal rejimi, soybağı..." , cover: img_aile},
  { icon: <KeyRound />, title: "Kişisel Verilerin Korunması Hukuku", description: "KVKK başvuruları, envanter ve metinler, sözleşmelerin revizesi." , cover: img_kvkk},
];


function sampleRandom(arr: Post[], n: number): Post[] {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, n);
}

const BlogSection = () => {
  const selected = sampleRandom(posts, 4); 

  return (
    <div className="bg-gray-50 dark:bg-background">
    <section className="mx-auto p-8 max-w-[1440px]" id="skills">
      <div className="flex flex-col gap-y-6">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold dark:text-white capitalize">Çalışma Alanlarımız</h1>
          <p className="dark:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit perferendis eos amet eum repudiandae aspernatur mollitia quos consectetur voluptatibus pariatur
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {selected.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>

        <div className="flex justify-center">
        <Dialog>
        <DialogTrigger asChild>
          <Button className="px-6 cursor-pointer items-center h-12 rounded-3xl text-pink-700 border border-gray-100 dark:border-gray-800 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-700 duration-100 ease-linear flex justify-center w-full sm:w-auto">See More</Button>
        </DialogTrigger>
        <DialogContent >
          <DialogHeader className="flex w-full justify-center items-center">
            <DialogTitle className="text-3xl font-bold dark:text-white capitalize">Çalışma Alarımız</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer"><X size={50}/></Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>

    </Dialog>
        </div>
      </div>
    </section>
    </div>
  );
};

export default BlogSection;
