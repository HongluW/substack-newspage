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
    avatarUrl:
      'https://substackcdn.com/image/fetch/$s_!G2m7!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb67d7b85-2bcd-4daa-9bfa-427e07f3cfed_1008x1008.jpeg',
    authorUrl: '/@linajs?utm_source=substack-feed-item',
    dateUrl: '/@linajs/note/c-123888051?',
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <CategoryTabs />
        <StoryCarousel />
        <div className="flex justify-center w-full">
          <div className="flex flex-col w-full max-w-xl">
            <PostComposer />
            {/* Posts list */}
            <Post {...samplePost} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
