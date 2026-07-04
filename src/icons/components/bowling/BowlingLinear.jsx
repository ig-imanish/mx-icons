import React from "react";
import Icon from "../../Icon";

export default function BowlingLinear({
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
      <circle cx="12" cy="7" r="1.5" transform="rotate(-90 12 7)" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="1.5" transform="rotate(-90 12 12)" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
