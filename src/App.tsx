import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import HomePage from "./pages/HomePage";
import AssistantPage from "./pages/AssistantPage";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="election-guide-theme">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assistant" element={<AssistantPage />} />
      </Routes>
    </ThemeProvider>
  );
}


