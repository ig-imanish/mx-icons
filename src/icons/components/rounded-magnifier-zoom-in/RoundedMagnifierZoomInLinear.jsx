import React from "react";
import Icon from "../../Icon";

export default function RoundedMagnifierZoomInLinear({
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
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 11H11M11 11H13M11 11V13M11 11V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21.812 20.9748C21.7493 21.0695 21.636 21.1828 21.4094 21.4094C21.1828 21.636 21.0695 21.7493 20.9748 21.812C20.4202 22.1793 19.6699 21.99 19.3559 21.4036C19.3023 21.3035 19.2563 21.15 19.1643 20.843C19.0638 20.5076 19.0136 20.3398 19.0038 20.2218C18.9466 19.5268 19.5268 18.9466 20.2218 19.0038C20.3398 19.0136 20.5075 19.0638 20.843 19.1643C21.15 19.2563 21.3035 19.3023 21.4036 19.3559C21.99 19.6699 22.1793 20.4202 21.812 20.9748Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
