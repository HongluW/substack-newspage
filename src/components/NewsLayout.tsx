import React from "react";

const newsArticles = [
  {
    id: 1,
    category: "• LIVE UPDATES",
    title: "Idaho suspect 'intentionally' set fire in deadly ambush, sheriff says",
    subtitle: "Two firefighters were fatally shot and at least one more was injured while responding to a brush fire in Coeur d'Alene",
    bullets: [
      "Investigators will start building profile of dead man found with gun, former FBI agent says",
      "Hear dispatch audio from firefighter during active shooting 1:47"
    ],
    imageUrl: "/fire.png",
    videoIcon: true,
    isLiveUpdate: true
  },
  {
    id: 2,
    category: "ANALYSIS",
    title: "'One Big Beautiful Bill Act' is another power play for Trump",
    subtitle: "The president's signature legislation is an effort to change America and further cement his power",
    bullets: [
      "'Awful': Enter on how Americans feel about Trump's 'big, beautiful bill' 2:46",
      "Sen. Tillis announces he's not seeking reelection, a day after voting against Trump's bill"
    ],
    imageUrl: "/trump.png",
    videoIcon: true,
    isLiveUpdate: false
  }
];

const paperNames = [
  "The Daily Thread",
  "The Independent Lens",
  "The Signal",
  "The Dispatch",
  "The Insight Ledger",
  "The Open Quill",
  "The Modern Scribe",
  "The Perspective Press",
  "The New Narrative",
  "The Unfiltered Voice"
];

function getRandomLikeNumber(articleIdx: number, bulletIdx: number) {
  // Deterministic random for SSR/CSR consistency
  return 10 + ((articleIdx + 1) * (bulletIdx + 3) * 73) % 990;
}

export default function NewsLayout() {
  return (
    <div className="bg-black text-white pl-20 md:pl-80 pr-20 md:pr-48 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {newsArticles.map((article, articleIdx) => (
          <div key={article.id} className="flex flex-col space-y-4">
            {/* Category and Live indicator */}
            <div className="flex items-center space-x-2">
              {article.isLiveUpdate && (
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  LIVE UPDATES
                </span>
              )}
              {!article.isLiveUpdate && (
                <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded">
                  {article.category}
                </span>
              )}
            </div>

            {/* Main headline */}
            <h2 className="text-2xl font-bold leading-tight hover:underline cursor-pointer">
              {article.title}
            </h2>

            {/* Image with video play button */}
            <div className="relative">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              {article.videoIcon && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-60 rounded-full p-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            {/* Attribution directly below image */}
            <div className="text-xs text-white pt-2">
              {article.id === 1 && "Young Kwak/Reuters"}
              {article.id === 2 && "Ken Cedeno/UPI/Bloomberg/Getty Images"}
            </div>

            {/* Subtitle */}
            <p className="text-white text-base leading-relaxed">
              {article.subtitle}
            </p>

            {/* Bullet points */}
            <div className="space-y-3">
              {article.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-sm leading-relaxed hover:underline cursor-pointer inline">
                    <span className="font-bold text-orange-500 mr-2">{paperNames[(articleIdx * 5 + idx) % paperNames.length]}:</span>
                    {bullet.includes(':') ? (
                      <>
                        <span className="text-white">{bullet.split(':')[0]}:</span>
                        <span className="text-white">{bullet.split(':').slice(1).join(':')}</span>
                      </>
                    ) : (
                      bullet
                    )}
                    <span className="ml-1 align-middle text-orange-500 text-xs font-semibold inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-0.5"><path d="M2.75 11.5A1.75 1.75 0 0 1 4.5 9.75h2.1a.25.25 0 0 0 .25-.25V8.21c0-.36.13-.71.36-.98l3.2-3.8a1.25 1.25 0 0 1 2.19.87v2.25c0 .14.11.25.25.25h2.2a1.75 1.75 0 0 1 1.7 2.18l-1.2 5A1.75 1.75 0 0 1 15.1 16H7.5a2.5 2.5 0 0 1-2.45-2.01l-.7-2.8a.25.25 0 0 0-.24-.19h-1.1a1.75 1.75 0 0 1-1.75-1.5Z"/></svg>
                      {getRandomLikeNumber(articleIdx, idx)}
                    </span>
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
} 