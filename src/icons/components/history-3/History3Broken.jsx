import React from "react";
import Icon from "../../Icon";

export default function History3Broken({
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
      <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.5778 21.7031 9.22492 21.1679 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="0.5 3.5"/>
      <path d="M22 12C22 10.1786 21.513 8.47087 20.6622 7M12 2C13.8214 2 15.5291 2.48697 17 3.33782" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 9V13H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
