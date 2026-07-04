import React from "react";
import Icon from "../../Icon";

export default function DonutBroken({
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
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 13C2 13 4.20085 15 6 15C7.21199 15 8.60628 14.0924 9.38725 13.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 14.2236C14.4713 14.6389 15.0875 15 15.8053 15C17.4948 15 17.4948 13 19.1842 13C20.2618 13 21.1102 13.8136 21.5835 14.4029" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14.5 7L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 7L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 5L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10.5 7L9.13397 7.36603" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16.6497 8.9766L16.7161 10.3893" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20.6777 10.085L18.9996 11.5629" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 5L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6.79245 9.14385L6.20722 7.85641" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5.66501 12.6415L6.50024 11.5002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3.68268 10.3496L3.60402 8.93757" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 20.6622C8.47087 21.513 10.1786 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
