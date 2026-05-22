import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturedProject from "@/components/FeaturedProject";
import LocationAdvantages from "@/components/LocationAdvantages";
import UnitAvailability from "@/components/UnitAvailability";
import ProjectDetails from "@/components/ProjectDetails";
import SimulationTable from "@/components/SimulationTable";
import Requirements from "@/components/Requirements";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturedProject />
        <LocationAdvantages />
        <UnitAvailability />
        <ProjectDetails />
        <SimulationTable />
        <Requirements />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
