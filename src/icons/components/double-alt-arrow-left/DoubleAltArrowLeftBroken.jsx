import React from "react";
import Icon from "../../Icon";

export default function DoubleAltArrowLeftBroken({
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
      <path d="M13 19L7 12L8.5 10.25M13 5L11 7.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 5L11 12L12.5 13.75M17 19L15 16.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
