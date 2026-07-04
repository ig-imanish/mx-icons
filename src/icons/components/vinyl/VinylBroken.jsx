import React from "react";
import Icon from "../../Icon";

export default function VinylBroken({
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
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M21.9506 13.0004C21.4489 18.0538 17.1853 22.0004 12 22.0004C6.47715 22.0004 2 17.5233 2 12.0004C2 10.179 2.48697 8.4713 3.33782 7.00043M11 2.0498C9.55385 2.19339 8.19833 2.64506 7 3.33825" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 11.9992V2.45703C18.1101 3.43385 20.5654 5.88916 21.5422 8.99923" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
