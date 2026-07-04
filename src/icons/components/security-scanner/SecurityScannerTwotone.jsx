import React from "react";
import Icon from "../../Icon";

export default function SecurityScannerTwotone({
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
      <path opacity="0.5" d="M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 18.7712 2 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M22 15C22 18.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 5.22876 22 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M10 2C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 5.22876 2 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
