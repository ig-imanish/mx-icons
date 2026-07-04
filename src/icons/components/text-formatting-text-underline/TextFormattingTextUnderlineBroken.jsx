import React from "react";
import Icon from "../../Icon";

export default function TextFormattingTextUnderlineBroken({
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
      <path d="M4 21H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 3V9C4 11.5264 5.17108 13.7792 7 15.2454M20 3V9C20 13.4183 16.4183 17 12 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
