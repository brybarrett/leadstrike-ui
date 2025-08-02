// src/ReferralPanel.jsx

import React from "react";

function ReferralPanel({ userEmail }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Referral Tools</h2>
      <p className="mb-2">Referral Link:</p>
      <code className="bg-gray-200 p-1 rounded text-sm">
        https://leadstrike.com/referral?user={userEmail}
      </code>
    </div>
  );
}

export default ReferralPanel;
