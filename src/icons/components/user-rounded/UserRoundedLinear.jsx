import React from "react";
import Icon from "../../Icon";

export default function UserRoundedLinear({
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
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="12" cy="17" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
