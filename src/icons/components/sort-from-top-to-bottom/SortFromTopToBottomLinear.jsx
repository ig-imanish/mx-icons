import React from "react";
import Icon from "../../Icon";

export default function SortFromTopToBottomLinear({
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
      <path d="M4 16L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 11H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 6L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 4L17 20L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
