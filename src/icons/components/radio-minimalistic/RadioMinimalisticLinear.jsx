import React from "react";
import Icon from "../../Icon";

export default function RadioMinimalisticLinear({
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
      <path d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="8" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13.5 11H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.5 14H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.5 17H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6.5 6L15 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
