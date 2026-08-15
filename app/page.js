import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CapabilitiesGrid from "../components/CapabilitiesGrid";
import CapabilityExplorer from "../components/CapabilityExplorer";
import SectorGrid from "../components/SectorGrid";
import ProjectShowcase from "../components/ProjectShowcase";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-white">
      <Navbar />
      <Hero />
      <CapabilitiesGrid />
      <CapabilityExplorer 
        title="Autonomous Systems" 
        categoryTag="CORE CAPABILITIES" 
      />
      <SectorGrid />
      <ProjectShowcase />
      <Footer />
    </main>
  );
}