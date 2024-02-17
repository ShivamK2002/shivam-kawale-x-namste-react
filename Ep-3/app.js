import React from "react";
import ReactDOM from "react-dom";

//React Element using JSX
const heading = <h1>Shivam Kawale</h1>;
// The above code is transpiled into React by Babel and then it gets rendered as HTML

//React Functional Component
const Title = () => {
  return <h1>Kawale</h1>;
};
const Heading = () => {
  return (
    <>
      <Title />
      <h1>Shivam Kawale</h1>;
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
