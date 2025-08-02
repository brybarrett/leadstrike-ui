// src/LandingPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import LeadTable from "./LeadTable";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e1525] via-[#111827] to-[#0f172a] text-white px-4 pb-20">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 backdrop-blur-sm bg-black/50 border-b border-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-lg tracking-wide flex items-center gap-2">
            <span className="text-blue-500 text-xl">⚡</span> LEADSTRIKE
          </div>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 text-sm font-medium rounded-md text-white shadow"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="text-center mt-16 px-4">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Get 5 leads. <span className="text-blue-500">Geo-targeted.</span>
          <br />
          SIC-matched.
        </h1>
      </div>

      {/* Dropdown Filters */}
      <div className="mt-10 w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-center px-4">
        <select className="w-full md:w-auto px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white">
          <option>Sacramento, CA</option>
          <option>Austin, TX</option>
          <option>Chicago, IL</option>
        </select>
        <select className="w-full md:w-auto px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white">
          <option>Medical Offices</option>
          <option>Fintech Companies</option>
          <option>Cybersecurity</option>
        </select>
        <select className="w-full md:w-auto px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white">
          <option>Operations Director</option>
          <option>IT Manager</option>
          <option>Sales Lead</option>
        </select>
      </div>

      {/* Results Table */}
      <div className="mt-16 px-4">
        <LeadTable />
      </div>
    </div>
  );
}

export default LandingPage;
