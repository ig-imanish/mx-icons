import React from "react";
import Icon from "../../Icon";

export default function RoundDoubleAltArrowLeftLinear({
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
      <path d="M15.5 9L12.5 12L15.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5 9L8.5 12L11.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
