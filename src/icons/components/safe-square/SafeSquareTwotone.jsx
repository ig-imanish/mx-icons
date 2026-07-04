import React from "react";
import Icon from "../../Icon";

export default function SafeSquareTwotone({
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
      <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M6 7L6 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 12C11 10.3431 12.3431 9 14 9C15.6569 9 17 10.3431 17 12C17 13.6569 15.6569 15 14 15C12.3431 15 11 13.6569 11 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M16.5 9.5L18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M10 16L11.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M11.5 9.5L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M18 16L16.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
