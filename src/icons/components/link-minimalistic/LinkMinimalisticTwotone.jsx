import React from "react";
import Icon from "../../Icon";

export default function LinkMinimalisticTwotone({
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
      <path d="M8.99991 11.9999H14.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M9 18H8C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M15 6H16C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
