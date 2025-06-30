import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import CategoryTabs from './components/CategoryTabs';
import StoryCarousel from './components/StoryCarousel';
import PostComposer from './components/PostComposer';
import Post from './components/Post';
import TrendsPanel from './components/TrendsPanel';
import NewsLayout from './components/NewsLayout';

const posts = [
  {
    author: 'lina',
    date: 'Jun 8',
    content:
      "the fastest way to kill motivation is to make your identity depend on the outcome. it's called ego involvement.\n\nwhen failing becomes failing as a person, your brain starts avoiding the whole thing. not because you don't care, but because you care too much.\n\nyou don't need lower standards. you need less self-worth tangled up in your goals.\n\nThe work gets easier when it's not about proving who you are.",
    avatarUrl:
      'https://substackcdn.com/image/fetch/$s_!G2m7!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb67d7b85-2bcd-4daa-9bfa-427e07f3cfed_1008x1008.jpeg',
    authorUrl: '/@linajs?utm_source=substack-feed-item',
    dateUrl: '/@linajs/note/c-123888051?',
  },
  {
    author: 'The Intellectual Edge',
    date: 'May 31',
    content:
      "Valuation: An Epistemological View\nBy Michael Mauboussin\n\nVery interesting read.",
    avatarUrl:
      'https://substackcdn.com/image/fetch/$s_!F3y9!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F788cdfc1-4b5b-4430-a9d7-5dd30caee03c_800x800.jpeg',
    authorUrl: '/@intellectualedge',
    dateUrl: '/@intellectualedge/note/c-123888052?',
  },
  {
    author: 'elena',
    date: 'Jun 7',
    content:
      "The native language of the mind is story.\n\nWe dream in stories, remember in stories, anticipate, hope, despair, believe, doubt, plan, revise, criticize, construct, gossip, learn, hate, and love by story.",
    avatarUrl:
      'https://substackcdn.com/image/fetch/$s_!H1k2!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff1e2d3c4-5b6a-7d8e-9f0a-1b2c3d4e5f6a_800x800.jpeg',
    authorUrl: '/@elena',
    dateUrl: '/@elena/note/c-123888053?',
  },
  {
    author: 'Football Economics',
    date: 'Jun 6',
    content:
      "⚽️ Football Economics\n\nHow much does it cost to win a championship? Let's break down the numbers.",
    avatarUrl:
      'https://randomuser.me/api/portraits/men/32.jpg',
    authorUrl: '/@footballecon',
    dateUrl: '/@footballecon/note/c-123888054?',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <CategoryTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === 'Home' && (
          <>
            <StoryCarousel />
            <div className="relative flex flex-col pt-3 pb-16 pl-4 md:pl-20 lg:pl-80 pr-0 md:pr-12 lg:pr-48 w-full">
              <div className="flex flex-col w-full max-w-xl mx-auto">
                <PostComposer />
                {/* Posts list */}
                {posts.map((post, idx) => (
                  <Post key={idx} {...post} />
                ))}
              </div>
            </div>
          </>
        )}
        {activeTab === 'News' && (
          <>
            <NewsLayout />
            <TrendsPanel />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
