import React from "react";
import Icon from "../../Icon";

export default function ListCrossMinimalisticBroken({
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
      <path d="M3 6L13.5 6M20 6L17.75 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 16H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 16L20 11M20 16L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 11L7 11M3 11H4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
