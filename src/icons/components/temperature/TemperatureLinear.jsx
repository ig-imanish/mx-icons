import React from "react";
import Icon from "../../Icon";

export default function TemperatureLinear({
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
      <path d="M12 22C15.0376 22 17.5 19.5376 17.5 16.5C17.5 14.7636 16.6954 13.2152 15.4386 12.2072C15.1749 11.9957 15 11.6857 15 11.3477V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V11.3477C9 11.6857 8.82505 11.9957 8.56141 12.2072C7.30465 13.2152 6.5 14.7636 6.5 16.5C6.5 19.5376 8.96243 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 14V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
