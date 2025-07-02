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
    author: 'PoliticalWatcher',
    date: 'Jul 1',
    content:
      "Just watched the Senate vote live - this agenda bill passing 51-49 is historic. The infrastructure spending alone will reshape how we think about federal investment. \n\nWhat's most interesting is how senators negotiated those last-minute funding changes. Real democracy in action, even if messy.",
    avatarUrl:
      'https://randomuser.me/api/portraits/men/45.jpg',
    authorUrl: '/@politicalwatcher',
    dateUrl: '/@politicalwatcher/note/c-123888051?',
  },
  {
    author: 'EconAnalyst',
    date: 'Jul 1',
    content:
      "The economic implications of this bill are staggering. State-by-state breakdown shows my home state getting $2.3B in infrastructure funding over 5 years.\n\nBut the real question: can we implement these changes effectively? Timeline looks aggressive.",
    avatarUrl:
      'https://randomuser.me/api/portraits/women/32.jpg',
    authorUrl: '/@econanalyst',
    dateUrl: '/@econanalyst/note/c-123888052?',
  },
  {
    author: 'CapitolReporter',
    date: 'Jul 1',
    content:
      "Been covering Congress for 15 years. Never seen a vote-a-rama session this intense. 12+ hours of amendments, negotiations happening in real-time.\n\nThe dispatch audio from tonight tells the whole story. This is how legislation actually gets made.",
    avatarUrl:
      'https://randomuser.me/api/portraits/women/28.jpg',
    authorUrl: '/@capitolreporter',
    dateUrl: '/@capitolreporter/note/c-123888053?',
  },
  {
    author: 'CivicEngagement',
    date: 'Jul 1',
    content:
      "🏛️ Senate Bill Analysis\n\nWhat this means for everyday Americans: expanded healthcare access, green energy jobs, and updated infrastructure. The polling data shows 67% support for individual components.\n\nDemocracy works when we stay informed and engaged.",
    avatarUrl:
      'https://randomuser.me/api/portraits/men/52.jpg',
    authorUrl: '/@civicengagement',
    dateUrl: '/@civicengagement/note/c-123888054?',
  },
];

