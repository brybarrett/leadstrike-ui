// src/lead_engine.js

export async function generateMockLeads({ industry, location, intent }) {
  console.log("[⚙️] Generating leads for:", industry, location, intent);

  // Simulate delay like a real API
  await new Promise((res) => setTimeout(res, 800));

  const companies = [
    "QuantumSoft",
    "NeuroLink Systems",
    "AetherTech",
    "Cortex Dynamics",
    "NovaOps"
  ];

  const titles = {
    "Recently Funded": "Chief Growth Officer",
    "Hiring Surge": "Talent Acquisition Lead",
    "Tech Stack Change": "VP of Engineering"
  };

  const domain = industry
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z]/gi, "")
    .slice(0, 10);

  return companies.map((company, i) => ({
    company: `${company} ${i + 1}`,
    title: titles[intent] || "Director of Ops",
    email: `contact${i + 1}@${domain}.com`,
    location,
    intent
  }));
}
