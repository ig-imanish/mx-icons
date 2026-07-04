import React from "react";
import Icon from "../../Icon";

export default function Tuning3Linear({
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
      <circle cx="12" cy="12" r="2" transform="rotate(180 12 12)" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="20" cy="14" r="2" transform="rotate(180 20 14)" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="2" cy="2" r="2" transform="matrix(-1 8.74228e-08 8.74228e-08 1 6 8)" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 8L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 10L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 14L4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 19L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 19L20 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 5L4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
