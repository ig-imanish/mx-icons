import React from "react";
import Icon from "../../Icon";

export default function Rewind5SecondsBackTwotone({
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
      <path opacity="0.5" d="M14 4.5L12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 7.89936 4.46819 4.3752 8 2.83209" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 8.5H11.3604C11.1452 8.5 10.9541 8.63772 10.886 8.84189L10.2194 10.8419C10.1114 11.1657 10.3524 11.5 10.6937 11.5H12C13.1046 11.5 14 12.3954 14 13.5C14 14.6046 13.1046 15.5 12 15.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
