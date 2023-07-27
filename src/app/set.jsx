"use client";

import { useState } from "react";

export default function Set({ name, description, weight, reps }) {
  const [isDone, setIsDone] = useState(false);
  return (
    <div className="workoutCard">
      <p>name: {name}</p>
      <p>description: {description}</p>
      <p>weight: {weight}</p>
      <p>reps: {reps}</p>

      <label>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => {
            setIsDone((i) => !i);
          }}
        ></input>
        Done
      </label>
      <hr className="setHr" color="orange"></hr>
    </div>
  );
}
