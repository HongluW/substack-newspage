import { BookmarkIcon, HomeIcon, Squares2X2Icon, ChatBubbleLeftEllipsisIcon, BellIcon, PlusIcon } from "@heroicons/react/24/solid";
import React from "react";

const iconBase = "h-6 w-6 text-gray-400 hover:text-white transition-colors";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col items-center bg-black text-white w-16 py-4 space-y-6 fixed inset-y-0 left-0 z-20">
      {/* Top orange bookmark icon */}
      <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded text-white">
        <BookmarkIcon className="h-6 w-6" />
      </div>

      {/* Navigation icons */}
      <nav className="flex flex-col items-center space-y-6 mt-4">
        <HomeIcon className={iconBase} />
        <Squares2X2Icon className={iconBase} />
        <ChatBubbleLeftEllipsisIcon className={iconBase} />
        <BellIcon className={iconBase} />
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Plus button */}
      <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full mt-auto cursor-pointer hover:opacity-90 transition-opacity">
        <PlusIcon className="h-6 w-6 text-white" />
      </div>

      {/* User avatar placeholder */}
      <img
        src={`https://i.pravatar.cc/40`}
        alt="User avatar"
        className="w-8 h-8 rounded-full mt-6"
      />
    </aside>
  );
} 