import React from "react";
import Icon from "../../Icon";

export default function RoundSortVerticalBroken({
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
      <path d="M9.5 8L9.5 16M9.5 16L7 13.25M9.5 16L12 13.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5 16L14.5 8M14.5 8L12 10.75M14.5 8L17 10.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
