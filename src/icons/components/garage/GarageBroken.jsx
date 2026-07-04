import React from "react";
import Icon from "../../Icon";

export default function GarageBroken({
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
      <path d="M22 22L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 22.0001V11.3472C3 10.4903 3.36644 9.67432 4.00691 9.10502M21 22.0001V16M7.25345 6.2192L10.0069 3.77169C11.1436 2.76133 12.8564 2.76133 13.9931 3.77169L19.9931 9.10502C20.6336 9.67432 21 10.4903 21 11.3472V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 18.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 22V19M18 22V16C18 14.1144 18 13.1716 17.4142 12.5858C16.8284 12 15.8856 12 14 12H10C8.11438 12 7.17157 12 6.58579 12.5858C6.11424 13.0573 6.02228 13.7602 6.00434 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 9H10.5M14 9H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 15.5H10.5M15 15.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
