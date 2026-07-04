import React from "react";
import Icon from "../../Icon";

export default function RoundSortVerticalLinear({
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
      <path d="M9.5 8L9.5 16M9.5 16L7 13.25M9.5 16L12 13.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5 16L14.5 8M14.5 8L12 10.75M14.5 8L17 10.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
