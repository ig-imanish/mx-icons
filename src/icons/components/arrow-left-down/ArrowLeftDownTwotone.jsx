import React from "react";
import Icon from "../../Icon";

export default function ArrowLeftDownTwotone({
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
      <path opacity="0.5" d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967C18.2374 5.17678 17.7626 5.17678 17.4697 5.46967L18.5303 6.53033ZM17.4697 5.46967L5.46967 17.4697L6.53033 18.5303L18.5303 6.53033L17.4697 5.46967Z" fill="currentColor"/>
      <path d="M6 9L6 18L15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
