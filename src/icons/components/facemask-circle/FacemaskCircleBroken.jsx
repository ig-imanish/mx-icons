import React from "react";
import Icon from "../../Icon";

export default function FacemaskCircleBroken({
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
      <path d="M16.5 20.4996L17 14.9996L13.857 13.7424C12.6649 13.2656 11.3351 13.2656 10.143 13.7424L7 14.9996L7.5 20.4996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 15L2.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 15L21.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
      <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
      <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
