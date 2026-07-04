import React from "react";
import Icon from "../../Icon";

export default function HelpLinear({
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
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15 9L19 5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 19L9 15" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 9L5 5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19 19L15 15" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
