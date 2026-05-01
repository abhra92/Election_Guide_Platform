import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Namaste! I am your Indian Election Assistant. How can I help you understand the voting process, timelines, or your eligibility?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "I can help you understand the Indian election process. Try asking about 'voter id', 'EVM', 'polling booth', or 'eligibility'.";
      
      const lowerInput = newUserMessage.text.toLowerCase();
      if (lowerInput.includes('voter id') || lowerInput.includes('epic')) {
        botResponse = "Your EPIC (Electors Photo Identity Card) is your primary voter ID. You can download the digital version (e-EPIC) from the Voter Helpline App or the ECI portal.";
      } else if (lowerInput.includes('evm') || lowerInput.includes('vvpat')) {
        botResponse = "EVMs (Electronic Voting Machines) are used to cast your vote. You press the blue button next to your candidate's symbol. The VVPAT machine then prints a slip visible for 7 seconds to verify your choice.";
      } else if (lowerInput.includes('booth') || lowerInput.includes('where to vote')) {
        botResponse = "You can find your polling booth on your Voter Information Slip, by searching your EPIC number on the ECI portal, or via the Voter Helpline App.";
      } else if (lowerInput.includes('eligibility') || lowerInput.includes('who can vote')) {
        botResponse = "To vote in India, you must be an Indian citizen, at least 18 years old on the qualifying date, and be enrolled in the electoral roll of your constituency.";
      } else if (lowerInput.includes('checklist') || lowerInput.includes('preparation')) {
        botResponse = "You can find a complete Voter's Checklist on our main page under the 'Checklist' section. It covers what you need to do before, during, and after Election Day.";
      }

      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newBotMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-neon-green rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(54,244,164,0.3)] hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-neon-green"

          aria-label="Open Election Assistant"
        >
          <MessageSquare className="w-7 h-7 text-background" />

        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-[350px] sm:w-[400px] h-[500px] bg-card border border-border rounded-[16px] shadow-shopify flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">

          {/* Header */}
          <div className="bg-secondary border-b border-border p-4 flex justify-between items-center">

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[rgba(54,244,164,0.1)] flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-neon-green" />
              </div>
              <div>
                <h3 className="text-foreground font-[500] text-[16px]" style={{ fontFamily: "var(--font-display)" }}>Election Assistant</h3>

                <span className="text-neon-green text-[12px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neon-green rounded-md p-1"

            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent bg-background">

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-[12px] ${
                    msg.sender === 'user'
                      ? 'bg-secondary border border-border text-foreground rounded-tr-[4px]'
                      : 'bg-accent/10 border border-border text-muted-foreground rounded-tl-[4px]'
                  }`}

                >
                  <p className="text-[14px] leading-[1.5]" style={{ fontFamily: "var(--font-body)" }}>{msg.text}</p>
                  <span className="text-[10px] opacity-50 mt-1 block text-right">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-secondary border-t border-border">

            <form onSubmit={handleSendMessage} className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Indian elections..."
                className="w-full bg-background border border-border rounded-full py-3 pl-4 pr-12 text-[14px] text-foreground placeholder-muted-foreground focus:outline-none focus:border-neon-green focus:shadow-[0_0_0_1px_var(--color-neon-green)] transition-all"
                style={{ fontFamily: "var(--font-body)" }}

              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="absolute right-2 w-8 h-8 rounded-full bg-secondary hover:bg-border flex items-center justify-center text-neon-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />

              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
