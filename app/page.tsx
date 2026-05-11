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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-brand-gold focus:text-brand-navy focus:rounded focus:font-medium"
      >
        İçeriğe geç
      </a>
      <Navbar />
      <BackToTop />
      <main id="main-content">
        <HeroSection />
        <BlogSection />
        <TeamSection />
        <SendForm />
      </main>
      <FooterBlock />
    </>
  );
}
