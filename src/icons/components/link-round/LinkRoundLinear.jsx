import React from "react";
import Icon from "../../Icon";

export default function LinkRoundLinear({
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
      <path d="M10 15H12C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3H8C4.68629 3 2 5.68629 2 9C2 10.5367 2.57771 11.9385 3.52779 13M14 9H12C8.68629 9 6 11.6863 6 15C6 18.3137 8.68629 21 12 21H16C19.3137 21 22 18.3137 22 15C22 13.4633 21.4223 12.0615 20.4722 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
