import React from "react";
import Icon from "../../Icon";

export default function EuroLinear({
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
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15 6.80269C14.1175 6.29218 13.0929 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C13.0929 18 14.1175 17.7078 15 17.1973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 10.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 13.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
