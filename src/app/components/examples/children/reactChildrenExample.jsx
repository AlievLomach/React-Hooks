import React, { useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";

const FormComponent = ({ children }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log(data);
  }, [data]);

  const handlChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  return React.Children.map(children, (child) => {
    const config = {
      ...child.props,
      onChange: handlChange,
      value: data[child.props.name] || ""
    };

    return React.cloneElement(child, config);
  });
};

const ReactChildrenExample = () => {
  return (
    <CardWrapper>
      <SmallTitle>Clone form and add props</SmallTitle>
      <Divider />
      <FormComponent>
        <TextField name="email" label="email" />
        <TextField name="password" label="password" type="password" />
      </FormComponent>
    </CardWrapper>
  );
};

export default ReactChildrenExample;
