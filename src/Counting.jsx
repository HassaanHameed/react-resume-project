import React from "react";
import CountUp from "react-countup";

const Counting = () => {
  return (
    <>
      <CountUp start={0} end={100} duration={1} />
    </>
  );
};

export default Counting;
