import React from "react";
import Icon from "../../Icon";

export default function UsersGroupRoundedBulk({
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
      <circle opacity="0.4" cx="15" cy="6" r="3" fill="currentColor"/>
      <ellipse opacity="0.4" cx="16" cy="17" rx="5" ry="3" fill="currentColor"/>
      <circle cx="9.00098" cy="6" r="4" fill="currentColor"/>
      <ellipse cx="9.00098" cy="17.001" rx="7" ry="4" fill="currentColor"/>
    </Icon>
  );
}
