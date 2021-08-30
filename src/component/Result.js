import underweight from "../images/underweight.png";
import normal from "../images/normal.png";
import overweight from "../images/overweight.png";
import obese from "../images/obese.png";

export default function Result({ result, status }) {
  return (
    <div className="result-ctn">
      {result.current !== 0 && (
        <>
          <h1
            className={
              status === "Under weight"
                ? "underweight"
                : status === "Normal weight"
                ? "normal"
                : status === "Over weight"
                ? "overweight"
                : "obese"
            }
          >
            Your BMI: {result.current}
          </h1>
          <img
            src={
              status === "Under weight"
                ? underweight
                : status === "Normal weight"
                ? normal
                : status === "Over weight"
                ? overweight
                : obese
            }
          />
          <h2
            className={
              status === "Under weight"
                ? "underweight"
                : status === "Normal weight"
                ? "normal"
                : status === "Over weight"
                ? "overweight"
                : "obese"
            }
          >
            {status}
          </h2>
        </>
      )}
    </div>
  );
}
