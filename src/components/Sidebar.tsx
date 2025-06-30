import { BookmarkIcon, HomeIcon, Squares2X2Icon, ChatBubbleLeftEllipsisIcon, BellIcon, PlusIcon } from "@heroicons/react/24/solid";
import React from "react";

const iconBase = "h-6 w-6 text-gray-400 hover:text-white transition-colors";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col items-center bg-black text-white w-20 py-6 space-y-8 fixed inset-y-0 left-0 z-20">
      {/* Top orange bookmark icon */}
      <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded text-white">
        <BookmarkIcon className="h-7 w-7" />
      </div>

      {/* Navigation icons */}
      <nav className="flex flex-col items-center space-y-8 mt-6">
        <HomeIcon className="h-7 w-7 text-gray-400 hover:text-white transition-colors" />
        <Squares2X2Icon className="h-7 w-7 text-gray-400 hover:text-white transition-colors" />
        <ChatBubbleLeftEllipsisIcon className="h-7 w-7 text-gray-400 hover:text-white transition-colors" />
        <BellIcon className="h-7 w-7 text-gray-400 hover:text-white transition-colors" />
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Plus button */}
      <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full mt-auto cursor-pointer hover:opacity-90 transition-opacity">
        <PlusIcon className="h-7 w-7 text-white" />
      </div>

      {/* User avatar placeholder */}
      <img
        src={`https://i.pravatar.cc/40`}
        alt="User avatar"
        className="w-10 h-10 rounded-full mt-8"
      />
    </aside>
  );
} 