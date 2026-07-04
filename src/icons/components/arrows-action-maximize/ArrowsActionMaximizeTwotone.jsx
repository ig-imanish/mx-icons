import React from "react";
import Icon from "../../Icon";

export default function ArrowsActionMaximizeTwotone({
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
      <path opacity="0.6" d="M9 15L2 22M2 22H7.85714M2 22V16.1429" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 9L22 2M22 2H16.1429M22 2V7.85714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
