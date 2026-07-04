import React from "react";
import Icon from "../../Icon";

export default function RestartBroken({
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
      <g clip-path="url(#clip0_1276_7761)">
      <path d="M19.7285 10.9288C20.4413 13.5978 19.7507 16.5635 17.6569 18.6573C15.1798 21.1344 11.4826 21.6475 8.5 20.1966M18.364 8.05071L17.6569 7.3436C14.5327 4.21941 9.46736 4.21941 6.34316 7.3436C3.42964 10.2571 3.23318 14.8588 5.75376 18M18.364 8.05071H14.1213M18.364 8.05071V3.80807" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_1276_7761">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </Icon>
  );
}
