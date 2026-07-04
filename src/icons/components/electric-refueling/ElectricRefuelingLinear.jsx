import React from "react";
import Icon from "../../Icon";

export default function ElectricRefuelingLinear({
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
      <path d="M16 22V8C16 5.17157 16 3.75736 15.1213 2.87868C14.2426 2 12.8284 2 10 2H9C6.17157 2 4.75736 2 3.87868 2.87868C3 3.75736 3 5.17157 3 8V22" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9.5 10L8 12.5H11L9.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 22H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.5 4L20.7331 4.98647C20.8709 5.09673 20.9398 5.15186 21.0025 5.20805C21.5937 5.73807 21.9508 6.48086 21.9953 7.27364C22 7.35769 22 7.44594 22 7.62244V18.5C22 19.3284 21.3284 20 20.5 20C19.6716 20 19 19.3284 19 18.5V18.4286C19 17.6396 18.3604 17 17.5714 17H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 8H20.5C19.6716 8 19 8.67157 19 9.5V11.9189C19 12.5645 19.4131 13.1377 20.0257 13.3419L22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
