import React from "react";
import Icon from "../../Icon";

export default function AlarmAddLinear({
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
      <circle cx="12" cy="13" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15 13L12 13M12 13L9 13M12 13L12 10M12 13L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3.5 4.5L7.50002 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.5 4.5L16.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
