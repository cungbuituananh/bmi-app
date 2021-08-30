function Button({ convert, handleCalculate, handleConvert }) {
  return (
    <div className="button-ctn ">
      <button onClick={handleConvert}>{convert ? "Standard" : "Metric"}</button>
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
}

export default function Input({
  handleConvert,
  convert,
  handleWeight,
  handleHeight,
  height,
  weight,
  handleCalculate,
}) {
  return (
    <form className="input-ctn">
      <fieldset>
        <legend>Height - {convert ? " cm " : " in "}</legend>
        <input value={height} onChange={(e) => handleHeight(e)} />
      </fieldset>
      <fieldset>
        <legend>Weight - {convert ? " kg " : " lb "} </legend>
        <input value={weight} onChange={(e) => handleWeight(e)} />
      </fieldset>
      <Button
        convert={convert}
        handleCalculate={handleCalculate}
        handleConvert={handleConvert}
      />
    </form>
  );
}
