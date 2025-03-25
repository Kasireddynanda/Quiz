// src/components/ui/Button.js
import React from "react";
export default function Button({ children, onClick }) {
  return (
    <button
      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

