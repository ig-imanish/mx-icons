import React from "react";
import Icon from "../../Icon";

export default function MagnifierLinear({
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
      <circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M18.5 18.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
