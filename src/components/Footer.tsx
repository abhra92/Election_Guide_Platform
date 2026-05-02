import { Heart } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, TwitterIcon, LinkedinIcon, Mail01Icon, Globe02Icon } from "@hugeicons/core-free-icons";

export default function Footer() {
  const handleLinkedInClick = () => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'linkedin_click', {
        event_category: 'Social Media',
        event_label: 'LinkedIn Button',
        value: 1,
      });
    }
  };

  return (

    <footer className="bg-background border-t border-border py-[80px] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-[60px]">
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-[360] text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>Election Guide</h4>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              An interactive educational resource helping Indian citizens understand the democratic process and their voting rights.
            </p>
          </div>
          
          <div>
            <h4 className="text-[13px] sm:text-[14px] font-[500] text-foreground uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-[14px] sm:text-[15px] md:text-[16px] text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
              <li><a href="https://eci.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">ECI Official</a></li>
              <li><a href="https://voters.eci.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">Voter Portal</a></li>
              <li><a href="https://results.eci.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">Election Results</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] sm:text-[14px] font-[500] text-foreground uppercase tracking-widest mb-6">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.abhrajoyti.me/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-neon-green hover:text-background transition-all duration-300 shadow-shopify" title="Website">
                <HugeiconsIcon icon={Globe02Icon} size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-neon-green hover:text-background transition-all duration-300 shadow-shopify" title="GitHub">
                <HugeiconsIcon icon={GithubIcon} size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-neon-green hover:text-background transition-all duration-300 shadow-shopify" title="Twitter / X">
                <HugeiconsIcon icon={TwitterIcon} size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-neon-green hover:text-background transition-all duration-300 shadow-shopify" 
                title="LinkedIn"
                onClick={handleLinkedInClick}
              >
                <HugeiconsIcon icon={LinkedinIcon} size={20} />
              </a>

              <a href="mailto:contact@abhrajoyti.me" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-neon-green hover:text-background transition-all duration-300 shadow-shopify" title="Email">
                <HugeiconsIcon icon={Mail01Icon} size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[13px] sm:text-[14px] font-[500] text-foreground uppercase tracking-widest mb-6">Disclaimer</h4>
            <p className="text-[13px] sm:text-[14px] text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Educational resource for informational purposes. Official data is available at the ECI website.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-muted-foreground flex items-center gap-2" style={{ fontFamily: "var(--font-body)" }}>
              Developed by <a href="https://www.abhrajoyti.me/" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:underline font-[500]">Abhrajyoti</a>
            </p>
            <p className="text-[12px] text-muted-foreground/60 flex items-center gap-1.5" style={{ fontFamily: "var(--font-body)" }}>
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Indian Democracy
            </p>
          </div>
          <p className="text-[14px] text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} Indian Election Guide.
          </p>
        </div>
      </div>
    </footer>
  );
}
