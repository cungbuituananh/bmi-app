import "./App.css";
import { useState, useRef } from "react";
import Input from "./component/Input";
import Result from "./component/Result";

const CM_TO_INCHES = 2.54;
const KG_TO_LB = 2.2046226218;

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [convert, setConvert] = useState(true);
  let result = useRef(0);
  const [status, setStatus] = useState("");

  function handleConvert(e) {
    e.preventDefault();
    if (convert) {
      setConvert(false);
      setHeight(Math.round((height / CM_TO_INCHES) * 100) / 100);
      setWeight(Math.round(weight * KG_TO_LB * 100) / 100);
    } else {
      setConvert(true);
      setHeight(Math.round(height * CM_TO_INCHES));
      setWeight(Math.round(weight / KG_TO_LB));
    }
  }

  function handleHeight(e) {
    let value = e.target.value;
    if (value >= 0) {
      setHeight(value);
    }
  }

  function handleWeight(e) {
    let value = e.target.value;
    if (value >= 0) {
      setWeight(value);
    }
  }

  function handleCalculate(e) {
    e.preventDefault();

    if (convert) {
      let resultCalculate = (weight / height ** 2) * 10000;
      if (!isNaN(resultCalculate)) {
        result.current = resultCalculate.toFixed(1);
      }
    } else {
      let resultCalculate = (weight / height ** 2) * 703;
      if (!isNaN(resultCalculate)) {
        result.current = resultCalculate.toFixed(1);
      }
    }

    if (result.current < 18.5) {
      setStatus("Under weight");
    } else if (result.current > 18.5 && result.current < 24.9) {
      setStatus("Normal weight");
    } else if (result.current > 24.9 && result.current < 29.9) {
      setStatus("Over weight");
    } else {
      setStatus("Obesity");
    }
  }

  return (
    <div className="App">
      <h1>Calculate Your Body Mass Index - BMI</h1>
      <Input
        handleConvert={handleConvert}
        handleCalculate={handleCalculate}
        handleHeight={handleHeight}
        handleWeight={handleWeight}
        convert={convert}
        weight={weight}
        height={height}
      />
      <Result result={result} status={status} />
    </div>
  );
}

export default App;
