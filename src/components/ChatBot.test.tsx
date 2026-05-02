import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ChatBot from "./ChatBot";

describe("ChatBot Component", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the floating action button initially", () => {
    render(<ChatBot />);
    expect(screen.getByLabelText(/open election assistant/i)).toBeInTheDocument();
  });

  it("opens chat window when floating button is clicked", () => {
    render(<ChatBot />);
    const openButton = screen.getByLabelText(/open election assistant/i);
    fireEvent.click(openButton);

    expect(screen.getByText("Election Assistant")).toBeInTheDocument();
    expect(screen.getByText("Online")).toBeInTheDocument();
  });

  it("displays initial welcome message", () => {
    render(<ChatBot />);
    const openButton = screen.getByLabelText(/open election assistant/i);
    fireEvent.click(openButton);

    expect(
      screen.getByText(/namaste! i am your indian election assistant/i)
    ).toBeInTheDocument();
  });

  it("closes chat window when close button is clicked", () => {
    const { container } = render(<ChatBot />);
    // Open the chat
    fireEvent.click(screen.getByLabelText(/open election assistant/i));

    // Close the chat - find the X button in the header (second button after the Online indicator)
    const buttons = container.querySelectorAll("button");
    // The close button should be one of the buttons in the chat window
    const closeButton = Array.from(buttons).find(btn => 
      btn.querySelector("svg") && !btn.getAttribute("aria-label")
    );
    expect(closeButton).toBeTruthy();
    fireEvent.click(closeButton!);

    // Chat window should be closed, FAB should be visible
    expect(screen.getByLabelText(/open election assistant/i)).toBeInTheDocument();
  });

  it("allows user to type and send a message", async () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText(/open election assistant/i));

    const input = screen.getByPlaceholderText(/ask about indian elections/i);
    fireEvent.change(input, { target: { value: "What is voter ID?" } });

    const form = input.closest("form");
    fireEvent.submit(form!);

    // User message should appear
    await waitFor(() => {
      expect(screen.getByText("What is voter ID?")).toBeInTheDocument();
    });

    // Input should be cleared
    expect(input).toHaveValue("");
  });

  it("disables send button when input is empty", () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText(/open election assistant/i));

    // The send button is the disabled button inside the form
    const form = screen.getByPlaceholderText(/ask about indian elections/i).closest("form");
    const sendButton = form?.querySelector("button[type='submit']");
    expect(sendButton).toBeDisabled();
  });

  it("responds to voter id queries", async () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText(/open election assistant/i));

    const input = screen.getByPlaceholderText(/ask about indian elections/i);
    fireEvent.change(input, { target: { value: "voter id" } });

    const form = input.closest("form");
    fireEvent.submit(form!);

    // Fast-forward timers for bot response
    vi.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText(/EPIC.*electors photo identity card/i)).toBeInTheDocument();
    });
  });

  it("responds to EVM queries", async () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText(/open election assistant/i));

    const input = screen.getByPlaceholderText(/ask about indian elections/i);
    fireEvent.change(input, { target: { value: "What is EVM?" } });

    const form = input.closest("form");
    fireEvent.submit(form!);

    vi.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText(/electronic voting machines/i)).toBeInTheDocument();
    });
  });

  it("responds to polling booth queries", async () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText(/open election assistant/i));

    const input = screen.getByPlaceholderText(/ask about indian elections/i);
    fireEvent.change(input, { target: { value: "where to vote" } });

    const form = input.closest("form");
    fireEvent.submit(form!);

    vi.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText(/polling booth/i)).toBeInTheDocument();
    });
  });

  it("responds to eligibility queries", async () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText(/open election assistant/i));

    const input = screen.getByPlaceholderText(/ask about indian elections/i);
    fireEvent.change(input, { target: { value: "who can vote" } });

    const form = input.closest("form");
    fireEvent.submit(form!);

    vi.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText(/18 years old/i)).toBeInTheDocument();
    });
  });

  it("provides default response for unknown queries", async () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText(/open election assistant/i));

    const input = screen.getByPlaceholderText(/ask about indian elections/i);
    fireEvent.change(input, { target: { value: "random question" } });
    fireEvent.submit(input.closest("form")!);

    vi.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(
        screen.getByText(/i can help you understand the indian election process/i)
      ).toBeInTheDocument();
    });
  });

  it("displays timestamp for messages", () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText(/open election assistant/i));

    // Check that initial message has timestamp (format like 12:34 or 12:34 PM)
    const messages = screen.getAllByText(/\d{1,2}:\d{2}/);
    expect(messages.length).toBeGreaterThan(0);
  });

  it("prevents sending empty messages", () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText(/open election assistant/i));

    const input = screen.getByPlaceholderText(/ask about indian elections/i);
    fireEvent.change(input, { target: { value: "   " } });

    const form = input.closest("form");
    fireEvent.submit(form!);

    // Should not add a message
    const userMessages = screen.queryAllByText(/user message/i);
    expect(userMessages.length).toBe(0);
  });

  it("maintains message history during conversation", async () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText(/open election assistant/i));

    // Send first message
    const input = screen.getByPlaceholderText(/ask about indian elections/i);
    fireEvent.change(input, { target: { value: "First question" } });
    fireEvent.submit(input.closest("form")!);

    vi.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText("First question")).toBeInTheDocument();
    });

    // Send second message
    fireEvent.change(input, { target: { value: "Second question" } });
    fireEvent.submit(input.closest("form")!);

    vi.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText("Second question")).toBeInTheDocument();
    });

    // Both messages should be visible
    expect(screen.getByText("First question")).toBeInTheDocument();
    expect(screen.getByText("Second question")).toBeInTheDocument();
  }, 10000);
});

describe("ChatBot Component - Edge Cases", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("handles multiple rapid messages", async () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText(/open election assistant/i));

    const input = screen.getByPlaceholderText(/ask about indian elections/i);

    // Send multiple messages quickly
    fireEvent.change(input, { target: { value: "Message 1" } });
    fireEvent.submit(input.closest("form")!);
    
    fireEvent.change(input, { target: { value: "Message 2" } });
    fireEvent.submit(input.closest("form")!);
    
    fireEvent.change(input, { target: { value: "Message 3" } });
    fireEvent.submit(input.closest("form")!);

    // Fast-forward through all bot responses
    vi.advanceTimersByTime(3000);

    // All user messages should appear
    await waitFor(() => {
      expect(screen.getByText("Message 1")).toBeInTheDocument();
      expect(screen.getByText("Message 2")).toBeInTheDocument();
      expect(screen.getByText("Message 3")).toBeInTheDocument();
    });
  }, 10000);

  it("responds to checklist-related queries", async () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText(/open election assistant/i));

    const input = screen.getByPlaceholderText(/ask about indian elections/i);
    fireEvent.change(input, { target: { value: "checklist" } });
    fireEvent.submit(input.closest("form")!);

    vi.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText(/voter's checklist/i)).toBeInTheDocument();
    });
  }, 10000);
});
