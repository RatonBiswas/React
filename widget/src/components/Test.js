import React from "react";

const Test = React.memo(({ value, handleClick }) => {
  console.log("hellow");
  return <div>{value}</div>;
});

export default Test;
