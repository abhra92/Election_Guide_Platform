import { useState, useEffect } from "react";
import { Menu, X, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import VotingSteps from "../components/VotingSteps";
import Quiz from "../components/Quiz";
import FAQ from "../components/FAQ";
import Resources from "../components/Resources";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
import VoterChecklist from "../components/VoterChecklist";
import { ThemeToggle } from "../components/ThemeToggle";

const navItems = [
  { id: "timeline", label: "Timeline" },
  { id: "voting", label: "Guide" },
  { id: "checklist", label: "Checklist" },
  { id: "quiz", label: "Quiz" },
  { id: "faq", label: "FAQ" },
  { id: "resources", label: "Resources" },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowBackToTop(window.scrollY > 500);

      const sections = navItems.map((item) => item.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  const handleNavigate = (section: string) => {
    setTimeout(() => scrollToSection(section), 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-[64px]">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="font-[500] text-[18px] tracking-[0.72px]" style={{ fontFamily: "var(--font-display)" }}>
                The Indian Election Guide
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[16px] lg:text-[18px] font-[500] tracking-[0.72px] transition-colors ${
                    activeSection === item.id
                      ? "text-neon-green"
                      : "text-foreground hover:text-muted-foreground"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Assistant Link */}
              <Link
                to="/assistant"
                className="text-[16px] lg:text-[18px] font-[500] tracking-[0.72px] text-foreground hover:text-neon-green transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Assistant
              </Link>
              
              <div className="flex items-center gap-4 ml-4">
                <ThemeToggle />
                <a
                  href="https://voters.eci.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2 px-4 text-[14px]"
                >
                  Register
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-foreground hover:text-neon-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green rounded-md"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border h-screen overflow-y-auto animate-in slide-in-from-top duration-300">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-4 text-[18px] font-[500] text-muted-foreground hover:text-foreground border-b border-border last:border-0 transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.label}
                </button>
              ))}
              {/* Assistant Link - Mobile */}
              <Link
                to="/assistant"
                className="block w-full text-left py-4 text-[18px] font-[500] text-neon-green hover:text-neon-green/80 border-b border-border transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Assistant
              </Link>
              <a
                href="https://voters.eci.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center py-4 text-[16px] mt-8"
              >
                Register to Vote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero onNavigate={handleNavigate} />
        <Timeline id="timeline" />
        <VotingSteps id="voting" />
        <VoterChecklist id="checklist" />
        <Quiz id="quiz" />
        <FAQ id="faq" />
        <Resources id="resources" />
      </main>

      <Footer />

      {/* Chat Bot Assistant */}
      <ChatBot />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-foreground text-background rounded-full shadow-shopify hover:opacity-90 transition-all flex items-center justify-center z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
