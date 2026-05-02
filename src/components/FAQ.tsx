import { useState } from "react";
import { ChevronDown, HelpCircle, Search } from "lucide-react";
import { faqItems } from "../data/electionData";

const categories = ["All", ...Array.from(new Set(faqItems.map((f) => f.category)))];

export default function FAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id={id} className="py-[120px] bg-background transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-[80px]">
          <span className="inline-block px-4 py-2 mb-6 bg-secondary rounded-[4px] border border-border backdrop-blur-sm text-[16px] font-[400] tracking-[0.72px] text-foreground" style={{ fontFamily: "var(--font-body)" }}>
            FAQ
          </span>
          <h2 className="text-[32px] sm:text-[44px] md:text-[55px] font-[330] leading-[1.16] tracking-tight text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Common Questions
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-[500] leading-[1.40] tracking-[0.3px] text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Find answers to the most commonly asked questions about the Indian election process and voting.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-4 bg-background border border-border rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:border-neon-green focus:shadow-[0_0_0_1px_var(--color-neon-green)] transition-all"
            style={{ fontFamily: "var(--font-body)" }}
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-[14px] font-[500] transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-neon-green text-background shadow-[0_0_12px_var(--color-neon-green)]"
                  : "bg-secondary text-muted-foreground border border-border hover:border-neon-green hover:text-foreground"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-border rounded-2xl">
              <HelpCircle className="w-12 h-12 text-muted-foreground opacity-30 mx-auto mb-4" />
              <p className="text-muted-foreground">No questions found matching your search.</p>
            </div>
          ) : (
            filteredFAQs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-card rounded-[12px] border transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-neon-green bg-accent/10" : "border-border hover:bg-accent/5"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-[8px] flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen ? "bg-neon-green text-background" : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <span className="font-[500] text-[15px] sm:text-[16px] md:text-[18px] text-foreground pr-4" style={{ fontFamily: "var(--font-body)" }}>{item.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-neon-green" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 ml-14">
                      <span className="inline-block text-[12px] font-[500] text-neon-green bg-neon-green/10 rounded-full px-3 py-1 mb-4 border border-neon-green/20 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <p className="text-muted-foreground text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>

  );
}
