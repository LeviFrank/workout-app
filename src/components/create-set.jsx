"use client";

import { useState } from "react";
//import styles from "./set.module.css";
import IconButton from "./icon-button";

export default function CreateSet({}) {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Create New Set</h1>

      {/* <label>
        Name:
        <input type="text" id="Name" />
      </label> */}

      {/* : Create the component a line under instead of 
      all the duplicate lines below*/}
      {/* <LabeledInput labelText="Name" value={name} onChange={setName} /> */}

      {/* <br></br>
      <label htmlFor="Description">Description: </label>
      <input type="text" id="Description"></input>
      <br></br>
      <label htmlFor="Weight">Weight: </label>
      <input type="text" id="Weight"></input>
      <br></br>
      <label htmlFor="Reps">Reps: </label>
      <input type="text" id="Reps"></input> */}

      <IconButton text={"Create Set"}></IconButton>
    </div>
  );
}
