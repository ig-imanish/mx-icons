import React from "react";
import Icon from "../../Icon";

export default function Rewind15SecondsForwardLinear({
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
      <path d="M10 4.5L12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 7.89936 19.5318 4.3752 16 2.83209" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 8.5H13.8604C13.6452 8.5 13.4541 8.63772 13.386 8.84189L12.7194 10.8419C12.6114 11.1657 12.8524 11.5 13.1937 11.5H14.5C15.6046 11.5 16.5 12.3954 16.5 13.5C16.5 14.6046 15.6046 15.5 14.5 15.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.5 10.5L10 8.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
