import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import FeaturedBuilds from "@/app/components/FeaturedBuilds";
import Experiments from "@/app/components/Experiments";
import Skills from "@/app/components/Skills";
import Blog from "@/app/components/Blog";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedBuilds />
        <Experiments />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
