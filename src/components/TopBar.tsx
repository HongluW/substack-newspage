import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-gray-900 text-white px-6 h-14 border-b border-gray-800 ml-0 md:ml-16">
      {/* Left title */}
      <h1 className="text-lg font-semibold hidden sm:block">Home</h1>

      {/* Search input */}
      <div className="relative flex-1 flex justify-center px-4">
        <input
          type="text"
          placeholder="Search Substack"
          className="w-full max-w-lg bg-gray-800 text-sm placeholder-gray-400 text-white rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-6 top-1/2 -translate-y-1/2" />
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <button className="bg-gray-800 px-3 py-1.5 rounded-md text-sm hover:bg-gray-700">Dashboard</button>
        <img
          src={`https://i.pravatar.cc/32`}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
} 