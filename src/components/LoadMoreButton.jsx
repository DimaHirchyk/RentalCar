import React from "react";

const LoadMoreButton = ({ onClick }) => (
  <div className="flex justify-center mt-6">
    <button
      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      onClick={onClick}>
      Load More
    </button>
  </div>
);

export default LoadMoreButton;
