import React from "react";
import Icon from "../../Icon";

export default function RoundArrowLeftUpLinear({
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
      <path d="M15 15L9 9M9 9H13.5M9 9V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
