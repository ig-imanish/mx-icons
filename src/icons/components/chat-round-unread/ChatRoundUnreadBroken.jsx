import React from "react";
import Icon from "../../Icon";

export default function ChatRoundUnreadBroken({
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
      <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 22 2)" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 2.20004C13.3538 2.06886 12.6849 2 12 2C10.1786 2 8.47087 2.48697 7 3.33782M21.8 10C21.9311 10.6462 22 11.3151 22 12C22 17.5228 17.5228 22 12 22C10.4003 22 8.88837 21.6244 7.54753 20.9565C7.19121 20.7791 6.78393 20.72 6.39939 20.8229L4.17335 21.4185C3.20701 21.677 2.32295 20.793 2.58151 19.8267L3.17712 17.6006C3.28001 17.2161 3.22094 16.8088 3.04346 16.4525C2.37562 15.1116 2 13.5997 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
