import React from "react";
import Icon from "../../Icon";

export default function RubleLinear({
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
      <path d="M9 14H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 12V8.2C10 8.0142 10 7.9213 10.0123 7.84357C10.0801 7.41567 10.4157 7.08008 10.8436 7.01231C10.9213 7 11.0142 7 11.2 7H13.5C14.8807 7 16 8.11929 16 9.5C16 10.8807 14.8807 12 13.5 12H10ZM10 12V17M10 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
