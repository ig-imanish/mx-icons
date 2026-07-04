import React from "react";
import Icon from "../../Icon";

export default function CropMinimalisticTwotone({
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
      <path d="M22 19H13C9.22876 19 7.34315 19 6.17157 17.8284C5 16.6569 5 14.7712 5 11V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M2 5H5H11C14.7712 5 16.6569 5 17.8284 6.17157C19 7.34315 19 9.22876 19 13V19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
