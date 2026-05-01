import {
  ClipboardList,
  CheckCircle,
  Vote,
  Calendar,
  FileText,
  MessageCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui";
import { Badge } from "./ui";
import { cn } from "../utils/cn";
import type { TopicData } from "../data/assistantData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList,
  CheckCircle,
  Vote,
  Calendar,
  FileText,
};

interface LeftPanelProps {
  topics: TopicData[];
  selectedTopic: string | null;
  onSelectTopic: (id: string) => void;
  chatCount: number;
}

export default function LeftPanel({ topics, selectedTopic, onSelectTopic, chatCount }: LeftPanelProps) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 h-full">
      {/* Welcome Card */}
      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-primary/20">
        <CardHeader className="p-3 sm:p-5 pb-2 sm:pb-3">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <CardTitle className="text-primary-foreground text-base">Election Guide</CardTitle>
          </div>
          <CardDescription className="text-primary-foreground/70 text-xs">
            Understand voting step-by-step
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-5 pt-0">
          <p className="text-xs text-primary-foreground/70 leading-relaxed hidden sm:block">
            Click a topic below or type your question in the chat. I'll guide you through India's election process with clear steps and timelines.
          </p>
          {chatCount > 0 && (
            <Badge variant="secondary" className="mt-2 sm:mt-3 bg-primary-foreground/20 text-primary-foreground text-[10px]">
              <MessageCircle className="w-3 h-3 mr-1" />
              {chatCount} message{chatCount !== 1 ? "s" : ""}
            </Badge>
          )}
        </CardContent>
      </Card>

      {/* Topics Card */}
      <Card className="flex-1">
        <CardHeader className="p-3 sm:p-5 pb-2">
          <CardTitle className="text-sm">Topics</CardTitle>
          <CardDescription className="text-xs hidden sm:block">Select a topic to explore</CardDescription>
        </CardHeader>
        <CardContent className="space-y-1 p-2 sm:p-5 sm:space-y-1.5">
          {topics.map((topic) => {
            const Icon = iconMap[topic.icon] || MessageCircle;
            const isActive = selectedTopic === topic.id;

            return (
              <button
                key={topic.id}
                onClick={() => onSelectTopic(topic.id)}
                className={cn(
                  "w-full flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg text-left transition-all group",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-secondary text-foreground"
                )}
              >
                <div
                  className={cn(
                    "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                    isActive
                      ? "bg-primary-foreground/20"
                      : "bg-secondary group-hover:bg-muted"
                  )}
                >
                  <Icon className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={cn("text-sm font-medium", isActive && "text-primary-foreground")}>
                    {topic.title}
                  </div>
                  <div className={cn("text-[11px] truncate", isActive ? "text-primary-foreground/70" : "text-muted-foreground")}>
                    {topic.description}
                  </div>
                </div>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 flex-shrink-0 transition-colors",
                    isActive ? "text-primary-foreground/70" : "text-muted-foreground group-hover:text-foreground"
                  )}
                />
              </button>
            );
          })}
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card className="hidden sm:block">
        <CardContent className="p-3 sm:p-4">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <Badge variant="outline" className="text-[10px] cursor-default">🇮🇳 ECI</Badge>
            <Badge variant="outline" className="text-[10px] cursor-default">EVM</Badge>
            <Badge variant="outline" className="text-[10px] cursor-default">VVPAT</Badge>
            <Badge variant="outline" className="text-[10px] cursor-default">NOTA</Badge>
            <Badge variant="outline" className="text-[10px] cursor-default">EPIC</Badge>
            <Badge variant="outline" className="text-[10px] cursor-default">MCC</Badge>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2">
            Ask about these keywords in the chat →
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
