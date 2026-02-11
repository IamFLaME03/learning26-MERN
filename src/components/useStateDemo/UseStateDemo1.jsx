import React, { useState } from "react";
import { CardComponent } from "../CardComponent";

export const UseStateDemo1 = () => {
  // var count=0
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    // console.log("Count before increase " + count);
    // count++
    setCount(count + 1);
    console.log("Count after increase " + count);
  };
  const decreaseCount = () => {
    // console.log("Count before increase " + count);
    // count++
    setCount(count - 1);
    console.log("Count after increase " + count);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseStateDemo1</h1>
      <h2>Count = {count}</h2>
      <button className="mr-5 px-4" onClick={increaseCount}>
        {" "}
        +{" "}
      </button>
      <button className="px-4" onClick={decreaseCount}>
        {" "}
        -{" "}
      </button>

      <CardComponent title="Use Demo 1 Title"></CardComponent>
    </div>
  );
};
