import React from "react";
import Icon from "../../Icon";

export default function RecordMinimalisticBroken({
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
      <path d="M21 11.5C21 13.433 19.433 15 17.5 15C15.567 15 14 13.433 14 11.5C14 9.567 15.567 8 17.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 11.5C10 13.433 8.433 15 6.5 15C4.567 15 3 13.433 3 11.5C3 9.567 4.567 8 6.5 8C8.433 8 10 9.567 10 11.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6.5 15H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
