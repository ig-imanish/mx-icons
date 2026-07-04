import React from "react";
import Icon from "../../Icon";

export default function Forward2Broken({
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
      <path d="M19.5 12L14.5 17M19.5 12L14.5 7M19.5 12L13 12M9.5 12C7.83333 12 4.5 11 4.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
