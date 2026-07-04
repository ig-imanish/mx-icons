import React from "react";
import Icon from "../../Icon";

export default function UserCheckBroken({
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
      <circle cx="11" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M17 10.3C17.5207 10.7686 17.8126 11.0314 18.3333 11.5L21 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.9975 18C19 17.8358 19 17.669 19 17.5C19 15.0147 15.4183 13 11 13C6.58172 13 3 15.0147 3 17.5C3 19.9853 3 22 11 22C13.231 22 14.8398 21.8433 16 21.5634" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
