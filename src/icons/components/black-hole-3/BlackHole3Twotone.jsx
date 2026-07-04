import React from "react";
import Icon from "../../Icon";

export default function BlackHole3Twotone({
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
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M12 10C17 10 16.6 22 9 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12.3115 14C7.31152 14 7.71152 2 15.3115 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M10 12.3115C10 7.31152 22 7.71152 22 15.3115" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M14 12C14 17 2 16.6 2 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
