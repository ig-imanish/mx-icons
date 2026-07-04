import React from "react";
import Icon from "../../Icon";

export default function ListCheckBroken({
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
      <path d="M14 16L16.1 18.5L20 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 14H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 6L13.5 6M20 6L17.75 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 10L9.5 10M3 10H5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
