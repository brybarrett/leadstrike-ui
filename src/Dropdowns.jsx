// src/Dropdowns.jsx

import React from 'react';

const inputClass =
  'bg-slate-800 text-white border border-slate-700 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500';

export default function Dropdowns({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Location (Custom-Targetable) */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="e.g., San Diego, CA"
          className={inputClass}
        />
      </div>

      {/* Industry (Hybrid + SIC-aligned) */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">Industry</label>
        <select
          name="industry"
          value={filters.industry}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select Industry</option>
          <option value="Software">Software</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Construction">Construction</option>
          <option value="Retail">Retail</option>
          <option value="Finance">Finance</option>
          <option value="SIC-Matched">SIC-Aligned (Advanced)</option>
        </select>
      </div>

      {/* Intent Signals (LinkedIn-derived) */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">Intent Signals</label>
        <select
          name="intent"
          value={filters.intent}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select Intent Signal</option>
          <option value="Job Changes">Job Changes</option>
          <option value="LinkedIn Posts">LinkedIn Posts</option>
          <option value="Engagement Activity">Engagement Activity</option>
          <option value="Hiring Activity">Hiring Activity</option>
        </select>
      </div>

      {/* Job Title (Required) */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">Job Title</label>
        <input
          type="text"
          name="title"
          value={filters.title}
          onChange={handleChange}
          placeholder="e.g., VP of Marketing"
          className={inputClass}
          required
        />
      </div>
    </div>
  );
}
