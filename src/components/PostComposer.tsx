import React from "react";

export default function PostComposer() {
  return (
    <div className="bg-black ml-0 md:ml-16 px-6 py-8 border-b border-gray-900">
      <div className="flex flex-col relative">
        <button
          type="button"
          aria-label="New post"
          className="flex items-center gap-3 p-4 bg-gray-900 hover:bg-gray-800 transition-colors rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-900"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden bg-gray-900 border border-gray-900">
            <img
              src="https://substackcdn.com/image/fetch/$s_!F3y9!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F788cdfc1-4b5b-4430-a9d7-5dd30caee03c_800x800.jpeg"
              alt="Honglu Wang's avatar"
              width={36}
              height={36}
              className="object-cover w-9 h-9 rounded-full"
              draggable="false"
            />
          </span>
          <span className="flex-1 text-left text-gray-400 text-base leading-6 truncate">What's on your mind?</span>
        </button>
      </div>
    </div>
  );
} 