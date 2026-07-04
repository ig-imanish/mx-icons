import React from "react";
import Icon from "../../Icon";

export default function KeyMinimalistic2Linear({
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
      <circle cx="15" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="15" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3.5 20.5L9.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 21L4.5 19.5M6.5 17.5L8 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
