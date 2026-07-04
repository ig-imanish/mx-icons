import React from "react";
import Icon from "../../Icon";

export default function BatteryHalfMinimalisticBroken({
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
      <path d="M7 9C7 9 7.5 9.9 7.5 12C7.5 14.1 7 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10.5 9C10.5 9 11 9.9 11 12C11 14.1 10.5 15 10.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 14L22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H11.5C15.2712 4 17.1569 4 18.3284 5.17157C19.5 6.34315 19.5 8.22876 19.5 12C19.5 15.7712 19.5 17.6569 18.3284 18.8284C17.1569 20 15.2712 20 11.5 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2.51839 18.1752 2.22937 17.3001 2.10149 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
