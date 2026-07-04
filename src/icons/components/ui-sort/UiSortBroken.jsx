import React from "react";
import Icon from "../../Icon";

export default function UiSortBroken({
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
      <path d="M22 7L9 7M2 7L5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 12H16M5 12L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 17H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
