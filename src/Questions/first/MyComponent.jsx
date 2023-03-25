import React, { useState } from "react";
import "./mycomponent.css";

export const MyComponent = ({ children, headerText }) => {
  const [clicks, setClicks] = useState(0);
  return (
    <div className="my-component">
      <h2>
        <span onClick={() => setClicks(clicks + 1)}>My Component</span>
        <br />
        {clicks + " clicks"}
      </h2>
      <hr />
      <h3>{headerText}</h3>
      {children}
    </div>
  );
};
