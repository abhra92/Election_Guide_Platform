import { CheckCircle2, ClipboardList, Info } from "lucide-react";
import { checklistData } from "../data/electionData";

export default function VoterChecklist({ id }: { id?: string }) {
  return (
    <section id={id} className="py-[120px] bg-void transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-[80px]">
          <span 
            className="inline-block px-4 py-2 mb-6 bg-secondary rounded-[4px] border border-border backdrop-blur-sm text-[16px] font-[400] tracking-[1.54px] text-foreground uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Checklist
          </span>
          <h2 
            className="text-[55px] font-[330] leading-[1.00] tracking-tight text-foreground mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Voter's Checklist
          </h2>
          <p 
            className="text-[20px] font-[500] leading-[1.40] tracking-[0.3px] text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ensure you're fully prepared for the democratic process. 
            Tick off these essential steps to make your voice count.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {checklistData.map((category, idx) => (
            <div 
              key={idx}
              className="bg-card border border-dark-border rounded-[12px] p-8 shadow-shopify hover:border-neon-green/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green group-hover:bg-neon-green group-hover:text-void transition-colors duration-300">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <h3 
                  className="text-[24px] font-[400] tracking-[0.36px] text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {category.category}
                </h3>
              </div>

              <ul className="space-y-6">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-neon-green" />
                    </div>
                    <p 
                      className="text-[16px] font-[400] leading-[1.50] text-muted-foreground"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-forest border border-dark-border rounded-[12px] flex flex-col md:flex-row items-center gap-6 shadow-shopify">
          <div className="w-14 h-14 rounded-full bg-void border border-dark-border flex items-center justify-center text-neon-green flex-shrink-0">
            <Info className="w-6 h-6" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 
              className="text-[18px] font-[500] text-foreground mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pro Tip: Carry your EPIC card!
            </h4>
            <p 
              className="text-[16px] text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              While other IDs are valid, the Electoral Photo Identity Card (EPIC) makes the verification process much faster at the polling booth.
            </p>
          </div>
          <a 
            href="https://voters.eci.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Check Voter List
          </a>
        </div>
      </div>
    </section>
  );
}
