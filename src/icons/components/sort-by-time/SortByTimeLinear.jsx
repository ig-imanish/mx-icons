import React from "react";
import Icon from "../../Icon";

export default function SortByTimeLinear({
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
      <path d="M10 7L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 17H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="17" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M17 10V11.8462L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
