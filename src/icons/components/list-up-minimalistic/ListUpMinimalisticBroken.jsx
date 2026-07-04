import React from "react";
import Icon from "../../Icon";

export default function ListUpMinimalisticBroken({
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
      <path d="M20 11L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 16H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 18L17.5 15L21 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 6L13.5 6M20 6L17.75 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
