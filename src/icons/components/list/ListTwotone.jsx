import React from "react";
import Icon from "../../Icon";

export default function ListTwotone({
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
      <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.7" d="M15 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.4" d="M9 17H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
