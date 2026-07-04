import React from "react";
import Icon from "../../Icon";

export default function SortFromBottomToTopLinear({
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
      <path d="M4 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 18H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 20V4L20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
