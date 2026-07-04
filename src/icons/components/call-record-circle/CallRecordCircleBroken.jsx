import React from "react";
import Icon from "../../Icon";

export default function CallRecordCircleBroken({
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
      <path d="M18.5002 12C18.5002 13.3807 17.381 14.5 16.0002 14.5C14.6195 14.5 13.5002 13.3807 13.5002 12C13.5002 10.6193 14.6195 9.5 16.0002 9.5C17.381 9.5 18.5002 10.6193 18.5002 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10.5 12C10.5 13.3807 9.38071 14.5 8 14.5C6.61929 14.5 5.5 13.3807 5.5 12C5.5 10.6193 6.61929 9.5 8 9.5C9.38071 9.5 10.5 10.6193 10.5 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 14.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
