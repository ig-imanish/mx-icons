import React from "react";
import Icon from "../../Icon";

export default function SortHorizontalTwotone({
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
      <path d="M18 8L6 8M6 8L10.125 4M6 8L10.125 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.5" d="M6 16L18 16M18 16L13.875 12M18 16L13.875 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
