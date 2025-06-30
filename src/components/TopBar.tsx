import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-black text-white px-10 h-20 border-b border-gray-900 ml-0 md:ml-20">
      {/* Left title */}
      <h1 className="text-lg font-semibold hidden sm:block">Home</h1>

      {/* Search input */}
      <div className="relative flex-1 flex justify-center px-4">
        <input
          type="text"
          placeholder="Search Substack"
          className="w-full max-w-lg bg-gray-900 text-sm placeholder-gray-400 text-white rounded-md py-3 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-orange-500 border border-gray-900 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-6 top-1/2 -translate-y-1/2" />
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-6">
        <button className="bg-gray-900 px-5 py-3 rounded-md text-base font-semibold hover:bg-gray-800">Dashboard</button>
        <img
          src={`https://i.pravatar.cc/32`}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
} 