import React from "react";
import Icon from "../../Icon";

export default function ListArrowDownMinimalisticTwotone({
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
      <path opacity="0.5" d="M20 6L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M11 16L3 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12 11L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 14.5L17.5 17M17.5 17L20 14.5M17.5 17V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
