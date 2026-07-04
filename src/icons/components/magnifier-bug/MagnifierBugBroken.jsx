import React from "react";
import Icon from "../../Icon";

export default function MagnifierBugBroken({
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
      <path d="M11.5 15.5C9.84315 15.5 8.5 14.1569 8.5 12.5V10.5M11.5 15.5C13.1569 15.5 14.5 14.1569 14.5 12.5V10.5M11.5 15.5V10.5M14.5 10.5C14.5 8.84315 13.1569 7.5 11.5 7.5C9.84315 7.5 8.5 8.84315 8.5 10.5M14.5 10.5H8.5M14.5715 11.5H16M7 11.5H8.5M14.5 14L15.5 14.5M8.5 14L7.5 14.5M14.5 9L15.5 8.5M8.5 9L7.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18.5 18.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6.75 3.27093C8.14732 2.46262 9.76964 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 9.76964 2.46262 8.14732 3.27093 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
