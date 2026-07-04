import React from "react";
import Icon from "../../Icon";

export default function UserPlusRoundedLinear({
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
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17" cy="18" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M17 16.6667V19.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.6665 18L18.3332 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 20.8344C13.3663 20.9421 12.695 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C13.7135 13 15.2832 13.3518 16.5 13.9359" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
