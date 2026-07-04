import React from "react";
import Icon from "../../Icon";

export default function UndoLeftRoundLinear({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="none"
      className={className}
      {...props}
    >
      <path d="M4 7H15C17.7614 7 20 9.23857 20 12C20 14.7614 17.7614 17 15 17H8.00001M4 7L7 4M4 7L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
