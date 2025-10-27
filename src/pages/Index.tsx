import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Apps from "@/components/Apps";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Apps />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
