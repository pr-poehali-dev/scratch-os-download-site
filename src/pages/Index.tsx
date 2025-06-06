import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Download from "@/components/Download";
import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Gallery />
      <Download />
    </div>
  );
};

export default Index;
