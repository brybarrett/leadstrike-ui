import React, { useState } from 'react';
import Dropdowns from './Dropdowns';

export default function Dashboard() {
  const [filters, setFilters] = useState({
    location: '',
    industry: '',
    intent: '',
    title: '',
  });

  const [leads, setLeads] = useState([]);

  const handleSearch = () => {
    setLeads([
      {
        name: 'Sarah Blake',
        title: 'CTO',
        company: 'QuantumSoft',
        industry: 'Technology',
        location: 'San Francisco, CA',
        email: 's.blake@quantumsoft.com'
      },
      {
        name: 'Marcus Nguyen',
        title: 'Marketing Director',
        company: 'FinEdge Inc.',
        industry: 'Finance',
        location: 'Austin, TX',
        email: 'marcus@finedge.io'
      },
    ]);
  };

  const handleSimLoad = async () => {
    try {
      const response = await fetch('https://leadstrike-api.onrender.com/simulated-leads');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      console.log('🎭 Simulated leads loaded:', data);
      setLeads(data);
    } catch (err) {
      console.error('⚠️ Simulated leads fetch failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-8 mb-12">
          <div className="p-2 rounded-3xl bg-gradient-to-br from-[#0f172a] via-slate-800 to-[#1e293b] ring-1 ring-slate-700 shadow-lg">
            <img
              src="/logo.png"
              alt="LeadStrike Logo"
              className="h-44 w-44 object-contain rounded-2xl"
            />
          </div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Get 5 leads.<br />
            Geo-targeted.<br />
            SIC-matched.
          </h1>
        </div>

        <Dropdowns filters={filters} setFilters={setFilters} />

        <div className="mt-8 text-right flex flex-wrap justify-end gap-4">
          <button
            onClick={handleSearch}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-white hover:opacity-90 transition-all"
          >
            Find Leads
          </button>

          <button
            onClick={handleSimLoad}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-400 font-semibold text-black hover:opacity-90 transition-all"
          >
            🎭 Load Simulated Leads
          </button>
        </div>

        {/* Render Lead Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {leads.map((lead, index) => (
            <div
              key={index}
              className="bg-slate-800 text-white p-4 rounded-2xl shadow-lg w-full transition-transform transform hover:scale-105"
            >
              <h2 className="text-lg font-semibold">{lead.name}</h2>
              <p className="text-sm">
                <strong>Title:</strong> {lead.title}<br />
                <strong>Company:</strong> {lead.company}<br />
                <strong>Industry:</strong> {lead.industry}<br />
                <strong>Location:</strong> {lead.location}<br />
                <strong>Email:</strong> {lead.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
