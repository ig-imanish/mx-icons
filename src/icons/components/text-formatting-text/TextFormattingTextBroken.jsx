import React from "react";
import Icon from "../../Icon";

export default function TextFormattingTextBroken({
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
      <path d="M12 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V7.95M12 3H16C17.8856 3 18.8284 3 19.4142 3.58579C20 4.17157 20 5.11438 20 7V7.95M12 3V8M12 21V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 21H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
