import React from "react";

export default function Input({ placeholder, type = "text", value, onChange }) {
  return (
    <input
      className="p-2 border rounded w-full"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

