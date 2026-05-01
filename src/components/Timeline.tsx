import { useState } from "react";
import {
  Megaphone,
  Vote,
  Landmark,
  Flame,
  CheckCircle,
  ClipboardCheck,
  Building,
  Flag,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { timelineSteps } from "../data/electionData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  megaphone: Megaphone,
  vote: Vote,
  landmark: Landmark,
  campaign: Flame,
  "check-circle": CheckCircle,
  "clipboard-check": ClipboardCheck,
  building: Building,
  flag: Flag,
};

export default function Timeline({ id }: { id?: string }) {
  const [expandedStep, useState_number] = useState<number | null>(null);

  const toggleStep = (id: number) => {
    useState_number(expandedStep === id ? null : id);
  };

  return (
    <section id={id} className="py-[120px] bg-background transition-colors duration-300">

      <div className="max-w-[1024px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-[80px]">
          <span className="inline-block px-4 py-2 mb-6 bg-secondary rounded-[4px] border border-border backdrop-blur-sm text-[16px] font-[400] tracking-[0.72px] text-foreground" style={{ fontFamily: "var(--font-body)" }}>
            TIMELINE
          </span>
          <h2 className="text-[55px] font-[330] leading-[1.16] tracking-tight text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Indian Election Process
          </h2>

          <p className="text-[20px] font-[500] leading-[1.40] tracking-[0.3px] text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>

            Follow the journey from candidate announcements to inauguration day. 
            Click on any step to learn more details.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px] bg-border" />


          <div className="space-y-[32px]">
            {timelineSteps.map((step) => {
              const Icon = iconMap[step.icon] || Flag;
              const isExpanded = expandedStep === step.id;

              return (
                <div
                  key={step.id}
                  className={`relative pl-16 sm:pl-24 transition-all duration-300`}
                >
                  {/* Circle on timeline */}
                  <div
                    className={`absolute left-3 sm:left-[22px] top-6 w-8 h-8 sm:w-8 sm:h-8 rounded-full border-2 border-background flex items-center justify-center transition-all z-10 ${
                      isExpanded
                        ? `bg-neon-green border-none shadow-[0_0_12px_var(--color-neon-green)]`
                        : "bg-secondary border-border"
                    }`}
                  >

                    <span
                      className={`text-[12px] font-[500] ${
                        isExpanded ? "text-background" : "text-muted-foreground"
                      }`}

                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`bg-card rounded-[12px] border border-border transition-all duration-300 cursor-pointer shadow-shopify ${
                      isExpanded
                        ? "shadow-[0_0_0_2px_var(--color-neon-green)] bg-accent/10"
                        : "hover:bg-accent/5"
                    }`}

                    onClick={() => toggleStep(step.id)}
                  >
                    <div className="p-[24px] sm:p-[32px]">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div
                              className={`w-12 h-12 rounded-[8px] flex items-center justify-center transition-colors ${
                                isExpanded ? "bg-neon-green text-void" : "bg-secondary border border-border text-white"
                              }`}

                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <span className="text-[14px] font-[500] text-muted-foreground tracking-[0.28px] uppercase block mb-1" style={{ fontFamily: "var(--font-body)" }}>
                                Step {step.id} · {step.period}
                              </span>
                              <h3 className="text-[32px] font-[360] leading-[1.14] tracking-[0.32px] text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                                {step.title}
                              </h3>

                            </div>
                          </div>
                          <p className="text-[18px] font-[400] leading-[1.56] text-muted-foreground ml-0 sm:ml-[64px]" style={{ fontFamily: "var(--font-body)" }}>

                            {step.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0 mt-2">
                          {isExpanded ? (
                            <ChevronUp className="w-6 h-6 text-neon-green" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-muted-foreground" />

                          )}
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="mt-8 pt-6 border-t border-border ml-0 sm:ml-[64px]">
                          <h4 className="text-[16px] font-[420] text-foreground mb-4" style={{ fontFamily: "var(--font-body)" }}>
                            Key Details:
                          </h4>
                          <ul className="space-y-3">
                            {step.details.map((detail, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-[16px] font-[400] leading-[1.50] text-muted-foreground"
                                style={{ fontFamily: "var(--font-body)" }}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0 mt-2`}>
                                </span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
