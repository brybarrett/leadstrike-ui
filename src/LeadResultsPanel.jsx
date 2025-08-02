// src/LeadResultsPanel.jsx

import React from "react";

function LeadResultsPanel({ filters }) {
  if (!filters) return null;

  const leads = Array.from({ length: 5 }, (_, i) => ({
    company: `${filters.industry || "Stealth"} Co. ${i + 1}`,
    location: filters.location || "Undisclosed",
    intent: filters.intent || "Unknown",
    email: `contact${i + 1}@${(filters.industry || "leadstrike").toLowerCase()}.ai`,
  }));

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-5xl grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        {/* Spacer (Selector Panel is centered in Dashboard) */}
        <div />

        {/* Lead Results */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">
            Lead Results
          </h2>

          {leads.map((lead, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 shadow-md"
            >
              <div className="text-lg font-medium text-gray-100 mb-1">
                {lead.company}
              </div>

              <div className="text-sm text-gray-400 mb-2">
                {lead.location} &middot; {lead.intent}
              </div>

              <div className="flex justify-between items-center">
                <code className="text-sm text-green-400">{lead.email}</code>
                <button
                  className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md text-white transition font-medium"
                  onClick={() => navigator.clipboard.writeText(lead.email)}
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeadResultsPanel;
