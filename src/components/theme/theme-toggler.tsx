import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Theme toggler that switches between dark and light mode.
 * Persists preference in localStorage and respects system preference on first visit.
 */
const ThemeToggler = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark(!isDark)}
      className="backdrop-blur-lg bg-[rgba(255,255,255,.05)] cursor-pointer p-4 rounded-full transition-colors hover:bg-[rgba(255,255,255,.1)]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggler;
