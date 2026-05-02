import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import HomePage from "./pages/HomePage";
import AssistantPage from "./pages/AssistantPage";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', import.meta.env.VITE_GA_ID, {
        page_path: location.pathname,
      });
      console.log(`Page view tracked: ${location.pathname}`);
    }
  }, [location]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="election-guide-theme">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assistant" element={<AssistantPage />} />
      </Routes>
    </ThemeProvider>
  );
}



