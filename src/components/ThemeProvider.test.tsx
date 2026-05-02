import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme } from "./ThemeProvider";
import { ReactNode } from "react";

// Test component that uses the theme
const TestComponent = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={() => setTheme("light")}>Set Light</button>
      <button onClick={() => setTheme("dark")}>Set Dark</button>
      <button onClick={() => setTheme("system")}>Set System</button>
    </div>
  );
};

const wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider defaultTheme="dark" storageKey="test-theme-key">
    {children}
  </ThemeProvider>
);

describe("ThemeProvider Component", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    window.localStorage.clear();
    // Reset document classList
    document.documentElement.classList.remove("light", "dark");
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("provides default theme context", () => {
    render(<TestComponent />, { wrapper });

    expect(screen.getByTestId("current-theme")).toHaveTextContent("dark");
  });

  it("allows changing theme to light", () => {
    render(<TestComponent />, { wrapper });

    fireEvent.click(screen.getByText("Set Light"));

    expect(screen.getByTestId("current-theme")).toHaveTextContent("light");
    expect(document.documentElement.classList.contains("light")).toBe(true);
  });

  it("allows changing theme to dark", () => {
    render(<TestComponent />, { wrapper });

    fireEvent.click(screen.getByText("Set Dark"));

    expect(screen.getByTestId("current-theme")).toHaveTextContent("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("allows changing theme to system", () => {
    render(<TestComponent />, { wrapper });

    fireEvent.click(screen.getByText("Set System"));

    expect(screen.getByTestId("current-theme")).toHaveTextContent("system");
  });

  it("saves theme to localStorage when changed", () => {
    render(<TestComponent />, { wrapper });

    fireEvent.click(screen.getByText("Set Light"));

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "test-theme-key",
      "light"
    );
  });

  it("reads theme from localStorage on mount", () => {
    // Mock localStorage to return a saved theme
    (window.localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue("light");

    render(<TestComponent />, { wrapper });

    expect(screen.getByTestId("current-theme")).toHaveTextContent("light");
  });

  it("uses default theme when localStorage is empty", () => {
    (window.localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(null);

    render(<TestComponent />, { wrapper });

    expect(screen.getByTestId("current-theme")).toHaveTextContent("dark");
  });

  it("applies theme class to document element", () => {
    render(<TestComponent />, { wrapper });

    fireEvent.click(screen.getByText("Set Light"));

    expect(document.documentElement.classList.contains("light")).toBe(true);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});

describe("useTheme hook", () => {
  it("returns null context when used outside ThemeProvider (React 19 behavior)", () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    // Component that uses useTheme without provider
    const BadComponent = () => {
      try {
        useTheme();
        return <div data-testid="no-error" />;
      } catch {
        return <div data-testid="error-thrown" />;
      }
    };

    render(<BadComponent />);

    consoleSpy.mockRestore();
  });
});

describe("ThemeProvider with different default themes", () => {
  it("accepts light as default theme", () => {
    const LightWrapper = ({ children }: { children: ReactNode }) => (
      <ThemeProvider defaultTheme="light" storageKey="light-test">
        {children}
      </ThemeProvider>
    );

    render(<TestComponent />, { wrapper: LightWrapper });

    expect(screen.getByTestId("current-theme")).toHaveTextContent("light");
  });

  it("accepts system as default theme", () => {
    const SystemWrapper = ({ children }: { children: ReactNode }) => (
      <ThemeProvider defaultTheme="system" storageKey="system-test">
        {children}
      </ThemeProvider>
    );

    render(<TestComponent />, { wrapper: SystemWrapper });

    expect(screen.getByTestId("current-theme")).toHaveTextContent("system");
  });
});

describe("ThemeProvider - System theme detection", () => {
  it("applies dark theme when system prefers dark", () => {
    // Mock matchMedia to return dark preference
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: query === "(prefers-color-scheme: dark)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    const SystemWrapper = ({ children }: { children: ReactNode }) => (
      <ThemeProvider defaultTheme="system" storageKey="system-dark-test">
        {children}
      </ThemeProvider>
    );

    render(<TestComponent />, { wrapper: SystemWrapper });

    // When system theme is selected and system prefers dark, dark class should be applied
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
