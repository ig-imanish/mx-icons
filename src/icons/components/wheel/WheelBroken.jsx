import React from "react";
import Icon from "../../Icon";

export default function WheelBroken({
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
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 12L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 12L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 17.1963L11 13.7322" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13 10.2681L15 6.80396" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 17.1963L13 13.7322" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 10.2681L9 6.80396" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 17.1973C14.1175 17.7078 13.0929 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 13.0929 17.7078 14.1175 17.1973 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
