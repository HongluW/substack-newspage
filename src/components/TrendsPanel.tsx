import React from "react";

const trends = [
  {
    category: "Entertainment · Trending",
    title: "Huda",
    subtitle: "Trending with Andreina",
    posts: "121K posts",
  },
  {
    category: "US · Trending",
    title: "Idaho",
    subtitle: "Trending with Canfield Mountain, Sheriff",
    posts: "217K posts",
  },
  {
    category: "K-Pop · Trending",
    title: "#LEEKNOWxGUCCI",
    subtitle: "",
    posts: "59.2K posts",
  },
];

export default function TrendsPanel() {
  return (
    <div className="flex w-full">
      <aside className="w-full max-w-xs ml-auto my-8">
        <div className="bg-black border border-gray-900 rounded-2xl p-6 text-white shadow-lg">
          <h2 className="text-2xl font-extrabold mb-6">What's Happening</h2>
          {/* Promoted */}
          <div className="mb-6">
            <div className="text-lg font-bold">Jurassic World Rebirth</div>
            <div className="text-gray-400 text-sm">Only in theaters Wednesday. Get tickets now!</div>
            <div className="text-gray-400 text-xs flex items-center mt-1">
              <svg className="w-4 h-4 mr-1 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 7l-10 10M7 7h10v10" /></svg>
              Promoted by Jurassic World
            </div>
          </div>
          {/* Trends */}
          <div className="space-y-6">
            {trends.map((trend, idx) => (
              <div key={idx} className="relative group">
                <div className="text-gray-400 text-xs mb-1">{trend.category}</div>
                <div className="font-bold text-base leading-tight">{trend.title}</div>
                {trend.subtitle && (
                  <div className="text-sm text-blue-400">{trend.subtitle}</div>
                )}
                <div className="text-gray-400 text-xs mt-0.5">{trend.posts}</div>
                <button className="absolute top-2 right-0 text-gray-400 hover:text-gray-200 p-1 rounded-full transition-colors">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                </button>
              </div>
            ))}
          </div>
          <a href="#" className="block text-blue-400 hover:underline text-sm mt-6">Show more</a>
        </div>
      </aside>
    </div>
  );
} 