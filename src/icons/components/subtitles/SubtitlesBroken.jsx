import React from "react";
import Icon from "../../Icon";

export default function SubtitlesBroken({
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
      <path d="M2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2.51839 5.82475 2.22937 6.69989 2.10149 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 16H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 13H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 16H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9.5 13H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 16H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 13H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
