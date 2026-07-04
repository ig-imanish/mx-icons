import React from "react";
import Icon from "../../Icon";

export default function ReorderBroken({
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
      <path d="M19 10L11 10M5 10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 18H13M19 18H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 14L5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 6L5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
