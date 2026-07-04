import React from "react";
import Icon from "../../Icon";

export default function UndoRightRoundLinear({
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
      <path d="M20 7H9.00001C6.23858 7 4 9.23857 4 12C4 14.7614 6.23858 17 9 17H16M20 7L17 4M20 7L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
