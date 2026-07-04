import React from "react";
import Icon from "../../Icon";

export default function NotebookBroken({
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
      <path d="M21 16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H9C6.17157 22 4.75736 22 3.87868 21.1213C3 20.2426 3 18.8284 3 16V8C3 5.17157 3 3.75736 3.87868 2.87868C4.75736 2 6.17157 2 9 2H15C17.8284 2 19.2426 2 20.1213 2.87868C21 3.75736 21 5.17157 21 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 2V6M8 22V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 16H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 8H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11.5 6.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11.5 10H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
