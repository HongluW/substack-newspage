import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import CategoryTabs from './components/CategoryTabs';
import StoryCarousel from './components/StoryCarousel';
import PostComposer from './components/PostComposer';
import Post from './components/Post';
import TrendsPanel from './components/TrendsPanel';
import NewsLayout from './components/NewsLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const posts = [
  {
    author: 'lina',
    date: 'Jun 8',
    content:
      "the fastest way to kill motivation is to make your identity depend on the outcome. it's called ego involvement.\n\nwhen failing becomes failing as a person, your brain starts avoiding the whole thing. not because you don't care, but because you care too much.\n\nyou don't need lower standards. you need less self-worth tangled up in your goals.\n\nThe work gets easier when it's not about proving who you are.",
    avatarUrl:
      'https://substackcdn.com/image/fetch/$s_!G3y9!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb67d7b85-2bcd-4daa-9bfa-427e07f3cfed_1008x1008.jpeg',
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

function IdahoFirePage() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <TopBar />
        <div className="flex flex-col lg:flex-row items-start justify-between w-full px-6 md:px-20 lg:px-48 pt-10">
          {/* LEFT: Headline and byline */}
          <div className="flex-1 min-w-0">
            {/* LIVE UPDATES badge */}
            <div className="mb-4">
              <span className="bg-red-600 text-white text-base font-bold px-4 py-2 rounded">• LIVE UPDATES</span>
            </div>
            {/* Headline */}
            <h1 className="text-4xl font-extrabold leading-tight mb-6">Senate passes Trump's agenda bill after marathon voting session</h1>
            {/* Byline and avatars */}
            <div className="flex items-center space-x-4 mb-2">
              {/* Publication monogram logos */}
              <svg viewBox="0 0 64 64" className="w-12 h-12 rounded-full border-2 border-white -ml-2 first:ml-0 bg-blue-800" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fontWeight="bold" fill="white">DT</text>
              </svg>
              <svg viewBox="0 0 64 64" className="w-12 h-12 rounded-full border-2 border-white -ml-4 bg-red-700" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fontWeight="bold" fill="white">LL</text>
              </svg>
              <svg viewBox="0 0 64 64" className="w-12 h-12 rounded-full border-2 border-white -ml-4 bg-emerald-700" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fontWeight="bold" fill="white">TS</text>
              </svg>
              {/* Byline text */}
              <span className="text-lg text-gray-200 ml-4">Leading Coverage by <span className="font-semibold">The Daily Thread</span>, <span className="font-semibold">The Live Lens</span> and <span className="font-semibold">The Signal</span></span>
            </div>
            <div className="text-gray-400 text-base mb-4">Updated 8:15 PM EDT, Tue July 1, 2025</div>
          </div>
          {/* RIGHT: Image only, no play button */}
          <div className="flex-shrink-0 w-full lg:w-[420px] mt-8 lg:mt-0 lg:ml-12">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img src="/agendabill.jpg" alt="Senate Passes Trump's Megabill" className="w-full h-80 object-cover" />
            </div>
            <div className="text-gray-400 text-sm pt-2 pl-1">Source: Getty Images</div>
          </div>
        </div>
        {/* Side-by-side: Community Sourced Notes & Top Reporting Threads */}
        <div className="w-full px-6 md:px-40 lg:px-48 mt-12 mb-12 flex flex-col lg:flex-row gap-12 items-start justify-center">
          {/* Community Sourced Notes */}
          <div className="flex-1 min-w-[320px] max-w-xl">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Community Sourced Notes</h2>
            <div className="bg-composer-bg border-2 border-gray-900 rounded-2xl p-6 text-gray-300 text-base">
              <p>See what local readers, reporters, and experts are sharing about this story. Notes are fact-checked and voted up by the community.</p>
            </div>
          </div>
          {/* Divider */}
          <div className="hidden lg:flex h-full mx-6">
            <div className="w-px" style={{ minHeight: '220px', backgroundColor: '#f3f4f6', opacity: 0.5 }} />
          </div>
          {/* Top Reporting Threads */}
          <div className="flex-1 min-w-[320px] max-w-xl">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Top Reporting Threads</h2>
            <div className="flex flex-col gap-4">
              <button className="p-6 bg-composer-bg hover:bg-composer-hover transition-colors rounded-full border-2 border-gray-900 text-center text-gray-200 text-lg font-bold focus:outline-none">
                The Daily Thread
              </button>
              <button className="p-6 bg-composer-bg hover:bg-composer-hover transition-colors rounded-full border-2 border-gray-900 text-center text-gray-200 text-lg font-bold focus:outline-none">
                The Live Lens
              </button>
              <button className="p-6 bg-composer-bg hover:bg-composer-hover transition-colors rounded-full border-2 border-gray-900 text-center text-gray-200 text-lg font-bold focus:outline-none">
                The Signal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/idaho-fire" element={<IdahoFirePage />} />
      </Routes>
    </Router>
  );
}

export default App;
