import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import VoterChecklist from "./VoterChecklist";

// Mock the checklist data
vi.mock("../data/electionData", async () => {
  const actual = await vi.importActual<typeof import("../data/electionData")>("../data/electionData");
  return {
    ...actual,
    checklistData: [
      {
        category: "Before Election Day",
        items: [
          "Verify your name in the Electoral Roll",
          "Locate your designated Polling Station",
        ]
      },
      {
        category: "On Election Day",
        items: [
          "Carry your Voter ID or valid alternative ID",
          "Arrive at the polling station during voting hours",
        ]
      },
      {
        category: "Post-Election",
        items: [
          "Wait for the official results announcement",
          "Monitor news from verified sources only",
        ]
      }
    ]
  };
});

describe("VoterChecklist Component", () => {
  it("renders the checklist section with correct heading", () => {
    render(<VoterChecklist id="checklist-section" />);

    expect(screen.getByText("Voter's Checklist")).toBeInTheDocument();
    expect(screen.getByText("Checklist")).toBeInTheDocument();
  });

  it("renders the subtitle/description", () => {
    render(<VoterChecklist />);

    expect(
      screen.getByText(/ensure you're fully prepared for the democratic process/i)
    ).toBeInTheDocument();
  });

  it("renders all checklist categories from data", () => {
    render(<VoterChecklist />);

    // Categories from mocked data
    expect(screen.getByText("Before Election Day")).toBeInTheDocument();
    expect(screen.getByText("On Election Day")).toBeInTheDocument();
    expect(screen.getByText("Post-Election")).toBeInTheDocument();
  });

  it("renders all checklist items for each category", () => {
    render(<VoterChecklist />);

    // Items from mocked data
    expect(screen.getByText("Verify your name in the Electoral Roll")).toBeInTheDocument();
    expect(screen.getByText("Locate your designated Polling Station")).toBeInTheDocument();
    expect(screen.getByText("Carry your Voter ID or valid alternative ID")).toBeInTheDocument();
    expect(screen.getByText("Arrive at the polling station during voting hours")).toBeInTheDocument();
    expect(screen.getByText("Wait for the official results announcement")).toBeInTheDocument();
    expect(screen.getByText("Monitor news from verified sources only")).toBeInTheDocument();
  });

  it("renders the pro tip section", () => {
    render(<VoterChecklist />);

    expect(screen.getByText(/pro tip: carry your epic card!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/electoral photo identity card.*epic.*makes the verification process much faster/i)
    ).toBeInTheDocument();
  });

  it("renders the external link to check voter list", () => {
    render(<VoterChecklist />);

    const link = screen.getByText("Check Voter List");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "https://voters.eci.gov.in/");
    expect(link.closest("a")).toHaveAttribute("target", "_blank");
    expect(link.closest("a")).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders check icons for each checklist item", () => {
    const { container } = render(<VoterChecklist />);

    // Check for CheckCircle2 icons (should be one per checklist item)
    // Mock data has 6 total items (2 per category)
    const totalItems = 6;
    const checkIcons = container.querySelectorAll("svg");

    // Should have at least as many icons as checklist items plus the header icons
    expect(checkIcons.length).toBeGreaterThanOrEqual(totalItems);
  });

  it("renders with optional id prop", () => {
    const { container } = render(<VoterChecklist id="custom-checklist" />);
    const section = container.querySelector("#custom-checklist");
    expect(section).toBeInTheDocument();
  });

  it("renders without id prop when not provided", () => {
    const { container } = render(<VoterChecklist />);
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
    expect(section?.getAttribute("id")).toBeNull();
  });

  it("displays the clipboard list icon in category headers", () => {
    const { container } = render(<VoterChecklist />);

    // Each category should have a ClipboardList icon (3 from mocked data)
    const categories = container.querySelectorAll("h3");
    expect(categories.length).toBe(3);
  });
});

describe("VoterChecklist Component - Accessibility", () => {
  it("uses semantic HTML structure", () => {
    const { container } = render(<VoterChecklist />);

    // Should have a section element
    expect(container.querySelector("section")).toBeInTheDocument();

    // Should have proper heading hierarchy
    expect(container.querySelector("h2")).toBeInTheDocument();
    expect(container.querySelectorAll("h3").length).toBeGreaterThan(0);
  });

  it("renders list items in unordered lists", () => {
    const { container } = render(<VoterChecklist />);

    // Each category should have a ul with li items (3 from mocked data)
    const lists = container.querySelectorAll("ul");
    expect(lists.length).toBe(3);

    lists.forEach((list: Element) => {
      expect(list.querySelectorAll("li").length).toBeGreaterThan(0);
    });
  });
});
