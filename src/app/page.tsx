import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";
import LoadingScreen from "@/components/ui/LoadingScreen";

import { Hero } from "@/components/sections/Hero";
import { Education } from "@/components/sections/Education";
import { AcademicHighlights } from "@/components/sections/AcademicHighlights";
import { Skills } from "@/components/sections/Skills";
import { CompetitiveProgramming } from "@/components/sections/CompetitiveProgramming";
import { Projects } from "@/components/sections/Projects";
import { GitHub } from "@/components/sections/GitHub";
import { CurrentFocus } from "@/components/sections/CurrentFocus";
import { Leadership } from "@/components/sections/Leadership";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen overflow-x-hidden selection:bg-primary/30 selection:text-white">
      {/* Background Aurora Effect */}
      <div className="aurora-bg" />
      <div className="absolute inset-0 grid-bg opacity-30 z-0 pointer-events-none" />

      {/* Global Elements */}
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      {/* Page Content */}
      <div className="relative z-10 flex flex-col gap-0 md:gap-12">
        <Hero />
        <Education />
        <AcademicHighlights />
        <Skills />
        <CompetitiveProgramming />
        <Projects />
        <GitHub />
        <CurrentFocus />
        <Leadership />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
