import MuiButton, { ButtonProps } from "@material-ui/core/Button";
import React from "react";

type MyButtonProps = ButtonProps;

const ButtonComponent: React.FC<MyButtonProps> = ({ children, ...rest }) => {
  return <MuiButton {...rest}>{children} </MuiButton>;
};

export default ButtonComponent;
