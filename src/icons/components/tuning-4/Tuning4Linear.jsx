import React from "react";
import Icon from "../../Icon";

export default function Tuning4Linear({
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
      <circle cx="12" cy="12" r="2" transform="rotate(-90 12 12)" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="10" cy="20" r="2" transform="rotate(-90 10 20)" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="2" cy="2" r="2" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 16 6)" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 12L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 20L19 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 4L5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 12L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 20L6 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 4L18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
