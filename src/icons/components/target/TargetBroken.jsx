import React from "react";
import Icon from "../../Icon";

export default function TargetBroken({
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
      <path d="M2 12L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 12L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 22L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 5L12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 12H12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 14L12 12L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
