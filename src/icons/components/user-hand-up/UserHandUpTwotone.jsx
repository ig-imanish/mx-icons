import React from "react";
import Icon from "../../Icon";

export default function UserHandUpTwotone({
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
      <path d="M20 21.5L19.3505 15.9795C19.1506 14.2804 17.7107 13 16 13H8C5 13 3.06717 10.2687 2.38197 7.52787L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.5" d="M8 13V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle opacity="0.9" cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
