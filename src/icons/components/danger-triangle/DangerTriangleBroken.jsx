import React from "react";
import Icon from "../../Icon";

export default function DangerTriangleBroken({
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
      <path d="M6.30928 9C8.59494 5 9.96832 3 12 3C14.3107 3 15.7699 5.58716 18.6883 10.7615L19.0519 11.4063C21.4771 15.7061 22.6897 17.856 21.5937 19.428C20.4978 21 17.7864 21 12.3637 21H11.6363C6.21356 21 3.50217 21 2.40626 19.428C1.45498 18.0635 2.24306 16.2635 4.05373 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1" fill="currentColor"/>
    </Icon>
  );
}
