import React from "react";
import Icon from "../../Icon";

export default function ListVerticalLinear({
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
      <path d="M4 17H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 12L11 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 7L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 4L17 20M17 4L14 8M17 4L20 8M17 20L20 16M17 20L14 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
