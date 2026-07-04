import React from "react";
import Icon from "../../Icon";

export default function ConfoundedCircleTwotone({
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
      <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 12L10 10.5L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 12L14 10.5L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 16L14 15L13 16L12 15L11 16L10 15L9 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
