import React, { HTMLAttributes } from "react";

export interface IconsProps extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Icons = (props: IconsProps) => {
  return (
    <img
      role={"icon"}
      src={props.icon}
      className={props.className}
      style={props.style}
      onClick={props.onClick}
    />
  );
};

export default Icons;
