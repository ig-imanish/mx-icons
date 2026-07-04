import React from "react";
import Icon from "../../Icon";

export default function UiSortLinear({
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
      <path d="M22 7L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 12L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 17H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