function IdahoFirePage() {
  const [expandedThread, setExpandedThread] = useState<string | null>(null);
  const [hoveredTime, setHoveredTime] = useState<string | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [currentTimeIndex, setCurrentTimeIndex] = useState(3); // Start at "Live" stage
  const [newUpdates, setNewUpdates] = useState<string[]>([]);
  const [chatMessages, setChatMessages] = useState<Array<{
    id: number;
    user: string;
    message: string;
    time: string;
    avatar: string;
    isOwn?: boolean;
  }>>([
    { id: 1, user: 'PoliticalWatcher', message: 'This is historic! Senate working through the night', time: '11:45 PM', avatar: 'PW' },
    { id: 2, user: 'CapitolReporter', message: 'Just saw 3 senators head to the cloakroom for negotiations', time: '11:47 PM', avatar: 'CR' },
    { id: 3, user: 'EconAnalyst', message: 'The infrastructure spending allocation is the key issue here', time: '11:52 PM', avatar: 'EA' },
    { id: 4, user: 'LiveViewer', message: 'Anyone else watching C-SPAN right now? Intense debate', time: '11:58 PM', avatar: 'LV' },
    { id: 5, user: 'CivicEngagement', message: 'This will impact every state differently - following the amendments closely', time: '12:03 AM', avatar: 'CE' }
  ]);
  const [newChatMessage, setNewChatMessage] = useState('');
  const [onlineCount, setOnlineCount] = useState(1247);

  const csnTimelineSteps = [
    { time: '2:47 PM EST', label: 'Procedural Vote', completed: true },
    { time: '6:23 PM EST', label: 'Negotiations', completed: true },
    { time: '11:15 PM EST', label: 'Final Drafting', completed: true },
    { time: 'Live', label: 'Updates', completed: false, isLive: true }
  ];

  const handleThreadClick = (threadName: string) => {
    setExpandedThread(expandedThread === threadName ? null : threadName);
  };

  const handleTimelineClick = (index: number) => {
    setCurrentTimeIndex(index);
    // Scroll to relevant section based on timeline step
    const targetTime = csnTimelineSteps[index].time;
    const element = document.querySelector(`[data-time="${targetTime}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Update the story view based on selected timeline step
    // This allows users to "travel" through the story timeline
    console.log(`Navigated to: ${csnTimelineSteps[index].label} at ${targetTime}`);
  };

  const handleSendMessage = () => {
    if (newChatMessage.trim()) {
      const newMsg = {
        id: chatMessages.length + 1,
        user: 'You',
        message: newChatMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: 'YU',
        isOwn: true
      };
      setChatMessages([...chatMessages, newMsg]);
      setNewChatMessage('');
    }
  };

  // Simulate live updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      // Randomly add new update indicators
      if (Math.random() > 0.7) {
        const updateId = `update-${Date.now()}`;
        setNewUpdates(prev => [...prev, updateId]);
        setTimeout(() => {
          setNewUpdates(prev => prev.filter(id => id !== updateId));
        }, 3000);
      }
      
      // Simulate new chat messages
      if (Math.random() > 0.85) {
        const users = ['NewsHound', 'PolicyExpert', 'Viewer123', 'DCInsider', 'FactChecker'];
        const messages = [
          'This is moving fast!',
          'Key vote coming up',
          'Anyone have the amendment text?',
          'Historic night in the Senate',
          'Following this closely',
          'What time is the final vote?'
        ];
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const newMsg = {
          id: Date.now(),
          user: randomUser,
          message: randomMessage,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          avatar: randomUser.substring(0, 2).toUpperCase()
        };
        setChatMessages(prev => [...prev.slice(-20), newMsg]); // Keep last 20 messages
      }
      
      // Simulate online count fluctuation
      setOnlineCount(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const parseTime = (timeStr: string) => {
    if (timeStr === 'Live') return 25; // Treat "Live" as very late
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let hour24 = hours;
    if (period === 'PM' && hours !== 12) hour24 += 12;
    if (period === 'AM' && hours === 12) hour24 = 0;
    return hour24 + minutes / 60;
  };

  const isTimeHighlighted = (timeStr: string, currentSection: string) => {
    if (!hoveredTime || !hoveredSection) return false;
    // Highlight the currently hovered timestamp
    if (hoveredTime === timeStr) return true;
    // Highlight across sections (CSN <-> TRT), not within the same section
    if (hoveredSection === currentSection) return false;
    const hoveredHour = parseTime(hoveredTime);
    const currentHour = parseTime(timeStr);
    return Math.abs(hoveredHour - currentHour) <= 2; // Within 2 hours
  };

  const handleTimeHover = (timeStr: string, section: string) => {
    setHoveredTime(timeStr);
    setHoveredSection(section);
  };

  const handleTimeLeave = () => {
    setHoveredTime(null);
    setHoveredSection(null);
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <TopBar />
        {/* Story Progress Bar */}
        <div className="w-full bg-gray-900 border-b border-gray-800 px-6 md:px-20 lg:px-48 py-4">
          <div className="flex items-center justify-center max-w-4xl mx-auto">
            <div className="flex-1 max-w-3xl">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-400 font-medium">Story Progress</div>
                <div className="text-sm text-gray-400">
                  {Math.round((currentTimeIndex / (csnTimelineSteps.length - 1)) * 100)}% Complete
                </div>
              </div>
              <div className="relative">
                {/* Timeline Steps Container */}
                <div className="flex justify-between relative px-2">
                  {/* Progress Line - runs between first and last circle centers */}
                  <div 
                    className="absolute top-2 h-0.5 bg-gray-700"
                    style={{ 
                      left: '8px', 
                      right: '8px'
                    }}
                  />
                  <div 
                    className="absolute top-2 h-0.5 bg-orange-500 transition-all duration-1000"
                    style={{ 
                      left: '8px',
                      width: currentTimeIndex === 0 ? '0px' : `calc(${(currentTimeIndex / (csnTimelineSteps.length - 1)) * 100}% - 16px + ${(currentTimeIndex / (csnTimelineSteps.length - 1)) * 16}px)`
                    }}
                  />
                  {csnTimelineSteps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => handleTimelineClick(index)}
                      className="flex flex-col items-center group cursor-pointer relative -mx-2"
                    >
                      <div 
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 relative z-10 ${
                          index < currentTimeIndex
                            ? 'bg-orange-500 border-orange-500' 
                            : index === currentTimeIndex
                              ? step.isLive 
                                ? 'bg-orange-500 border-orange-500 animate-pulse' 
                                : 'bg-orange-500 border-orange-500'
                              : 'bg-gray-700 border-gray-600'
                        } ${currentTimeIndex === index ? 'scale-125 shadow-lg shadow-orange-500/50' : 'hover:scale-110'}`}
                      />
                      <div className="mt-3 text-xs text-gray-400 group-hover:text-white transition-colors text-center">
                        <div className="font-medium whitespace-nowrap">{step.time}</div>
                        <div className="text-gray-500 whitespace-nowrap">{step.label}</div>
                      </div>
                      {step.isLive && (
                        <div className="absolute -top-1 -right-1 z-20">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                          <div className="absolute top-0 w-2 h-2 bg-red-500 rounded-full" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between w-full px-6 md:px-20 lg:px-48 pt-10">
          {/* LEFT: Headline and byline */}
          <div className="flex-1 min-w-0">
            {/* LIVE UPDATES badge */}
            <div className="mb-4">
              <span className="bg-red-600 text-white text-base font-bold px-4 py-2 rounded animate-pulse">
                • LIVE UPDATES
                <span className="ml-2 inline-block w-2 h-2 bg-white rounded-full animate-ping" />
              </span>
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
            <p className="text-gray-400 text-sm mb-6">These headlines are AI generated based on top community-engaging reports. Learn more.</p>
            <div className="bg-composer-bg border-2 border-gray-900 rounded-2xl p-6">
              <div className="relative flex flex-col">
                {/* Vertical line through all circles */}
                <div className="absolute left-2.5 w-0.5 bg-gray-300 z-0" style={{top: '10px', height: 'calc(100% - 2.5rem)'}} />
                {/* Step 1 */}
                <div className="flex items-center relative mb-8" data-time="2:47 PM EST">
                  <div className="w-5 h-5 rounded-full bg-orange-400 border-2 border-white shadow relative z-10 flex-shrink-0" />
                  <div className="ml-6 relative">
                    <div 
                      className={`text-xs text-gray-600 mb-1 opacity-85 cursor-pointer transition-all duration-200 ${isTimeHighlighted('2:47 PM EST', 'CSN') ? 'opacity-100 text-orange-400' : ''}`}
                      onMouseEnter={() => handleTimeHover('2:47 PM EST', 'CSN')}
                      onMouseLeave={handleTimeLeave}
                    >
                      2:47 PM EST
                    </div>
                    <div className="text-gray-200 text-base hover:text-white hover:underline cursor-pointer transition-colors">Senate procedural vote began at 10 PM EST, with multiple amendments proposed during the marathon session.</div>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="flex items-center relative mb-8" data-time="6:23 PM EST">
                  <div className="w-5 h-5 rounded-full bg-orange-400 border-2 border-white shadow relative z-10 flex-shrink-0" />
                  <div className="ml-6 relative">
                    <div 
                      className={`text-xs text-gray-600 mb-1 opacity-85 cursor-pointer transition-all duration-200 ${isTimeHighlighted('6:23 PM EST', 'CSN') ? 'opacity-100 text-orange-400' : ''}`}
                      onMouseEnter={() => handleTimeHover('6:23 PM EST', 'CSN')}
                      onMouseLeave={handleTimeLeave}
                    >
                      6:23 PM EST
                    </div>
                    <div className="text-gray-200 text-base hover:text-white hover:underline cursor-pointer transition-colors">Key swing senators negotiated last-minute changes to infrastructure funding allocations before final vote.</div>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="flex items-center relative mb-8" data-time="11:15 PM EST">
                  <div className="w-5 h-5 rounded-full bg-orange-400 border-2 border-white shadow relative z-10 flex-shrink-0" />
                  <div className="ml-6 relative">
                    <div 
                      className={`text-xs text-gray-600 mb-1 opacity-85 cursor-pointer transition-all duration-200 ${isTimeHighlighted('11:15 PM EST', 'CSN') ? 'opacity-100 text-orange-400' : ''}`}
                      onMouseEnter={() => handleTimeHover('11:15 PM EST', 'CSN')}
                      onMouseLeave={handleTimeLeave}
                    >
                      11:15 PM EST
                    </div>
                    <div className="text-gray-200 text-base hover:text-white hover:underline cursor-pointer transition-colors">Congressional staff worked through the night to finalize bill language as debate continued on the Senate floor.</div>
                  </div>
                </div>
                {/* Step 4 - Empty/Updating */}
                <div className="flex items-center relative animate-pulse" data-time="Live">
                  <div className="w-5 h-5 rounded-full bg-transparent border-2 border-gray-400 relative z-10 flex-shrink-0" />
                  <div className="ml-6 relative">
                    <div 
                      className={`text-xs text-gray-600 mb-1 opacity-85 cursor-pointer transition-all duration-200 animate-pulse ${isTimeHighlighted('Live', 'CSN') ? 'opacity-100 text-orange-400' : ''}`}
                      onMouseEnter={() => handleTimeHover('Live', 'CSN')}
                      onMouseLeave={handleTimeLeave}
                    >
                      Live
                      <span className="ml-1 inline-block w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                    </div>
                    <div className="text-gray-400 text-base italic">updating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="hidden lg:flex h-full mx-6">
            <div className="w-px" style={{ minHeight: '220px', backgroundColor: '#f3f4f6', opacity: 0.5 }} />
          </div>
          {/* Top Reporting Threads */}
          <div className="flex-1 min-w-[320px] max-w-xl">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Top Reporting Threads</h2>
            <p className="text-gray-400 text-sm mb-6">These are top reporting newsletters of this breaking news supported from our reader base. Learn more.</p>
            <div className="flex flex-col gap-4">
              {/* The Daily Thread */}
              <div className={`bg-composer-bg border-2 border-gray-900 rounded-md transition-all duration-500 overflow-hidden ${expandedThread === 'The Daily Thread' ? 'max-h-96' : 'max-h-16'}`}>
                <button 
                  className={`w-full py-2 px-6 hover:bg-composer-hover transition-colors text-center text-gray-200 text-lg font-bold focus:outline-none ${expandedThread === 'The Daily Thread' ? 'border-b border-gray-900' : ''}`}
                  onClick={() => handleThreadClick('The Daily Thread')}
                >
                  The Daily Thread
                  {newUpdates.length > 0 && (
                    <span className="ml-2 inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  )}
                </button>
                {expandedThread === 'The Daily Thread' && (
                  <div className="px-6 pt-2 pb-6 text-gray-300 text-sm space-y-3 bg-gray-800">
                    <div>
                      <div 
                        className={`text-xs text-gray-600 opacity-85 mb-1 text-left cursor-pointer transition-all duration-200 ${isTimeHighlighted('2:55 PM EST', 'TRT') ? 'opacity-100 text-orange-400' : ''}`}
                        onMouseEnter={() => handleTimeHover('2:55 PM EST', 'TRT')}
                        onMouseLeave={handleTimeLeave}
                      >
                        2:55 PM EST
                      </div>
                      <p className="hover:underline cursor-pointer">• Breaking: Senate passes comprehensive domestic agenda bill 51-49</p>
                    </div>
                    <div>
                      <div 
                        className={`text-xs text-gray-600 opacity-85 mb-1 text-left cursor-pointer transition-all duration-200 ${isTimeHighlighted('3:10 PM EST', 'TRT') ? 'opacity-100 text-orange-400' : ''}`}
                        onMouseEnter={() => handleTimeHover('3:10 PM EST', 'TRT')}
                        onMouseLeave={handleTimeLeave}
                      >
                        3:10 PM EST
                      </div>
                      <p className="hover:underline cursor-pointer">• Key provisions include infrastructure spending and tax reforms</p>
                    </div>
                    <div>
                      <div 
                        className={`text-xs text-gray-600 opacity-85 mb-1 text-left cursor-pointer transition-all duration-200 ${isTimeHighlighted('4:45 PM EST', 'TRT') ? 'opacity-100 text-orange-400' : ''}`}
                        onMouseEnter={() => handleTimeHover('4:45 PM EST', 'TRT')}
                        onMouseLeave={handleTimeLeave}
                      >
                        4:45 PM EST
                      </div>
                      <p className="hover:underline cursor-pointer">• Vote-a-rama session lasted over 12 hours with multiple amendments</p>
                    </div>
                    <div>
                      <div 
                        className={`text-xs text-gray-600 opacity-85 mb-1 text-left cursor-pointer transition-all duration-200 ${isTimeHighlighted('5:30 PM EST', 'TRT') ? 'opacity-100 text-orange-400' : ''}`}
                        onMouseEnter={() => handleTimeHover('5:30 PM EST', 'TRT')}
                        onMouseLeave={handleTimeLeave}
                      >
                        5:30 PM EST
                      </div>
                      <p className="hover:underline cursor-pointer">• Republican senators voice strong opposition to spending measures</p>
                    </div>
                  </div>
                )}
              </div>
              {/* The Live Lens */}
              <div className={`bg-composer-bg border-2 border-gray-900 rounded-md transition-all duration-500 overflow-hidden ${expandedThread === 'The Live Lens' ? 'max-h-96' : 'max-h-16'}`}>
                <button 
                  className={`w-full py-2 px-6 hover:bg-composer-hover transition-colors text-center text-gray-200 text-lg font-bold focus:outline-none ${expandedThread === 'The Live Lens' ? 'border-b border-gray-900' : ''}`}
                  onClick={() => handleThreadClick('The Live Lens')}
                >
                  The Live Lens
                </button>
                {expandedThread === 'The Live Lens' && (
                  <div className="px-6 pt-2 pb-6 text-gray-300 text-sm space-y-3 bg-gray-800">
                    <div>
                      <div 
                        className={`text-xs text-gray-600 opacity-85 mb-1 text-left cursor-pointer transition-all duration-200 ${isTimeHighlighted('6:40 PM EST', 'TRT') ? 'opacity-100 text-orange-400' : ''}`}
                        onMouseEnter={() => handleTimeHover('6:40 PM EST', 'TRT')}
                        onMouseLeave={handleTimeLeave}
                      >
                        6:40 PM EST
                      </div>
                      <p className="hover:underline cursor-pointer">• Live updates from Capitol Hill throughout the voting process</p>
                    </div>
                    <div>
                      <div 
                        className={`text-xs text-gray-600 opacity-85 mb-1 text-left cursor-pointer transition-all duration-200 ${isTimeHighlighted('7:05 PM EST', 'TRT') ? 'opacity-100 text-orange-400' : ''}`}
                        onMouseEnter={() => handleTimeHover('7:05 PM EST', 'TRT')}
                        onMouseLeave={handleTimeLeave}
                      >
                        7:05 PM EST
                      </div>
                      <p className="hover:underline cursor-pointer">• Analysis of amendment proposals and their implications</p>
                    </div>
                    <div>
                      <div 
                        className={`text-xs text-gray-600 opacity-85 mb-1 text-left cursor-pointer transition-all duration-200 ${isTimeHighlighted('8:20 PM EST', 'TRT') ? 'opacity-100 text-orange-400' : ''}`}
                        onMouseEnter={() => handleTimeHover('8:20 PM EST', 'TRT')}
                        onMouseLeave={handleTimeLeave}
                      >
                        8:20 PM EST
                      </div>
                      <p className="hover:underline cursor-pointer">• Interviews with key senators during brief recess periods</p>
                    </div>
                    <div>
                      <div 
                        className={`text-xs text-gray-600 opacity-85 mb-1 text-left cursor-pointer transition-all duration-200 ${isTimeHighlighted('9:00 PM EST', 'TRT') ? 'opacity-100 text-orange-400' : ''}`}
                        onMouseEnter={() => handleTimeHover('9:00 PM EST', 'TRT')}
                        onMouseLeave={handleTimeLeave}
                      >
                        9:00 PM EST
                      </div>
                      <p className="hover:underline cursor-pointer">• Real-time fact-checking of claims made during debates</p>
                    </div>
                  </div>
                )}
              </div>
              {/* The Signal */}
              <div className={`bg-composer-bg border-2 border-gray-900 rounded-md transition-all duration-500 overflow-hidden ${expandedThread === 'The Signal' ? 'max-h-96' : 'max-h-16'}`}>
                <button 
                  className={`w-full py-2 px-6 hover:bg-composer-hover transition-colors text-center text-gray-200 text-lg font-bold focus:outline-none ${expandedThread === 'The Signal' ? 'border-b border-gray-900' : ''}`}
                  onClick={() => handleThreadClick('The Signal')}
                >
                  The Signal
                </button>
                {expandedThread === 'The Signal' && (
                  <div className="px-6 pt-2 pb-6 text-gray-300 text-sm space-y-3 bg-gray-800">
                    <div>
                      <div 
                        className={`text-xs text-gray-600 opacity-85 mb-1 text-left cursor-pointer transition-all duration-200 ${isTimeHighlighted('11:30 PM EST', 'TRT') ? 'opacity-100 text-orange-400' : ''}`}
                        onMouseEnter={() => handleTimeHover('11:30 PM EST', 'TRT')}
                        onMouseLeave={handleTimeLeave}
                      >
                        11:30 PM EST
                      </div>
                      <p className="hover:underline cursor-pointer">• Economic impact analysis of the proposed legislation</p>
                    </div>
                    <div>
                      <div 
                        className={`text-xs text-gray-600 opacity-85 mb-1 text-left cursor-pointer transition-all duration-200 ${isTimeHighlighted('12:10 AM EST', 'TRT') ? 'opacity-100 text-orange-400' : ''}`}
                        onMouseEnter={() => handleTimeHover('12:10 AM EST', 'TRT')}
                        onMouseLeave={handleTimeLeave}
                      >
                        12:10 AM EST
                      </div>
                      <p className="hover:underline cursor-pointer">• State-by-state breakdown of funding allocations</p>
                    </div>
                    <div>
                      <div 
                        className={`text-xs text-gray-600 opacity-85 mb-1 text-left cursor-pointer transition-all duration-200 ${isTimeHighlighted('12:45 AM EST', 'TRT') ? 'opacity-100 text-orange-400' : ''}`}
                        onMouseEnter={() => handleTimeHover('12:45 AM EST', 'TRT')}
                        onMouseLeave={handleTimeLeave}
                      >
                        12:45 AM EST
                      </div>
                      <p className="hover:underline cursor-pointer">• Timeline for implementation of key policy changes</p>
                    </div>
                    <div>
                      <div 
                        className={`text-xs text-gray-600 opacity-85 mb-1 text-left cursor-pointer transition-all duration-200 ${isTimeHighlighted('1:20 AM EST', 'TRT') ? 'opacity-100 text-orange-400' : ''}`}
                        onMouseEnter={() => handleTimeHover('1:20 AM EST', 'TRT')}
                        onMouseLeave={handleTimeLeave}
                      >
                        1:20 AM EST
                      </div>
                      <p className="hover:underline cursor-pointer">• Public opinion polling data on individual bill components</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Posts Feed Section */}
        <div className="w-full px-6 md:px-40 lg:px-48 mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Community Discussion</h2>
          <div className="flex gap-8 items-start">
            {/* Left: Posts Feed */}
            <div className="flex-1 max-w-2xl">
              {posts.map((post, idx) => (
                <Post key={idx} {...post} />
              ))}
            </div>
            
            {/* Right: Live Group Chat */}
            <div className="w-80 bg-gray-900 rounded-lg border border-gray-700 flex flex-col h-96 sticky top-4">
              {/* Chat Header */}
              <div className="px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="font-semibold text-white">Live Discussion</h3>
                </div>
                <div className="text-xs text-gray-400">{onlineCount.toLocaleString()} online</div>
              </div>
              
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-thin scrollbar-thumb-gray-600">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex items-start space-x-2 ${msg.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      msg.isOwn ? 'bg-orange-500 text-white' : 'bg-gray-600 text-white'
                    }`}>
                      {msg.avatar}
                    </div>
                    <div className={`flex-1 ${msg.isOwn ? 'text-right' : ''}`}>
                      <div className="flex items-center space-x-1 text-xs text-gray-400 mb-1">
                        <span className="font-medium">{msg.user}</span>
                        <span>•</span>
                        <span>{msg.time}</span>
                      </div>
                      <div className={`text-sm p-2 rounded-lg max-w-xs ${
                        msg.isOwn 
                          ? 'bg-orange-600 text-white ml-auto' 
                          : 'bg-gray-800 text-gray-200'
                      }`}>
                        {msg.message}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Chat Input */}
              <div className="p-3 border-t border-gray-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newChatMessage}
                    onChange={(e) => setNewChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Join the discussion..."
                    className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Send
                  </button>
                </div>
              </div>
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
