import React from "react";
import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

interface PostProps {
  author: string;
  date: string;
  content: string;
}

export default function Post({ author, date, content }: PostProps) {
  return (
    <article className="bg-black ml-0 md:ml-16 px-6 py-6 border-b border-gray-900 text-gray-200">
      <div className="flex items-start space-x-4 mb-2">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-white">{author}</div>
            <button className="text-orange-500 text-sm font-medium">Subscribe</button>
          </div>
          <div className="text-xs text-gray-400">{date}</div>
        </div>
        {/* menu placeholder */}
        <div className="text-gray-500">•••</div>
      </div>
      <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-line mb-4">
        {content}
      </p>
      <div className="flex items-center space-x-6 text-xs text-gray-400">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
          <HeartIcon className="h-4 w-4" /> <span>35.9K</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
          <ChatBubbleLeftIcon className="h-4 w-4" /> <span>268</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
          <ArrowUpTrayIcon className="h-4 w-4" /> <span>4.9K</span>
        </div>
      </div>
    </article>
  );
} 