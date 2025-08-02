// src/ThemeToggle.jsx

import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-sm px-2 py-1 rounded border dark:border-gray-500 border-gray-300 text-gray-700 dark:text-gray-300"
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;
