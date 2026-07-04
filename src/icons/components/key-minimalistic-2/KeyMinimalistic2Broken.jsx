import React from "react";
import Icon from "../../Icon";

export default function KeyMinimalistic2Broken({
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
      <path d="M21.0635 12.5C21.6591 11.4704 22 10.275 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9C8 12.866 11.134 16 15 16C16.0736 16 17.0907 15.7583 18 15.3264" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="15" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3.5 20.5L9.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 21L4.5 19.5M6.5 17.5L8 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
