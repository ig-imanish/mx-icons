import React from "react";
import Icon from "../../Icon";

export default function CalendarDateLinear({
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
      <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 4V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 4V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 14.5L10.5 13V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 16V14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2.5 9H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
