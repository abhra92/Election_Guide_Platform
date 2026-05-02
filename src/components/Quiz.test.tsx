import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Quiz from "./Quiz";
import { quizQuestions } from "../data/electionData";

describe("Quiz Component", () => {
  beforeEach(() => {
    render(<Quiz id="quiz-section" />);
  });

  it("renders the quiz section with correct heading", () => {
    expect(screen.getByText("Test Your Knowledge")).toBeInTheDocument();
    expect(screen.getByText("QUIZ")).toBeInTheDocument();
  });

  it("displays the first question on initial render", () => {
    expect(screen.getByText(quizQuestions[0].question)).toBeInTheDocument();
    expect(screen.getByText(`Question 1 of ${quizQuestions.length}`)).toBeInTheDocument();
  });

  it("renders all answer options for the current question", () => {
    quizQuestions[0].options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("shows initial score of 0", () => {
    expect(screen.getByText("Score: 0")).toBeInTheDocument();
  });

  it("handles correct answer selection", async () => {
    const correctOptionIndex = quizQuestions[0].correctAnswer;
    const correctOption = screen.getByText(quizQuestions[0].options[correctOptionIndex]);
    fireEvent.click(correctOption);

    // Wait for result to show
    await waitFor(() => {
      expect(screen.getByText(/explanation/i)).toBeInTheDocument();
    });

    // Score should increase
    expect(screen.getByText("Score: 1")).toBeInTheDocument();
  });

  it("handles incorrect answer selection", async () => {
    const correctOptionIndex = quizQuestions[0].correctAnswer;
    const incorrectOptionIndex = (correctOptionIndex + 1) % quizQuestions[0].options.length;
    const incorrectOption = screen.getByText(quizQuestions[0].options[incorrectOptionIndex]);
    fireEvent.click(incorrectOption);

    // Wait for result to show
    await waitFor(() => {
      expect(screen.getByText(/explanation/i)).toBeInTheDocument();
    });

    // Score should remain 0
    expect(screen.getByText("Score: 0")).toBeInTheDocument();
  });

  it("navigates to next question after selecting answer", async () => {
    // Select an answer (any option)
    fireEvent.click(screen.getByText(quizQuestions[0].options[0]));

    // Wait for next button and click it
    await waitFor(() => {
      expect(screen.getByText(/next question/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/next question/i));

    // Should show second question
    await waitFor(() => {
      expect(screen.getByText(quizQuestions[1].question)).toBeInTheDocument();
    });
  });

  it("disables options after selecting an answer", async () => {
    fireEvent.click(screen.getByText(quizQuestions[0].options[0]));

    await waitFor(() => {
      const buttons = screen.getAllByRole("button");
      const answerButtons = buttons.filter((btn: HTMLElement) =>
        quizQuestions[0].options.some((opt) =>
          btn.textContent?.includes(opt)
        )
      );
      answerButtons.forEach((btn: HTMLElement) => {
        expect(btn).toBeDisabled();
      });
    });
  });

  it("shows completion screen after answering all questions", async () => {
    // Answer all questions
    for (let i = 0; i < quizQuestions.length; i++) {
      // Click first option for each question
      fireEvent.click(screen.getAllByRole("button")[0]);

      await waitFor(() => {
        const button = screen.getByText(/next question|finish quiz/i);
        expect(button).toBeInTheDocument();
      });

      fireEvent.click(screen.getByText(/next question|finish quiz/i));
    }

    // Should show completion screen
    await waitFor(() => {
      expect(screen.getByText("Quiz Complete!")).toBeInTheDocument();
    });

    // Should show final score
    expect(screen.getByText(/out of/i)).toBeInTheDocument();
  });

  it("allows restarting the quiz", async () => {
    // Complete the quiz
    for (let i = 0; i < quizQuestions.length; i++) {
      fireEvent.click(screen.getAllByRole("button")[0]);
      await waitFor(() => {
        expect(screen.getByText(/next question|finish quiz/i)).toBeInTheDocument();
      });
      fireEvent.click(screen.getByText(/next question|finish quiz/i));
    }

    // Wait for completion screen
    await waitFor(() => {
      expect(screen.getByText("Quiz Complete!")).toBeInTheDocument();
    });

    // Click try again
    fireEvent.click(screen.getByText(/try again/i));

    // Should show first question again
    await waitFor(() => {
      expect(screen.getByText(quizQuestions[0].question)).toBeInTheDocument();
    });
    // Score should be reset
    expect(screen.getByText("Score: 0")).toBeInTheDocument();
  });

  it("calculates and displays accuracy percentage", async () => {
    // Answer all questions
    for (let i = 0; i < quizQuestions.length; i++) {
      fireEvent.click(screen.getAllByRole("button")[0]);

      await waitFor(() => {
        expect(screen.getByText(/next question|finish quiz/i)).toBeInTheDocument();
      });

      fireEvent.click(screen.getByText(/next question|finish quiz/i));
    }

    await waitFor(() => {
      expect(screen.getByText("Quiz Complete!")).toBeInTheDocument();
    });

    // Should show accuracy
    expect(screen.getByText(/accuracy/i)).toBeInTheDocument();
  });

  it("renders with optional id prop", () => {
    const { container } = render(<Quiz id="custom-quiz" />);
    const section = container.querySelector("#custom-quiz");
    expect(section).toBeInTheDocument();
  });
});

describe("Quiz Component - Edge Cases", () => {
  it("prevents multiple answer selections on same question", async () => {
    render(<Quiz />);

    fireEvent.click(screen.getByText(quizQuestions[0].options[0]));

    await waitFor(() => {
      expect(screen.getByText(/explanation/i)).toBeInTheDocument();
    });

    // Try clicking another option - should be disabled
    const optionB = screen.getByText(quizQuestions[0].options[1]);
    expect(optionB.closest("button")).toBeDisabled();
  });
});
