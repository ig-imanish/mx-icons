import React from "react";
import Icon from "../../Icon";

export default function UsersUserMinusTwotone({
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
      <path opacity="0.5" d="M15 13.3271C14.0736 13.1162 13.0609 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.6874 22 19.3315 20.9817 19.8068 19.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="18" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M17 16H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
