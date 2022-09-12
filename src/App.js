import { useState } from "react";
import Screen from "./components/Screen";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");

  const calculate = (cal) => {
    setResult(eval(cal));
  };

  const input = (data) => {
    if (data === "del") {
      console.log("deleted");
      const lastCharIndex = cal.length - 1;
      return setCal(cal.slice(0, -1));
    }
    setCal(cal + data);
  };

  return (
    <>
      <div className="main">
        <Screen value={cal} />
        <Screen value={result} />
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
          <Button button="del" input={input} />
          <Button button="=" input={input} calculate={calculate} value={cal} />
        </div>
      </div>
    </>
  );
}

export default App;
