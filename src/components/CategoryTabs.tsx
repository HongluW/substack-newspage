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

const trendingBar = [
  { label: 'Live Updates:', value: 'Idaho shooting', className: 'text-orange-500 font-bold' },
  { label: 'Trending:', value: '‘Alligator Alcatraz’', className: 'font-bold' },
  { label: '', value: 'Iran enriching uranium', className: '' },
  { label: '', value: 'Los Angeles Dodgers', className: '' },
  { label: '', value: "Russia's summer offensive in Ukraine", className: '' },
];

export default function CategoryTabs({ activeTab, setActiveTab, onNewsToggle }: CategoryTabsProps) {
  const [showBanner, setShowBanner] = React.useState(true);

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
      {/* Red gradient banner and Trending bar only in News view */}
      {activeTab === 'News' && (
        <>
          {showBanner && (
            <div className="relative w-full rounded-b-lg overflow-hidden mb-2">
              <div className="bg-gradient-to-r from-orange-500 to-orange-500 px-6 py-4 flex flex-col">
                <span className="font-extrabold text-white text-lg mb-1">HAPPENING NOW</span>
                <div className="flex items-center">
                  <span
                    className="text-white text-base hover:underline cursor-pointer transition-all flex-1"
                    onClick={() => alert('Clicked: Senate holds vote-a-rama on President Trump’s sweeping domestic agenda bill. Watch live')}
                  >
                    Senate holds vote-a-rama on President Trump’s sweeping domestic agenda bill. Engage live
                  </span>
                  <button onClick={() => setShowBanner(false)} className="ml-4 text-white text-2xl font-light hover:opacity-80 focus:outline-none">
                    &times;
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="w-full bg-transparent px-4 py-2 flex items-center space-x-4 overflow-x-auto border-b border-gray-900 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {trendingBar.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx !== 0 && <span className="text-gray-300 mx-2">|</span>}
                <span
                  className={'whitespace-nowrap hover:underline cursor-pointer transition-all' + (idx === 0 ? ' font-bold' : '')}
                  onClick={() => alert(`Clicked: ${item.value}`)}
                >
                  {item.label && (
                    <span className={idx === 0 ? 'text-orange-500' : ''}>{item.label} </span>
                  )}
                  {item.value}
                </span>
              </React.Fragment>
            ))}
          </div>
        </>
      )}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}