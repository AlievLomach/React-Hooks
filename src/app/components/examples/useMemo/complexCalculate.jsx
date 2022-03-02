import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
  console.log("run");
  return factorial(n);
}

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(100);
  const [otherState, setOtherState] = useState(false);
  const btnColor = otherState ? "warning" : "success";
  useEffect(() => {
    console.log("render");
  });

  //   useMemo(() => runFactorial(value), [value]);
  const fact = useMemo(() => runFactorial(value), [value]);

  return (
    <>
      <CardWrapper>
        <SmallTitle>Кэширование сложных вычислений</SmallTitle>
        <Divider />
        <p>{value}</p>
        <p>{fact}</p>
        <button
          className="btn btn-primary m-2"
          onClick={() => setValue((prevState) => prevState + 10)}
        >
          INC
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => setValue((prevState) => prevState - 10)}
        >
          DEC
        </button>
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>Зависимость от сторонних setState</SmallTitle>
        <Divider />
        <button
          className={"btn m-2 btn-" + btnColor}
          onClick={() => setOtherState((prevState) => !prevState)}
        >
          color
        </button>
      </CardWrapper>
    </>
  );
};

export default ComplexCalculateExample;
