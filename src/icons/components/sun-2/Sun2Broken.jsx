import React from "react";
import Icon from "../../Icon";

export default function Sun2Broken({
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
      <path d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.7778 4.22266L17.5558 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4.22217 4.22266L6.44418 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6.44434 17.5557L4.22211 19.7779" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.7778 19.7773L17.5558 17.5551" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
