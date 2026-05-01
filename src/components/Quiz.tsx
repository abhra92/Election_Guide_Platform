import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  Target,
} from "lucide-react";
import { quizQuestions } from "../data/electionData";

export default function Quiz({ id }: { id?: string }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const question = quizQuestions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    const isCorrect = index === question.correctAnswer;
    if (isCorrect) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((c) => c + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsComplete(false);
  };

  return (
    <section id={id} className="py-[120px] bg-background transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-[80px]">
          <span className="inline-block px-4 py-2 mb-6 bg-secondary rounded-[4px] border border-border backdrop-blur-sm text-[16px] font-[400] tracking-[0.72px] text-foreground" style={{ fontFamily: "var(--font-body)" }}>
            QUIZ
          </span>
          <h2 className="text-[55px] font-[330] leading-[1.16] tracking-tight text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Test Your Knowledge
          </h2>
          <p className="text-[20px] font-[500] leading-[1.40] tracking-[0.3px] text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            How well do you know the Indian election process? Take our quick quiz to find out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!isComplete ? (
            <div className="bg-card rounded-[24px] border border-border p-8 sm:p-12 shadow-shopify relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 bg-secondary w-full">
                <div 
                  className="h-full bg-neon-green transition-all duration-500" 
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between mb-10">
                <span className="text-[14px] font-[500] text-neon-green uppercase tracking-wider">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary rounded-full border border-border">
                  <Target className="w-4 h-4 text-neon-green" />
                  <span className="text-[14px] font-[500] text-foreground">Score: {score}</span>
                </div>
              </div>

              <h3 className="text-[28px] sm:text-[36px] font-[330] leading-[1.2] text-foreground mb-10" style={{ fontFamily: "var(--font-display)" }}>
                {question.question}
              </h3>

              <div className="space-y-4">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === question.correctAnswer;
                  
                  let stateClasses = "border-border hover:border-neon-green bg-secondary/50";
                  if (showResult) {
                    if (isCorrect) stateClasses = "border-neon-green bg-neon-green/10 text-neon-green";
                    else if (isSelected) stateClasses = "border-red-500 bg-red-500/10 text-red-500";
                    else stateClasses = "opacity-50 border-border";
                  } else if (isSelected) {
                    stateClasses = "border-neon-green bg-neon-green/10";
                  }

                  return (
                    <button
                      key={index}
                      disabled={showResult}
                      onClick={() => handleAnswer(index)}
                      className={`w-full text-left p-6 rounded-[16px] border transition-all duration-300 flex items-center justify-between group ${stateClasses}`}
                    >
                      <span className="text-[18px] font-[400]" style={{ fontFamily: "var(--font-body)" }}>{option}</span>
                      {showResult && isCorrect && <CheckCircle className="w-6 h-6 text-neon-green" />}
                      {showResult && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500" />}
                      {!showResult && (
                        <div className={`w-6 h-6 rounded-full border-2 transition-colors ${isSelected ? "border-neon-green bg-neon-green" : "border-border group-hover:border-neon-green"}`} />
                      )}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <div className="mt-10 p-6 bg-secondary/50 border border-border rounded-[16px] animate-in fade-in slide-in-from-bottom-2">
                  <p className="text-[16px] text-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <span className="font-bold text-neon-green">Explanation: </span>
                    {question.explanation}
                  </p>
                  <button
                    onClick={currentQuestion === quizQuestions.length - 1 ? () => setIsComplete(true) : nextQuestion}
                    className="mt-6 w-full btn-primary flex items-center justify-center gap-2"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-card rounded-[24px] border border-border p-12 sm:p-20 shadow-shopify text-center animate-in zoom-in-95">
              <div className="w-24 h-24 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-neon-green/20">
                <Trophy className="w-12 h-12 text-neon-green" />
              </div>
              <h3 className="text-[40px] font-[330] text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>Quiz Complete!</h3>
              <p className="text-[20px] text-muted-foreground mb-10" style={{ fontFamily: "var(--font-body)" }}>
                You scored <span className="text-neon-green font-bold">{score}</span> out of <span className="text-foreground">{quizQuestions.length}</span>
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-6 bg-secondary rounded-[16px] border border-border">
                  <span className="block text-[32px] font-bold text-foreground">{Math.round((score / quizQuestions.length) * 100)}%</span>
                  <span className="text-[12px] text-muted-foreground uppercase tracking-widest">Accuracy</span>
                </div>
                <div className="p-6 bg-secondary rounded-[16px] border border-border">
                  <span className="block text-[32px] font-bold text-foreground">{quizQuestions.length}</span>
                  <span className="text-[12px] text-muted-foreground uppercase tracking-widest">Questions</span>
                </div>
              </div>

              <button
                onClick={resetQuiz}
                className="btn-secondary w-full flex items-center justify-center gap-2 py-4"
              >
                <RotateCcw className="w-5 h-5" />
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
