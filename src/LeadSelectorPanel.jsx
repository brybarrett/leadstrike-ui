// src/LeadSelectorPanel.jsx

import React, { useState } from "react";

function LeadSelectorPanel({ onSearch }) {
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [intent, setIntent] = useState("");

  const handleSearch = () => {
    onSearch({ industry, location, intent });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-8 w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-4 text-white">🎯 Target Your Leads</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Industry</label>
          <select
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="">Select Industry</option>
            <option value="AI">Artificial Intelligence</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Fintech">Fintech</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Location</label>
          <select
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Region</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Austin">Austin</option>
            <option value="New York">New York</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Intent</label>
          <select
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={intent}
            onChange={(e) => setIntent(e.target.value)}
          >
            <option value="">Select Intent Signal</option>
            <option value="Funding">Recently Funded</option>
            <option value="Hiring">Now Hiring</option>
            <option value="Expanding">Expansion Announced</option>
          </select>
        </div>
      </div>

      <button
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        onClick={handleSearch}
      >
        🚀 Generate Leads
      </button>
    </div>
  );
}

export default LeadSelectorPanel;
