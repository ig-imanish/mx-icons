import React from "react";
import Icon from "../../Icon";

export default function ListCrossBroken({
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
      <path d="M15 18.5L20 13.5M20 18.5L15 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 14L3 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 6L13.5 6M20 6L17.75 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 10L9.5 10M3 10H5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
