import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import About from "@/components/home/About";
import ExperienceEducation from "@/components/home/ExperienceEducation";
import Technologies from "@/components/home/Technologies";
import CurrentlyBuilding from "@/components/home/CurrentlyBuilding";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <About />
      <ExperienceEducation />
      <Technologies />
      <CurrentlyBuilding />
      <Contact />
    </main>
  );
}
