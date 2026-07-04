import React from "react";
import Icon from "../../Icon";

export default function UserCircleTwotone({
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
      <circle opacity="0.5" cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
