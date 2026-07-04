import React from "react";
import Icon from "../../Icon";

export default function ArrowRightDownTwotone({
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
      <path opacity="0.5" d="M6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L6.53033 5.46967ZM5.46967 6.53033L17.4697 18.5303L18.5303 17.4697L6.53033 5.46967L5.46967 6.53033Z" fill="currentColor"/>
      <path d="M18 9L18 18L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
