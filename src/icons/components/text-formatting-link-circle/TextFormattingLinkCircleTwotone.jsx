import React from "react";
import Icon from "../../Icon";

export default function TextFormattingLinkCircleTwotone({
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
      <path d="M14 12C14 15.3137 11.3137 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M10 12C10 8.68629 12.6863 6 16 6C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
