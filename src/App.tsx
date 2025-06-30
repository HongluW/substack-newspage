import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import CategoryTabs from './components/CategoryTabs';
import StoryCarousel from './components/StoryCarousel';
import PostComposer from './components/PostComposer';
import Post from './components/Post';

function App() {
  const samplePost = {
    author: 'lina',
    date: 'Jun 8',
    content:
      "the fastest way to kill motivation is to make your identity depend on the outcome. it's called ego involvement.\n\nwhen failing becomes failing as a person, your brain starts avoiding the whole thing. not because you don't care, but because you care too much.\n\nyou don't need lower standards. you need less self-worth tangled up in your goals.\n\nThe work gets easier when it's not about proving who you are.",
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Sidebar />
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <CategoryTabs />
        <StoryCarousel />
        <PostComposer />
        {/* Posts list */}
        <Post {...samplePost} />
      </div>
    </div>
  );
}

export default App;
