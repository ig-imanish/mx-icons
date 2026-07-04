import React from "react";
import Icon from "../../Icon";

export default function SortHorizontalBroken({
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
      <path d="M6 8L10.125 4M6 8L10.125 12M6 8L13 8M18 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 16L13.875 12M18 16L13.875 20M18 16L11 16M6 16H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
