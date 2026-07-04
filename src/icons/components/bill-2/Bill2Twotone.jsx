import React from "react";
import Icon from "../../Icon";

export default function Bill2Twotone({
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
      <path opacity="0.5" d="M4 2H20V12.2774C20 13.6175 20 14.2875 19.7319 14.8783C19.4638 15.4692 18.9595 15.9104 17.951 16.7929L15.951 18.5429C14.0685 20.1901 13.1272 21.0137 12 21.0137C10.8728 21.0137 9.93152 20.1901 8.04897 18.5429L6.04897 16.7928C5.04046 15.9104 4.5362 15.4692 4.2681 14.8783C4 14.2875 4 13.6175 4 12.2774V2Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8.5 13L15.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8.5 8L15.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
