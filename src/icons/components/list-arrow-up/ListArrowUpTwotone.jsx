import React from "react";
import Icon from "../../Icon";

export default function ListArrowUpTwotone({
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
      <path opacity="0.5" d="M21 6L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M21 10L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M11 14L3 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M11 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 16.5L17.5 14M17.5 14L15 16.5M17.5 14V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
