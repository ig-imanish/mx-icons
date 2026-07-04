import React from "react";
import Icon from "../../Icon";

export default function TransmissionSquareTwotone({
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
      <path d="M8 9V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 9V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 12H13C13.9319 12 14.3978 12 14.7654 11.8478C15.2554 11.6448 15.6448 11.2554 15.8478 10.7654C16 10.3978 16 9.93188 16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <rect opacity="0.5" x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
