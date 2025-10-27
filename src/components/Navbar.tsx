import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "w-[95%] md:w-[90%]" : "w-[98%] md:w-[95%]"
      }`}
    >
      <div
        className={`glass-effect rounded-2xl px-6 py-4 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">M</span>
            </div>
            <span className="text-xl font-bold gradient-text">MyiPhoneApps</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/70 hover:text-foreground hover:bg-foreground/5 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("apps")}
              className="text-foreground/70 hover:text-foreground hover:bg-foreground/5 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/70 hover:text-foreground hover:bg-foreground/5 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              About
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="premium"
              size="sm"
              onClick={() => {
                const element = document.getElementById("apps");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Apps
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
