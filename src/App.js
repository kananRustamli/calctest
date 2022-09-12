import { useState } from "react";
import Screen from "./components/Screen";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState();

  const [valueOne, setValueOne] = useState();
  const [valueTwo, setValueTwo] = useState();
  const [isOperator, setIsOperator] = useState(false);

  const calculate = (cal) => {
    const data = cal.split("+", "-", "*", "/");
    console.log(data);
  };

  const input = (data) => {
    setCal(cal + data);
  };

  const setValues = (val) => {
    if (isOperator) {
      setValueOne(val);
    } else {
      setValueTwo(val);
    }
  };

  const calcResult = (a, b, op) => {
    if (op === "*") {
      return a * b;
    }
    if (op === "-") {
      return a - b;
    }
    if (op === "+") {
      return a + b;
    }
    if (op === "/") {
      return a / b;
    }
  };

  return (
    <>
      <div className="main">
        <Screen value={cal} />
        <div className="button-container">
          <Button button="1" input={input} />
          <Button button="2" input={input} />
          <Button button="3" input={input} />
          <Button button="+" input={input} />
          <Button button="4" input={input} />
          <Button button="5" input={input} />
          <Button button="6" input={input} />
          <Button button="-" input={input} />
          <Button button="7" input={input} />
          <Button button="8" input={input} />
          <Button button="9" input={input} />
          <Button button="*" input={input} />
          <Button button="0" input={input} />
          <Button button="." input={input} />
          <Button button="/" input={input} />
          <Button button="=" input={input} calculate={calculate} value={cal} />
        </div>
      </div>
    </>
  );
}

export default App;
