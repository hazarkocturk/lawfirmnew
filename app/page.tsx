import BackToTop from "@/components/shared/back-to-top";
import FooterBlock from "@/components/shared/footer";
import SendForm from "@/components/shared/form";
import  Navbar  from "@/components/shared/header";
import { HeroSection } from "@/components/shared/hero-section";
import BlogSection from "@/components/shared/skills";
import TeamSection from "@/components/shared/team";


export default function Home() {
  return (
    <>
    <Navbar />
    <BackToTop />
    <HeroSection />
    <BlogSection />
    <TeamSection />
    <SendForm />
    <FooterBlock />
    </>
  );
}
