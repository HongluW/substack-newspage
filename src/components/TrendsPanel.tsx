import React, { useState } from "react";

const trends = [
  {
    category: "Newsletters · Trending",
    title: "AI Writing Tools",
    subtitle: "Trending with WriteWithAI, ContentCraft",
    posts: "45.2K posts",
  },
  {
    category: "Technology · Trending",
    title: "Web3 & Creator Economy",
    subtitle: "Trending with CryptoNews, CreatorFund",
    posts: "89.7K posts",
  },
  {
    category: "Business · Trending",
    title: "Substack Monetization",
    subtitle: "Trending with NewsletterGuru, PaidNewsletter",
    posts: "156.3K posts",
  },
  {
    category: "Writing · Trending",
    title: "Long-form Journalism",
    subtitle: "Trending with DeepDive, InvestigativeNews",
    posts: "67.8K posts",
  },
];

export default function TrendsPanel() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed top-0 right-0 h-full flex items-center z-50">
      <div
        className={`relative my-8 flex items-center transition-all duration-300 ease-in-out ${hovered ? 'w-[350px]' : 'w-10'}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ height: '80vh' }}
      >
        {/* Panel content */}
        <div
          className={`bg-black border border-gray-900 rounded-2xl text-white shadow-lg h-full transition-all duration-300 ease-in-out flex flex-col overflow-hidden ${hovered ? 'w-[320px] p-6 opacity-100' : 'w-0 p-0 opacity-0 overflow-hidden'}`}
        >
          <div className={`overflow-hidden ${hovered ? 'block' : 'hidden'}`}>
            <h2 className="text-2xl font-extrabold mb-6 overflow-hidden text-ellipsis">What's Happening</h2>
            {/* Promoted */}
            <div className="mb-6 overflow-hidden">
              <div className="text-lg font-bold break-words overflow-wrap-anywhere">Substack Pro Writing Tools</div>
              <div className="text-gray-400 text-sm break-words overflow-wrap-anywhere">Unlock advanced analytics, custom domains, and more. Upgrade now!</div>
              <div className="text-gray-400 text-xs flex items-center mt-1">
                <svg className="w-4 h-4 mr-1 inline-block flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 7l-10 10M7 7h10v10" /></svg>
                <span className="break-words overflow-wrap-anywhere">Promoted by Substack</span>
              </div>
            </div>
            {/* Trends */}
            <div className="space-y-6 overflow-hidden">
              {trends.map((trend, idx) => (
                <div key={idx} className="relative group overflow-hidden">
                  <div className="text-gray-400 text-xs mb-1 break-words overflow-wrap-anywhere pr-8">{trend.category}</div>
                  <div className="font-bold text-base leading-tight break-words overflow-wrap-anywhere pr-8">{trend.title}</div>
                  {trend.subtitle && (
                    <div className="text-sm text-blue-400 break-words overflow-wrap-anywhere pr-8">{trend.subtitle}</div>
                  )}
                  <div className="text-gray-400 text-xs mt-0.5 break-words overflow-wrap-anywhere pr-8">{trend.posts}</div>
                  <button className="absolute top-2 right-0 text-gray-400 hover:text-gray-200 p-1 rounded-full transition-colors flex-shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                  </button>
                </div>
              ))}
            </div>
            <a href="#" className="block text-blue-400 hover:underline text-sm mt-6 break-words overflow-wrap-anywhere">Show more</a>
          </div>
        </div>
        {/* Collapsed handle - always present */}
        <div className={`w-10 h-40 bg-gray-900 rounded-l-2xl flex items-center justify-center cursor-pointer shadow-lg transition-opacity duration-300 ${hovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <span className="text-base text-gray-400 rotate-90 select-none font-semibold tracking-wide">Trends</span>
        </div>
      </div>
    </div>
  );
} 