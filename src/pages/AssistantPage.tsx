import { useState, useCallback } from "react";
import { Menu, X, ArrowLeft} from "lucide-react";
import LeftPanel from "../components/LeftPanel";
import ChatPanel from "../components/ChatPanel";
import { topics } from "../data/assistantData";
import { Button } from "../components/ui";
import { ThemeToggle } from "../components/ThemeToggle";
import { Link } from "react-router-dom";

export default function AssistantPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [chatCount, setChatCount] = useState(1);
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false);

  const handleSelectTopic = useCallback((id: string) => {
    setSelectedTopic(id);
    setMobilePanelOpen(false);
  }, []);

  const handleChatCountChange = useCallback((count: number) => {
    setChatCount(count);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* ─── Header ───────────────────────────────────────── */}
      <header className="flex-shrink-0 border-b border-border bg-background/95 backdrop-blur-sm z-30">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="w-9 h-9 rounded-xl bg-secondary border border-border flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            {/* <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-sm">
              <Vote className="w-5 h-5 text-white" />
            </div> */}
            <div>
              <h1 className="text-base font-bold text-foreground leading-tight">
                Election Guide Assistant
              </h1>
              <p className="text-[11px] text-muted-foreground leading-tight">
                Understand voting step-by-step
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Indian Election Process
            </div>
            <ThemeToggle />
            {/* Mobile menu toggle */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobilePanelOpen(!mobilePanelOpen)}
            >
              {mobilePanelOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* ─── Main Content ─────────────────────────────────── */}
      <main className="flex-1 overflow-hidden">
        <div className="h-full w-full max-w-6xl mx-auto p-2 sm:p-4 lg:p-6 flex gap-2 sm:gap-4 lg:gap-6">
          {/* Left Panel - Desktop (always visible) */}
          <div className="hidden lg:block w-80 flex-shrink-0 h-full">
            <LeftPanel
              topics={topics}
              selectedTopic={selectedTopic}
              onSelectTopic={handleSelectTopic}
              chatCount={chatCount}
            />
          </div>

          {/* Left Panel - Mobile (slide over) */}
          {mobilePanelOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setMobilePanelOpen(false)}
              />
              <div className="fixed inset-y-0 left-0 w-[280px] z-50 p-3 pt-16 lg:hidden animate-fade-in bg-background">
                <LeftPanel
                  topics={topics}
                  selectedTopic={selectedTopic}
                  onSelectTopic={handleSelectTopic}
                  chatCount={chatCount}
                />
              </div>
            </>
          )}

          {/* Right Panel - Chat */}
          <div className="flex-1 min-w-0 h-full">
            <div className="h-full bg-card border-0 sm:border border-border sm:rounded-xl shadow-none sm:shadow-sm overflow-hidden">
              <ChatPanel
                topics={topics}
                selectedTopic={selectedTopic}
                onChatCountChange={handleChatCountChange}
              />
            </div>
          </div>
        </div>
      </main>

      {/* ─── Footer ───────────────────────────────────────── */}
      <footer className="flex-shrink-0 border-t border-border bg-background/95 py-2 px-4 text-center">
        <p className="text-[10px] text-muted-foreground">
           Election Guide Assistant — Educational resource for Indian citizens • For official info visit{" "}
          <a href="https://eci.gov.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
            eci.gov.in
          </a>
        </p>
      </footer>
    </div>
  );
}
