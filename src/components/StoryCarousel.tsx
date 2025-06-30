import React from "react";

const stories = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  title: `Story Title ${i + 1}`,
  subtitle: `${5 + i}m read`,
}));

export default function StoryCarousel() {
  return (
    <div className="bg-black border-b border-gray-900 py-4 pl-20 md:pl-80 pr-20 md:pr-48">
      <div className="overflow-x-auto">
        <div className="flex space-x-4 px-4">
          {stories.map((story) => (
            <div
              key={story.id}
              className="relative w-44 flex-shrink-0 cursor-pointer"
            >
              <img
                src={`https://picsum.photos/seed/${story.id}/200/120`}
                alt="story"
                className="h-24 w-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black/40 rounded-md" />
              <div className="absolute bottom-2 left-2 text-white text-xs space-y-0.5">
                <p className="font-semibold truncate">{story.title}</p>
                <p className="flex items-center space-x-1">
                  <span className="h-1 w-1 rounded-full bg-white inline-block" />
                  <span>{story.subtitle}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 