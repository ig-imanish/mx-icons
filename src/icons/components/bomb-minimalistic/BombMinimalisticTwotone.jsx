import React from "react";
import Icon from "../../Icon";

export default function BombMinimalisticTwotone({
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
      <circle cx="9.5" cy="14.5" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M17 7L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.5 7.5L20.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 3.5L16.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 5L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
