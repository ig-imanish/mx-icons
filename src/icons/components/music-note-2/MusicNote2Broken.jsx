import React from "react";
import Icon from "../../Icon";

export default function MusicNote2Broken({
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
      <path d="M13 12V7V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="9" cy="18" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19 8C15.6863 8 13 5.31371 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
