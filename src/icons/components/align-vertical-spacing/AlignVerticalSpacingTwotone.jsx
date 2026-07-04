import React from "react";
import Icon from "../../Icon";

export default function AlignVerticalSpacingTwotone({
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
      <path opacity="0.5" d="M22 3L2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M22 21L2 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 12C20 10.1144 20 9.17157 19.4142 8.58579C18.8284 8 17.8856 8 16 8L8 8C6.11438 8 5.17157 8 4.58579 8.58579C4 9.17157 4 10.1144 4 12C4 13.8856 4 14.8284 4.58579 15.4142C5.17157 16 6.11438 16 8 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
