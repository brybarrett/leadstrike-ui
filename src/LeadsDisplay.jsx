// src/LeadDisplay.jsx

import React from 'react';

export default function LeadDisplay({ leads }) {
  if (!leads || leads.length === 0) {
    return (
      <div className="text-center text-sm text-slate-400 mt-10">
        No leads yet. Use the filters and click <span className="font-medium text-white">"Find Leads"</span>.
      </div>
    );
  }

  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {leads.map((lead, index) => (
        <div
          key={index}
          className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-5 shadow-md hover:shadow-purple-500/30 transition-all"
        >
          <h3 className="text-lg font-bold mb-2 text-white">{lead.name}</h3>

          <p className="text-sm text-slate-300">
            <span className="text-slate-400">Title:</span> {lead.title}
          </p>
          <p className="text-sm text-slate-300">
            <span className="text-slate-400">Company:</span> {lead.company}
          </p>
          <p className="text-sm text-slate-300">
            <span className="text-slate-400">Industry:</span> {lead.industry}
          </p>
          <p className="text-sm text-slate-300">
            <span className="text-slate-400">Location:</span> {lead.location}
          </p>
        </div>
      ))}
    </div>
  );
}
