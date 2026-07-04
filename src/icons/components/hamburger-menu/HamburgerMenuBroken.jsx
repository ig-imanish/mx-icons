import React from "react";
import Icon from "../../Icon";

export default function HamburgerMenuBroken({
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
      <path d="M4 7L7 7M20 7L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 17H17M4 17L13 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 12H7L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
