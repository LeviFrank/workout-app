"use client";

import Set from "../../components/set";
import PropTypes from "prop-types";

const propTypes = {
  setData: PropTypes.array,
};

export default function WorkoutContent({ setData }) {
  return (
    <>
      {setData.map((data, index) => (
        <Set key={index} {...data} />
      ))}
    </>
  );
}

WorkoutContent.propTypes = propTypes;