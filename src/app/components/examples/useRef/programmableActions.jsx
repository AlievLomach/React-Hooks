import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
  const inputRef = useRef();
  const handlClick = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };
  const handlClickWidth = () => {
    inputRef.current.style.width = "100px";
  };
  return (
    <CardWrapper>
      <SmallTitle className="card-title">
        Программируемые действия и свойства
      </SmallTitle>
      <Divider />
      <label htmlFor="email" id="email" className="form-label">
        Email
      </label>
      <input ref={inputRef} type="email" id="email" className="form-control" />
      <button className="btn btn-success" onClick={handlClick}>
        Button
      </button>
      <button className="btn btn-success" onClick={handlClickWidth}>
        width
      </button>
    </CardWrapper>
  );
};

export default ProgrammableActionsExample;
