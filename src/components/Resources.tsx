import { ExternalLink, Globe, BookOpen, Users, Phone, Smartphone, Download } from "lucide-react";
import { resources } from "../data/electionData";

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Official Government": Globe,
  "Non-Partisan Organization": Users,
  "Educational Resource": BookOpen,
};


export default function Resources({ id }: { id?: string }) {
  return (
    <section id={id} className="py-[120px] bg-background transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-[80px]">
          <span className="inline-block px-4 py-2 mb-6 bg-secondary rounded-[4px] border border-border backdrop-blur-sm text-[16px] font-[400] tracking-[0.72px] text-foreground" style={{ fontFamily: "var(--font-body)" }}>
            RESOURCES
          </span>
          <h2 className="text-[32px] sm:text-[44px] md:text-[55px] font-[330] leading-[1.16] tracking-tight text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Official Resources
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-[500] leading-[1.40] tracking-[0.3px] text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Explore trusted sources for more information about the Indian election process, voter registration, and the ECI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {resources.map((resource, index) => {
            const TypeIcon = typeIcons[resource.type] || Globe;

            return (
              <div
                key={index}
                className="bg-card rounded-[20px] border border-border p-8 hover:shadow-shopify transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-[12px] bg-secondary border border-border flex items-center justify-center text-foreground group-hover:bg-neon-green group-hover:text-background transition-colors">
                    <TypeIcon className="w-7 h-7" />
                  </div>
                  <span className="text-[12px] font-[500] px-4 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground uppercase tracking-wider">
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-[360] text-foreground mb-3" style={{ fontFamily: "var(--font-display)" }}>{resource.title}</h3>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-muted-foreground leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>{resource.description}</p>

                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[16px] font-[500] text-neon-green hover:opacity-80 transition-all"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
        
        {/* Helpline & Apps Section */}
        <div className="mt-[80px] grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          <div className="bg-card rounded-[20px] border border-border p-8 shadow-shopify hover:border-neon-green/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-[22px] sm:text-[25px] md:text-[28px] font-[360] text-foreground" style={{ fontFamily: "var(--font-display)" }}>National Voter Helpline</h3>
            </div>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] text-muted-foreground mb-6" style={{ fontFamily: "var(--font-body)" }}>
              For any queries or grievances related to the election process, call the toll-free number:
            </p>
            <div className="flex items-center gap-4 p-4 bg-secondary rounded-[12px] border border-border">
              <span className="text-[26px] sm:text-[29px] md:text-[32px] font-[500] text-neon-green" style={{ fontFamily: "var(--font-display)" }}>1950</span>
              <span className="text-[14px] text-muted-foreground uppercase tracking-widest">(Toll-Free)</span>
            </div>
          </div>

          <div className="bg-card rounded-[20px] border border-border p-8 shadow-shopify hover:border-neon-green/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-[22px] sm:text-[25px] md:text-[28px] font-[360] text-foreground" style={{ fontFamily: "var(--font-display)" }}>Voter Helpline App</h3>
            </div>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] text-muted-foreground mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Download the official mobile app for easy access to electoral services on your smartphone.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.eci.citizen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary py-2 px-6 flex items-center gap-2 text-[14px]"
              >
                <Download className="w-4 h-4" />
                Play Store
              </a>
              <a 
                href="https://apps.apple.com/in/app/voter-helpline/id1456535001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary py-2 px-6 flex items-center gap-2 text-[14px]"
              >
                <Download className="w-4 h-4" />
                App Store
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-[120px] relative rounded-[32px] overflow-hidden bg-secondary border border-border p-8 sm:p-20 text-center">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at center, var(--color-neon-green) -200%, transparent 80%)"
          }} />
          
          <div className="relative z-10">
            <h3 className="text-[28px] sm:text-[40px] md:text-[55px] font-[330] leading-[1.1] text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Ready to Make Your Voice Heard?
            </h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-muted-foreground max-w-2xl mx-auto mb-10" style={{ fontFamily: "var(--font-body)" }}>
              Register to vote today on the official ECI portal and participate in shaping the future of the world's largest democracy.
            </p>
            <a
              href="https://voters.eci.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 px-10 py-5 text-[18px]"
            >
              Register via Voters Portal
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}
