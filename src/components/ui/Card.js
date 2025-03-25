// src/components/ui/Card.js
import React from "react";
export default function Card({ children }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white">{children}</div>
  );
}
