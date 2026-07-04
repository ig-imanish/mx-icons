import React from "react";
import Icon from "../../Icon";

export default function ArrowsArrowDownTwotone({
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
      <path opacity="0.5" d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L12.75 4ZM11.25 4L11.25 20H12.75L12.75 4L11.25 4Z" fill="currentColor"/>
      <path d="M18 14L12 20L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
