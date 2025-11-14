import ContentSection from "@/components/LocalComp/content-three";
import FAQs from "@/components/LocalComp/faqs-section-two";
import Features from "@/components/LocalComp/features-4";
import FooterSection from "@/components/LocalComp/footer";
import GradualBlurMemo from "@/components/LocalComp/GradualBlur";
import { HeroHeader } from "@/components/LocalComp/header";
import HeroSection from "@/components/LocalComp/hero-section";
import K2XS from "@/components/LocalComp/k2xs";
import { LogoCloud } from "@/components/LocalComp/logo-cloud";

export default function Home() {
  return (
    <div>
      <GradualBlurMemo/>
      <HeroHeader />
        <HeroSection />
        <LogoCloud/>
        <Features/>
        <ContentSection/>
        <FAQs/>
        <FooterSection/>
        <K2XS/>
    </div>
  );
}
