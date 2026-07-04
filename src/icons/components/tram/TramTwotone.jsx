import React from "react";
import Icon from "../../Icon";

export default function TramTwotone({
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
      <path d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12V10Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 13H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5 16H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 16H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.5" d="M7 20L6 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.5" d="M17 20L18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.5" d="M10 2V2.5C10 3.60457 10.8954 4.5 12 4.5C13.1046 4.5 14 3.60457 14 2.5V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
