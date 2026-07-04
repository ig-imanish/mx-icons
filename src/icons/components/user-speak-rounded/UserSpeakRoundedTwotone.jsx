import React from "react";
import Icon from "../../Icon";

export default function UserSpeakRoundedTwotone({
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
      <circle cx="10" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse opacity="0.5" cx="10" cy="17" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
