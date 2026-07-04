import React from "react";
import Icon from "../../Icon";

export default function ScissorsLinear({
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
      <path d="M16.4013 20.5L6 2M22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.59865 20.5L18 2M2 19C2 20.6569 3.34315 22 5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
