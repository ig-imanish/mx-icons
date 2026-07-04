import React from "react";
import Icon from "../../Icon";

export default function ClosetBroken({
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
      <path d="M19 22V21.5M5 22V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 21V14M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 11V13C22 16.7712 22 18.6569 20.8284 19.8284C19.6569 21 17.7712 21 14 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C21.6366 3.97975 21.8873 5.1277 21.965 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 15H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 18L17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 18L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
