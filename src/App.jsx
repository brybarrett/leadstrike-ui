// src/App.jsx

import React from "react";
import Dashboard from "./Dashboard.jsx";
import leadstrikeLogo from "./assets/leadstrike-logo.png";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="flex items-center space-x-4 mb-8">
        <img src={leadstrikeLogo} alt="LeadStrike Logo" className="h-20 w-auto" />
        <h1 className="text-4xl font-bold">LeadStrike</h1>
      </div>
      <Dashboard />
    </div>
  );
}
