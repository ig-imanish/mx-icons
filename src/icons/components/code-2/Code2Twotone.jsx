import React from "react";
import Icon from "../../Icon";

export default function Code2Twotone({
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
      <path d="M16 11L17.6965 12.5268C19.239 13.9151 20.0103 14.6093 20.0103 15.5C20.0103 16.3907 19.239 17.0849 17.6965 18.4732L16 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M13.9868 5L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8.00005 4.82959L6.30358 6.35641C4.76102 7.74471 3.98975 8.43886 3.98975 9.32959C3.98975 10.2203 4.76102 10.9145 6.30358 12.3028L8.00005 13.8296" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
