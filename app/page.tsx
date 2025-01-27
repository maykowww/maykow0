import About from "@/components/About";
import { BackgroundEffect } from "@/components/background-effect";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <BackgroundEffect>
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </BackgroundEffect>
  );
}
