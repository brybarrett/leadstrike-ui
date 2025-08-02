// src/NavBar.jsx

import ThemeToggle from "./ThemeToggle";

function NavBar({ onLogout }) {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">
        LeadStrike
      </div>
      <div className="flex gap-4 items-center">
        <ThemeToggle />
        <button
          onClick={onLogout}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
