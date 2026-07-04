import React from "react";
import Icon from "../../Icon";

export default function ArrowsArrowLeftTwotone({
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
      <path opacity="0.5" d="M20 12.75C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25V12.75ZM20 11.25H4V12.75H20V11.25Z" fill="currentColor"/>
      <path d="M10 6L4 12L10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
