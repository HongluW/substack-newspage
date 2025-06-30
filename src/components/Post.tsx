import React from "react";
import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

interface PostProps {
  author: string;
  date: string;
  content: string;
  avatarUrl: string;
  authorUrl: string;
  dateUrl: string;
}

export default function Post({ author, date, content, avatarUrl, authorUrl, dateUrl }: PostProps) {
  return (
    <article className="flex flex-col relative bg-black ml-0 md:ml-16 px-6 py-8 border-b border-gray-900">
      <div className="flex gap-3 items-start">
        {/* Avatar as link */}
        <a href={authorUrl} className="flex-shrink-0">
          <span className="block w-9 h-9 rounded-full overflow-hidden bg-gray-900 border border-gray-900">
            <img
              src={avatarUrl}
              alt={`${author}'s avatar`}
              width={36}
              height={36}
              className="object-cover w-9 h-9 rounded-full"
              draggable="false"
            />
          </span>
        </a>
        {/* Main content */}
        <div className="flex flex-col flex-grow min-w-0 gap-2">
          {/* Header row */}
          <div className="flex items-center min-w-0 gap-2 h-5">
            {/* Author as link */}
            <a href={authorUrl} className="font-medium text-white hover:underline truncate max-w-[120px]">{author}</a>
            {/* Date as link */}
            <a href={dateUrl} className="text-xs text-gray-400 hover:underline ml-1 truncate">{date}</a>
            {/* Subscribe button */}
            <button className="ml-2 px-2 py-0.5 text-xs rounded bg-transparent text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition-colors">Subscribe</button>
            {/* Ellipsis menu */}
            <button className="ml-2 p-1 rounded hover:bg-gray-900 text-gray-500">
              <EllipsisHorizontalIcon className="h-5 w-5" />
            </button>
          </div>
          {/* Post content */}
          <div className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">
            {content}
          </div>
          {/* Action buttons */}
          <div className="flex gap-4 pt-2">
            <button className="flex items-center gap-1 text-gray-400 hover:text-orange-500 text-xs">
              <HeartIcon className="h-5 w-5" />
              <span>35.9K</span>
            </button>
            <button className="flex items-center gap-1 text-gray-400 hover:text-orange-500 text-xs">
              <ChatBubbleLeftIcon className="h-5 w-5" />
              <span>268</span>
            </button>
            <button className="flex items-center gap-1 text-gray-400 hover:text-orange-500 text-xs">
              <ArrowPathRoundedSquareIcon className="h-5 w-5" />
              <span>4.9K</span>
            </button>
            <button className="flex items-center gap-1 text-gray-400 hover:text-orange-500 text-xs">
              <ArrowUpTrayIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
} 