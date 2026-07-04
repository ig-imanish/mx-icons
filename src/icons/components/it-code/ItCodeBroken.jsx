import React from "react";
import Icon from "../../Icon";

export default function ItCodeBroken({
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
      <path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
