import React, { useState } from "react";

interface CategoryTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onNewsToggle?: () => void;
}

const tabs = [
  "News",
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

export default function CategoryTabs({ activeTab, setActiveTab, onNewsToggle }: CategoryTabsProps) {
  return (
    <div className="bg-black pl-20 md:pl-80 pr-20 md:pr-48">
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex space-x-3 px-4 py-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                if (tab === "News" && onNewsToggle) onNewsToggle();
              }}
              className={`px-3 py-1.5 text-sm rounded-md whitespace-nowrap font-medium transition-colors ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 