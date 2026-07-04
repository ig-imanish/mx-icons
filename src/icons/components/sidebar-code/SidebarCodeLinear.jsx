import React from "react";
import Icon from "../../Icon";

export default function SidebarCodeLinear({
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
      <path d="M2 11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C17.7712 3 19.6569 3 20.8284 4.17157C22 5.34315 22 7.22876 22 11V13C22 16.7712 22 18.6569 20.8284 19.8284C19.6569 21 17.7712 21 14 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15 21L15 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 14L5 15L6 16M10.5 16L11.5 17L10.5 18M9 14L7.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
