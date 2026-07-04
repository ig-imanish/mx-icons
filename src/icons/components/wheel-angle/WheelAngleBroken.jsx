import React from "react";
import Icon from "../../Icon";

export default function WheelAngleBroken({
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
      <path d="M21 12C21 17.5228 18.9853 22 16.5 22M16.5 2C18.3453 2 19.9312 4.46819 20.6256 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 12C3 6.47715 5.01472 2 7.5 2C9.98528 2 12 6.47715 12 12C12 17.5228 9.98528 22 7.5 22C5.65471 22 4.06884 19.5318 3.37444 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.5 22C9.98528 22 12 17.5228 12 12C12 6.47715 9.98528 2 7.5 2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 12C9 15.3137 8.32843 18 7.5 18C6.67157 18 6 15.3137 6 12C6 8.68629 6.67157 6 7.5 6C8.32843 6 9 8.68629 9 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7.5 2L16.5 2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7.5 22L16.5 22" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
