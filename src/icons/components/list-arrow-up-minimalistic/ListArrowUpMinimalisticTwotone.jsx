import React from "react";
import Icon from "../../Icon";

export default function ListArrowUpMinimalisticTwotone({
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
      <path opacity="0.5" d="M11 11L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12 16H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 11.5L17.5 9M17.5 9L20 11.5M17.5 9V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
