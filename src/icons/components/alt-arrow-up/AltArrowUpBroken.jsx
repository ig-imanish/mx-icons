import React from "react";
import Icon from "../../Icon";

export default function AltArrowUpBroken({
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
      <path d="M19 15L12 9L10.25 10.5M5 15L7.33333 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
