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

export default function NewsLayout() {
  return (
    <div className="bg-black text-white pl-20 md:pl-80 pr-20 md:pr-48 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {newsArticles.map((article) => (
          <div key={article.id} className="flex flex-col space-y-4">
            {/* Category and Live indicator */}
            <div className="flex items-center space-x-2">
              {article.isLiveUpdate && (
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  LIVE UPDATES
                </span>
              )}
              {!article.isLiveUpdate && (
                <span className="text-gray-400 text-sm font-medium">
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
            <div className="text-xs text-gray-500 pt-2">
              {article.id === 1 && "Young Kwak/Reuters"}
              {article.id === 2 && "Ken Cedeno/UPI/Bloomberg/Getty Images"}
            </div>

            {/* Subtitle */}
            <p className="text-gray-300 text-base leading-relaxed">
              {article.subtitle}
            </p>

            {/* Bullet points */}
            <div className="space-y-3">
              {article.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm leading-relaxed hover:underline cursor-pointer">
                    {bullet.includes(':') ? (
                      <>
                        <span className="text-white">{bullet.split(':')[0]}:</span>
                        <span className="text-gray-300">{bullet.split(':').slice(1).join(':')}</span>
                      </>
                    ) : (
                      bullet
                    )}
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