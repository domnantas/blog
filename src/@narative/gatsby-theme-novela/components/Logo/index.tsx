import React from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
    <svg
      width="27"
      height="38"
      viewBox="0 0 27 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.75 4C28.0833 4 28.0833 34 4.75 34"
        stroke="#AB93C9"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="19" r="4" fill="#AB93C9" />
    </svg>
  );
}
