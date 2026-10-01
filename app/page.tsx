import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import QuickScan from "@/app/components/QuickScan";
import ImpactWall from "@/app/components/ImpactWall";
import FeaturedCaseStudies from "@/app/components/FeaturedCaseStudies";
import Experience from "@/app/components/Experience";
import Builds from "@/app/components/Builds";
import HowIThink from "@/app/components/HowIThink";
import NowSection from "@/app/components/NowSection";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickScan />
        <ImpactWall />
        <FeaturedCaseStudies />
        <Experience />
        <Builds />
        <HowIThink />
        <NowSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
