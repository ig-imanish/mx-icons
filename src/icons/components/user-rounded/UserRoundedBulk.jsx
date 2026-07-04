import React from "react";
import Icon from "../../Icon";

export default function UserRoundedBulk({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="currentColor"
      className={className}
      {...props}
    >
      <circle cx="12" cy="6" r="4" fill="currentColor"/>
      <ellipse opacity="0.5" cx="12" cy="17" rx="7" ry="4" fill="currentColor"/>
    </Icon>
  );
}
