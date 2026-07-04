import React from "react";
import Icon from "../../Icon";

export default function ArrowsActionMaximizeBroken({
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
      <path d="M22 2H16.1429M22 2V7.85714M22 2L18.5 5.5M15 9L15.875 8.125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 15L2 22M2 22H7.85714M2 22V16.1429" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
