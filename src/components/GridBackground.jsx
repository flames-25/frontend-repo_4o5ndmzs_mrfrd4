import React from 'react';

// A lightweight grid background that works well with Tailwind
// Renders a subtle grid using CSS gradients
export default function GridBackground({ className = '' }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)] ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px, 32px 32px",
        backgroundPosition: "0 0, 0 0",
      }}
    />
  );
}
