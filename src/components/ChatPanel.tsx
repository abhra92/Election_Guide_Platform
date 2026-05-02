import { useState, useRef, useEffect } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
  Send,
  Bot,
  User,
  ListChecks,
  CalendarDays,
  Lightbulb,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import { Card, CardContent } from "./ui";
import { Button } from "./ui";
import { Input } from "./ui";
import { ScrollArea } from "./ui";
import { Badge } from "./ui";
import { Tabs } from "./ui";
import { Skeleton } from "./ui";
import { Stepper } from "./ui";
import { cn } from "../utils/cn";
import { type TopicData, getFreeTextResponse } from "../data/assistantData";

/* ─── Types ─────────────────────────────────────────────── */
interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  topicId?: string;
  timestamp: Date;
}

interface ChatPanelProps {
  topics: TopicData[];
  selectedTopic: string | null;
  onChatCountChange: (count: number) => void;
}

/* ─── Markdown-lite renderer ────────────────────────────── */
function RenderText({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="h-2" />;
        
        // Headings
        if (trimmed.startsWith("### ")) {
          return <h4 key={i} className="font-bold text-sm mt-2">{trimmed.slice(4)}</h4>;
        }
        if (trimmed.startsWith("## ")) {
          return <h3 key={i} className="font-bold text-base mt-3">{trimmed.slice(3)}</h3>;
        }
        
        // Bullet points
        if (trimmed.startsWith("• ") || trimmed.startsWith("* ")) {
          const content = trimmed.slice(2);
          return (
            <div key={i} className="flex items-start gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-current mt-1.5 flex-shrink-0 opacity-40" />
              <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(content) }} />
            </div>
          );
        }
        
        // Numbered list
        const numMatch = trimmed.match(/^(\d+)\.\s/);
        if (numMatch) {
          const content = trimmed.slice(numMatch[0].length);
          return (
            <div key={i} className="flex items-start gap-2 text-sm">
              <span className="text-xs font-bold text-muted-foreground mt-0.5 flex-shrink-0">{numMatch[1]}.</span>
              <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(content) }} />
            </div>
          );
        }
        
        // Regular paragraph
        return (
          <p key={i} className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(trimmed) }} />
        );
      })}
    </div>
  );
}

function formatInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/`(.+?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">$1</code>');
}

/* ─── Response Card with Tabs ───────────────────────────── */
function TopicResponseCard({ topic }: { topic: TopicData }) {
  const [activeTab, setActiveTab] = useState("steps");
  const [currentStep, setCurrentStep] = useState(0);

  const tabConfig = [
    { id: "steps", label: "Steps", icon: <ListChecks className="w-3.5 h-3.5" /> },
    { id: "timeline", label: "Timeline", icon: <CalendarDays className="w-3.5 h-3.5" /> },
    { id: "tips", label: "Tips", icon: <Lightbulb className="w-3.5 h-3.5" /> },
  ];

  return (
    <Card className="overflow-hidden border-border animate-fade-in">
      {/* Stepper */}
      <div className="px-3 sm:px-5 pt-4 sm:pt-5 pb-2 sm:pb-3 bg-muted/30">
        <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-2 hidden sm:block">Progress</p>
        <Stepper steps={topic.stepperSteps} currentStep={currentStep} />
      </div>

      {/* Tabs */}
      <Tabs tabs={tabConfig} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      <div className="p-3 sm:p-5">
        {activeTab === "steps" && (
          <div className="space-y-2 sm:space-y-3">
            {topic.steps.map((step, i) => (
              <div
                key={i}
                className={cn(
                  "flex gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg transition-all cursor-pointer",
                  i === currentStep
                    ? "bg-primary/5 border border-primary/20"
                    : "hover:bg-muted/50"
                )}
                onClick={() => setCurrentStep(i)}
              >
                <div
                  className={cn(
                    "w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold flex-shrink-0 border-2 transition-colors",
                    i < currentStep
                      ? "bg-primary border-primary text-primary-foreground"
                      : i === currentStep
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground"
                  )}
                >
                  {i < currentStep ? "✓" : i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className={cn("text-sm font-medium", i === currentStep && "text-primary")}>
                    {step.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="flex-1 sm:flex-none"
              >
                Prev
              </Button>
              <Button
                size="sm"
                onClick={() => setCurrentStep(Math.min(topic.steps.length - 1, currentStep + 1))}
                disabled={currentStep === topic.steps.length - 1}
                className="flex-1 sm:flex-none"
              >
                {currentStep === topic.steps.length - 1 ? "Done ✓" : "Next"}
                {currentStep < topic.steps.length - 1 && <ChevronRight className="w-3 h-3 ml-1" />}
              </Button>
            </div>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="relative pl-5 sm:pl-6">
            <div className="absolute left-2 top-1 bottom-1 w-px bg-border" />
            <div className="space-y-3 sm:space-y-4">
              {topic.timeline.map((entry, i) => (
                <div key={i} className="relative flex gap-2 sm:gap-3 animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="absolute -left-[13px] sm:-left-[14px] top-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-background border-2 border-primary" />
                  <div>
                    <Badge variant="secondary" className="text-[10px] mb-0.5 sm:mb-1">{entry.period}</Badge>
                    <p className="text-sm text-foreground">{entry.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tips" && (
          <div className="space-y-2">
            {topic.tips.map((tip, i) => (
              <div
                key={i}
                className="flex items-start gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-lg bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 animate-fade-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-foreground leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

/* ─── Loading Skeleton ──────────────────────────────────── */
function LoadingSkeleton() {
  return (
    <div className="flex gap-2 sm:gap-3 animate-fade-in">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
        <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
      </div>
      <Card className="flex-1 max-w-[85%] sm:max-w-lg">
        <CardContent className="p-3 sm:p-4 space-y-2 sm:space-y-3">
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-6 sm:h-8 w-full rounded-lg" />
          <div className="flex gap-2">
            <Skeleton className="h-3 w-1/3" />
            <Skeleton className="h-3 w-1/4" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ─── Main ChatPanel ────────────────────────────────────── */
export default function ChatPanel({ topics, selectedTopic, onChatCountChange }: ChatPanelProps) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Namaste! 🙏 Welcome to the **Election Guide Assistant**.\n\nI'm here to help you understand India's election process step by step.\n\n**You can:**\n• Click a topic on the left to explore\n• Type a question below\n• Ask about **EVM**, **VVPAT**, **NOTA**, **EPIC**, and more\n\nLet's get started! What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Notify parent of message count
  useEffect(() => {
    onChatCountChange(messages.length);
  }, [messages.length, onChatCountChange]);

  // Handle topic selection from left panel
  useEffect(() => {
    if (!selectedTopic) return;
    const topic = topics.find((t) => t.id === selectedTopic);
    if (!topic) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: `Tell me about ${topic.title}`,
      timestamp: new Date(),
    };

    const assistantMsg: ChatMessage = {
      id: `assistant-${Date.now()}`,
      role: "assistant",
      content: topic.greeting,
      topicId: topic.id,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setExpandedTopics((prev) => new Set([...prev, topic.id]));

    setTimeout(() => {
      setMessages((prev) => [...prev, assistantMsg]);
      setIsLoading(false);
    }, 800);
  }, [selectedTopic, topics]);

  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text || isLoading || isVerifying) return;

    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    setIsVerifying(true);
    setIsLoading(true);

    try {
      const token = await executeRecaptcha('chat_panel_message');
      
      // Verify with backend
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/verify-recaptcha`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (!data.success) {
        setMessages(prev => [...prev, {
          id: `assistant-error-${Date.now()}`,
          role: "assistant",
          content: "Verification failed. Please try again.",
          timestamp: new Date()
        }]);
        setIsVerifying(false);
        setIsLoading(false);
        return;
      }

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setIsVerifying(false);

      // Simulate response delay
      setTimeout(() => {
        const response = getFreeTextResponse(text);

        const assistantMsg: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: response || "",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMsg]);
        setIsLoading(false);
        inputRef.current?.focus();
      }, 1000);
    } catch (error) {
      console.error('Error verifying reCAPTCHA:', error);
      setIsVerifying(false);
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Chat cleared! 🔄 How can I help you with the election process?\n\nClick a topic on the left or type your question below.",
        timestamp: new Date(),
      },
    ]);
    setExpandedTopics(new Set());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 border-b border-border bg-background/80 backdrop-blur-sm sm:rounded-t-xl">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
            <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium">Election Guide Assistant</p>
            <p className="text-[10px] text-muted-foreground flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Online
            </p>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={handleClear} className="text-muted-foreground text-xs h-8 px-2">
          <RotateCcw className="w-3.5 h-3.5 mr-1" />
          <span className="hidden sm:inline">Clear</span>
        </Button>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 px-2 sm:px-4 py-3 sm:py-4 space-y-3 sm:space-y-4" ref={scrollRef}>
        {messages.map((msg) => (
          <div key={msg.id} className="animate-fade-in">
            {msg.role === "user" ? (
              /* User Message */
              <div className="flex gap-2 sm:gap-3 justify-end">
                <div className="max-w-[85%] sm:max-w-sm bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-3 sm:px-4 py-2 sm:py-2.5">
                  <p className="text-sm">{msg.content}</p>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                </div>
              </div>
            ) : (
              /* Assistant Message */
              <div className="flex gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
                </div>
                <div className="flex-1 max-w-[90%] sm:max-w-2xl space-y-2 sm:space-y-3">
                  {/* Text content */}
                  {msg.content && (
                    <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-3 sm:px-4 py-2.5 sm:py-3">
                      <RenderText text={msg.content} />
                    </div>
                  )}

                  {/* Topic card (if applicable) */}
                  {msg.topicId && expandedTopics.has(msg.topicId) && (
                    <TopicResponseCard topic={topics.find((t) => t.id === msg.topicId)!} />
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {isLoading && <LoadingSkeleton />}
      </ScrollArea>

      {/* Sticky Input Bar */}
      <div className="border-t border-border px-2 sm:px-4 py-2.5 sm:py-3 bg-background/80 backdrop-blur-sm sm:rounded-b-xl">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            placeholder="Ask about elections..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 h-10 sm:h-11"
          />
          <Button onClick={handleSend} disabled={!inputValue.trim() || isLoading} size="default" className="h-10 sm:h-11 px-3 sm:px-4">
            <Send className="w-4 h-4 sm:mr-1" />
            <span className="hidden sm:inline">Send</span>
          </Button>
        </div>
        <p className="text-[10px] text-muted-foreground mt-2 text-center hidden sm:block">
          Try: "What is NOTA?", "How does VVPAT work?", "Tell me about Lok Sabha"
        </p>
      </div>
    </div>
  );
}
