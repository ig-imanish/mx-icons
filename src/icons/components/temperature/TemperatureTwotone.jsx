import React from "react";
import Icon from "../../Icon";

export default function TemperatureTwotone({
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
      <path opacity="0.5" d="M12 22C15.0376 22 17.5 19.5376 17.5 16.5C17.5 14.7636 16.6954 13.2152 15.4386 12.2072C15.1749 11.9957 15 11.6857 15 11.3477V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V11.3477C9 11.6857 8.82505 11.9957 8.56141 12.2072C7.30465 13.2152 6.5 14.7636 6.5 16.5C6.5 19.5376 8.96243 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11.9998 13.9999C10.619 13.9999 9.49976 15.1192 9.49976 16.4999C9.49976 17.8806 10.619 18.9999 11.9998 18.9999C13.3805 18.9999 14.4998 17.8806 14.4998 16.4999C14.4998 15.1192 13.3805 13.9999 11.9998 13.9999ZM11.9998 13.9999L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
