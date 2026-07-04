import React from "react";
import Icon from "../../Icon";

export default function ForbiddenCircleLinear({
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
      <path d="M18.5 5.5L5.50002 18.4998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
