import React from "react";
import Icon from "../../Icon";

export default function VinylRecordBroken({
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
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7.40381 16.5967C4.8654 14.0583 4.8654 9.94271 7.40381 7.4043M16.5962 7.4043C17.6103 8.41836 18.2192 9.68413 18.4231 11.0005M16.5962 16.5967C17.0785 16.1144 17.4692 15.5751 17.7682 15.0005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
