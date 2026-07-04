import React from "react";
import Icon from "../../Icon";

export default function ServerSquareLinear({
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
      <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13.5 16.5H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.5 7.5L18 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 17.5L6 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 8.5L6 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 17.5L9 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 8.5L9 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
