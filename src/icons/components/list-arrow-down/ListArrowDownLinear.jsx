import React from "react";
import Icon from "../../Icon";

export default function ListArrowDownLinear({
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
      <path d="M15 17.5L17.5 20M17.5 20L20 17.5M17.5 20V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 6L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21 10L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 14L3 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
