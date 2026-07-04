import React from "react";
import Icon from "../../Icon";

export default function ArrowsArrowUpTwotone({
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
      <path opacity="0.5" d="M11.25 20C11.25 20.4142 11.5858 20.75 12 20.75C12.4142 20.75 12.75 20.4142 12.75 20H11.25ZM12.75 20L12.75 4L11.25 4L11.25 20H12.75Z" fill="currentColor"/>
      <path d="M18 10L12 4L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
