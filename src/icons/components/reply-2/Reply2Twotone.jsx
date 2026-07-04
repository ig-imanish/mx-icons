import React from "react";
import Icon from "../../Icon";

export default function Reply2Twotone({
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
      <path d="M9.5 17L4.5 12L9.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.5" d="M4.5 12L14.5 12C16.1667 12 19.5 11 19.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
