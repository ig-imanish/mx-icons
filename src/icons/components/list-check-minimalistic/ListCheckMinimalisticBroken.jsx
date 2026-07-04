import React from "react";
import Icon from "../../Icon";

export default function ListCheckMinimalisticBroken({
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
      <path d="M10 11L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 16H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 13.5L16.1 16L20 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 6L13.5 6M20 6L17.75 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
