import React from "react";
import Icon from "../../Icon";

export default function AlignHorizontalSpacingLinear({
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
      <path d="M3 2L3 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21 2L21 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 4C10.1144 4 9.17157 4 8.58579 4.58579C8 5.17157 8 6.11438 8 8L8 16C8 17.8856 8 18.8284 8.58579 19.4142C9.17157 20 10.1144 20 12 20C13.8856 20 14.8284 20 15.4142 19.4142C16 18.8284 16 17.8856 16 16V8C16 6.11438 16 5.17157 15.4142 4.58579C14.8284 4 13.8856 4 12 4Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
