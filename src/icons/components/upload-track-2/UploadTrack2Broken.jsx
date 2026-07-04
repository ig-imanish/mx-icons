import React from "react";
import Icon from "../../Icon";

export default function UploadTrack2Broken({
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
      <path d="M13 15V11V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="11" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 10C14.3431 10 13 8.65685 13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 22V15M18 15L20.5 17.5M18 15L15.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 21.8C13.3538 21.9311 12.6849 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7M21.8 14C21.9311 13.3538 22 12.6849 22 12C22 6.47715 17.5228 2 12 2C10.1786 2 8.47087 2.48697 7 3.33782" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
