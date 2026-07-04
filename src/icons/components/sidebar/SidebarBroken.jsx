import React from "react";
import Icon from "../../Icon";

export default function SidebarBroken({
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
      <path d="M5.5 10H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6.5 14H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 3L15 13M15 17L15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 11V13C2 16.7712 2 18.6569 3.17157 19.8284C4.34315 21 6.22876 21 10 21H14C17.7712 21 19.6569 21 20.8284 19.8284C22 18.6569 22 16.7712 22 13V11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2.51839 4.82475 2.22937 5.69989 2.10149 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
