import Hero from "@/components/Hero";
import FloatingChat from "@/components/FloatingChat";
import About from "@/components/About";
import Stats from "@/components/Stats";
import SoftwareSkills from "@/components/Skills";
import MainProject from "@/components/MainProject";
import Services from "./Services/page";
import ContactSection from "./Contact/page";
import ClientReview from "@/components/ClientReview";


export default function Home() {
  return (
    <main>
      <Hero />
      <FloatingChat />
      <About />
      <Stats />
      <SoftwareSkills />
      <MainProject />
      <Services />
      <ClientReview />
      <ContactSection />
    </main>
  );
}

