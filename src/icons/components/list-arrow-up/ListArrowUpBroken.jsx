import React from "react";
import Icon from "../../Icon";

export default function ListArrowUpBroken({
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
      <path d="M11 14L3 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 16.5L17.5 14M17.5 14L15 16.5M17.5 14V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 6L13.5 6M20 6L17.75 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 10L9.5 10M3 10H5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
