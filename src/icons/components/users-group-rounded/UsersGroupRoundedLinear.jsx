import React from "react";
import Icon from "../../Icon";

export default function UsersGroupRoundedLinear({
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
      <circle cx="9" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="9" cy="17" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
