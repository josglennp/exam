import React from "react";
import data from "./data.json";

const DataManipulation = () => {
  return (
    <div className="container">
      {console.log({
        "status-1": data.filter((item) => item.status === 1),
        "status-2": data.filter((item) => item.status === 2),
      })}

      <h3>Answer:</h3>
      <span>
        {`import React from "react";
import data from "./data.json";

const DataManipulation = () => {
  return (
    <div className="container">
      {console.log({
        "status-1": data.filter((item) => item.status === 1),
        "status-2": data.filter((item) => item.status === 2),
      })}

      <h3>Answer:</h3>
      <span>

      </span>
    </div>
  );
};

export default DataManipulation;
`}
      </span>
      <br />
      <p style={{ fontWeight: 800 }}>- Also see the console for testing.</p>
    </div>
  );
};

export default DataManipulation;
