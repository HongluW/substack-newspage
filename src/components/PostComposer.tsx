import React from "react";

export default function PostComposer() {
  return (
    <div className="bg-gray-900 ml-0 md:ml-16 px-6 py-4 border-b border-gray-800">
      <div className="flex space-x-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 bg-gray-800 rounded-md py-3 px-4 text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>
    </div>
  );
} 