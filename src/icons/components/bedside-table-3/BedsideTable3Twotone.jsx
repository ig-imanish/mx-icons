import React from "react";
import Icon from "../../Icon";

export default function BedsideTable3Twotone({
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
      <path opacity="0.5" d="M19 22V20.5M5 22V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12V10Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 15.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 6.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.4" d="M2 11H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
