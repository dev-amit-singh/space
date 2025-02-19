import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Footer from "@/components/main/Footer";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Skills/>
        <Encryption/>
        <Projects/>
        <Footer/>
        
      </div>
    </main>
  );
}
