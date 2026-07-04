import React from "react";
import Icon from "../../Icon";

export default function PlaylistMinimalistic2Broken({
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
      <path d="M9 14H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 16.5V12.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14.5" cy="16.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M21 12C18.7909 12 17 10.2091 17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 6H10.4118M15 6H13.4118" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13 10L6.82353 10M3 10H4.32353" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
