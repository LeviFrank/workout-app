"use client";
import { useState } from "react";

export default function IconButton({ color, children }) {
  const [age, setAge] = useState(42);
  const [name, setName] = useState("John");
  return (
    <button className="iconButton">
      {" "}
      {color}
      {children}
    </button>
  );
}
