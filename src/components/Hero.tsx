import { useState, useEffect } from "react";

export default function Hero({ onNavigate }: { onNavigate: (section: string) => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden pt-20 pb-32 transition-colors duration-300">
      {/* Dynamic radial gradient background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle at center, var(--color-neon-green) -200%, var(--color-forest) 30%, var(--color-background) 100%)"
        }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 py-[120px] text-center flex flex-col items-center">
        <div
          className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Subtle neon green badge */}
          <div className="inline-flex items-center gap-2 px-4 py-3 mb-10 bg-secondary/50 rounded-[4px] border border-border backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-neon-green shadow-[0_0_8px_var(--color-neon-green)] animate-pulse" />
            <span className="text-foreground text-[16px] font-[400] tracking-[0.72px]" style={{ fontFamily: "var(--font-body)" }}>Election Guide Platform</span>
          </div>

          <h1 className="text-[48px] sm:text-[70px] md:text-[96px] font-[330] leading-[0.96] tracking-tight text-foreground mb-8 max-w-4xl mx-auto" style={{ fontFamily: "var(--font-display)" }}>
            Your voice. Your vote.
            <br />
            <span className="text-foreground/80">Understand the process.</span>
          </h1>

          <p className="text-[20px] font-[500] leading-[1.40] tracking-[0.3px] text-muted-foreground max-w-2xl mx-auto mb-12" style={{ fontFamily: "var(--font-body)" }}>
            From constituency delimitation to the formation of the government — explore every step of how Indian elections work in an interactive, easy-to-follow format.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <button
              onClick={() => onNavigate("timeline")}
              className="btn-primary shadow-lg dark:shadow-neon-green/10"
            >
              Start Exploring
            </button>
            <a
              href="/assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Open Assistant ↗
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}
