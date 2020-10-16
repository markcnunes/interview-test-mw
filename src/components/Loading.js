import React from "react";

export default function Loading() {
  return (
    <div className="loading">
      <div className="loader">
        <svg className="circular-loader" viewBox="25 25 50 50">
          <circle
            className="loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="#70c542"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
