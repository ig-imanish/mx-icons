import React from "react";
import Icon from "../../Icon";

export default function RoundArrowRightTwotone({
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
      <path d="M8 12C12.6863 12 11.3137 12 16 12M16 12L13 9M16 12L13 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
