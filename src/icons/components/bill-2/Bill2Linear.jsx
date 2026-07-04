import React from "react";
import Icon from "../../Icon";

export default function Bill2Linear({
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
      <path d="M2 2H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 2H20V12.27C20 13.6091 20 14.2787 19.7319 14.8691C19.4638 15.4595 18.9595 15.9004 17.951 16.7822L15.951 18.5309C14.0685 20.177 13.1272 21 12 21C10.8728 21 9.93152 20.177 8.04897 18.5309L6.04897 16.7822C5.04046 15.9004 4.5362 15.4595 4.2681 14.8691C4 14.2787 4 13.6091 4 12.27V2Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8.5 13L15.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8.5 8L15.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
