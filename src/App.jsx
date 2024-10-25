import React from "react";
import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";

const App = () => {
  //Code JavaScript;
  //let number = 0;
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1);
    console.log("Number incremented : ", number);
  };

  const subtract = () => {
    setNumber(number - 1);
    console.log("Number decremented : ", number);
  };

  return (
    //Code JSX;
    <div className="container  mx-auto">
      <h1 className="title font-mono text-3xl">Counter</h1>
      <Counter>
        <div className="count"> {number} </div>
      </Counter>
      <Button text="Incrément" handelClick={add} />
      <Button text="Decrément" handelClick={subtract} />
    </div>
  );
};

export default App;
