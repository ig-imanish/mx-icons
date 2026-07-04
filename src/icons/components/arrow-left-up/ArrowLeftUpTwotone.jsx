import React from "react";
import Icon from "../../Icon";

export default function ArrowLeftUpTwotone({
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
      <path opacity="0.5" d="M17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L17.4697 18.5303ZM18.5303 17.4697L6.53033 5.46967L5.46967 6.53033L17.4697 18.5303L18.5303 17.4697Z" fill="currentColor"/>
      <path d="M15 6H6V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
