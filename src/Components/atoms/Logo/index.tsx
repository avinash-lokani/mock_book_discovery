import React from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const BookLogo = (props: Props) => {
  return (
    <img
      src={"https://i.ibb.co/p08gBJ6/logo.png"}
      alt="Logo"
      className={props.className}
      style={props.style}
      onClick={props.onClick}
    />
  );
};

export default BookLogo;
