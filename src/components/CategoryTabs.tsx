import React, { useState } from "react";

const tabs = [
  "Home",
  "Following",
  "New Bestsellers",
  "Culture",
  "Technology",
  "Business",
  "Climate & Environment",
  "Travel",
  "Philosophy",
  "International",
  "Humor",
  "U.S. Politics",
  "Finance",
];

export default function CategoryTabs() {
  const [active, setActive] = useState("Home");
  return (
    <div className="overflow-x-auto whitespace-nowrap bg-black border-b border-gray-900 ml-0 md:ml-16">
      <div className="flex space-x-3 px-4 py-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-3 py-1.5 text-sm rounded-md whitespace-nowrap font-medium transition-colors ${
              active === tab
                ? "bg-orange-500 text-white"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
} 