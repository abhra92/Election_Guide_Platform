import { votingSteps, keyDates } from "../data/electionData";
import {
  ClipboardList,
  CheckSquare,
  Search,
  Send,
  PenLine,
  ShieldCheck,
  Calendar,
  Clock,
  Mail,
  CalendarCheck,
  Building,
  Landmark,
  Flag,
} from "lucide-react";

const stepIcons = [ClipboardList, CheckSquare, Search, Send, PenLine, ShieldCheck];
const dateIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  clock: Clock,
  mail: Mail,
  "calendar-check": CalendarCheck,
  building: Building,
  landmark: Landmark,
  flag: Flag,
};

export default function VotingSteps({ id }: { id?: string }) {
  return (
    <section id={id} className="py-[120px] bg-background transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-[80px]">
          <span className="inline-block px-4 py-2 mb-6 bg-secondary rounded-[4px] border border-border backdrop-blur-sm text-[16px] font-[400] tracking-[0.72px] text-foreground" style={{ fontFamily: "var(--font-body)" }}>
            HOW TO VOTE
          </span>
          <h2 className="text-[55px] font-[330] leading-[1.16] tracking-tight text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
            6 Steps to Cast Your Vote
          </h2>

          <p className="text-[20px] font-[500] leading-[1.40] tracking-[0.3px] text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Voting is your fundamental right. Follow these simple steps to make your voice heard in every election.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] mb-[120px]">
          {votingSteps.map((step, index) => {
            const StepIcon = stepIcons[index];

            return (
              <div
                key={index}
                className="relative bg-card rounded-[12px] border border-border p-[32px] shadow-shopify hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-[8px] flex items-center justify-center bg-secondary border border-border text-foreground group-hover:bg-neon-green group-hover:text-background transition-colors">
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[40px] font-[360] text-muted-foreground opacity-50" style={{ fontFamily: "var(--font-display)" }}>
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-[24px] font-[360] leading-[1.2] tracking-[0.32px] text-foreground mb-3" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
                <p className="text-[16px] font-[400] leading-[1.50] text-muted-foreground mb-6" style={{ fontFamily: "var(--font-body)" }}>{step.description}</p>

                <div className="pt-6 border-t border-border">
                  <h4 className="text-[14px] font-[500] text-neon-green uppercase tracking-[0.28px] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                    Helpful Tips
                  </h4>
                  <ul className="space-y-3">
                    {step.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3 text-[16px] font-[400] text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                        <span className="w-1.5 h-1.5 bg-neon-green rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_var(--color-neon-green)]" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>


        {/* Key Dates */}
        <div>
          <div className="text-center mb-[64px]">
            <h3 className="text-[40px] font-[330] leading-[1.16] tracking-tight text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>Key Election Dates</h3>
            <p className="text-[18px] font-[400] leading-[1.56] text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>Important milestones to mark on your calendar</p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]">
            {keyDates.map((item, index) => {
              const DateIcon = dateIcons[item.icon] || Calendar;
              return (
                <div
                  key={index}
                  className="bg-card rounded-[12px] border border-border p-[24px] shadow-shopify hover:bg-accent/5 transition-all hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 bg-secondary border border-border rounded-[8px] flex items-center justify-center mb-4">
                    <DateIcon className="w-6 h-6 text-foreground" />
                  </div>
                  <h4 className="text-[18px] font-[500] text-foreground mb-2" style={{ fontFamily: "var(--font-body)" }}>{item.event}</h4>
                  <p className="text-[14px] font-[400] leading-[1.50] text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>{item.timing}</p>
                </div>

              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
