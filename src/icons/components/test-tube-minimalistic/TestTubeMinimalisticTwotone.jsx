import React from "react";
import Icon from "../../Icon";

export default function TestTubeMinimalisticTwotone({
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
      <path d="M21 9.84867L14.1815 3M14.8635 3.68504L20.2387 9.08398L13 16.3547L9.48838 19.8818C8.00407 21.3727 5.59754 21.3727 4.11323 19.8818C2.62892 18.391 2.62892 15.9738 4.11323 14.4829L14.8635 3.68504Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M6.80078 11.7832L8.075 11.9254C9.0977 12.0395 9.90504 12.8505 10.0187 13.8777C10.1062 14.6687 10.6104 15.3513 11.3386 15.6648L13 16.3544" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
