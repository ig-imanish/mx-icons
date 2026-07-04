import React from "react";
import Icon from "../../Icon";

export default function SlashCircleTwotone({
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
      <path d="M13.2939 7.17041L11.9998 12L10.7058 16.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
