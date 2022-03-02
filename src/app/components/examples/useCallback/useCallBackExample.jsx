import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const withOutCallBack = useRef(0);
  const WithCallBack = useRef(0);

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatewithOutCallBack = (data) => {
    console.log(data);
  };
  useEffect(() => {
    withOutCallBack.current++;
  }, [validatewithOutCallBack]);

  const validateWithCall = useCallback((data) => {
    console.log(data);
  }, []);
  useEffect(() => {
    WithCallBack.current++;
  }, [validateWithCall]);

  useEffect(() => {
    validatewithOutCallBack(data);
    validateWithCall(data);
  }, [data]);

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <Divider />
      <p>{withOutCallBack.current}</p>
      <p>{WithCallBack.current}</p>
      <label htmlFor="email" id="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="form-control"
        value={data.email || ""}
        name="email"
        onChange={handleChange}
      />
    </CardWrapper>
  );
};

export default UseCallBackExample;
