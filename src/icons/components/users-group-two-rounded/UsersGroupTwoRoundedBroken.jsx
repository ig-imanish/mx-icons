import React from "react";
import Icon from "../../Icon";

export default function UsersGroupTwoRoundedBroken({
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
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M18 9C19.6569 9 21 7.88071 21 6.5C21 5.11929 19.6569 4 18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 9C4.34315 9 3 7.88071 3 6.5C3 5.11929 4.34315 4 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17.1973 15C17.7078 15.5883 18 16.2714 18 17C18 19.2091 15.3137 21 12 21C8.68629 21 6 19.2091 6 17C6 14.7909 8.68629 13 12 13C12.3407 13 12.6748 13.0189 13 13.0553" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 19C21.7542 18.6153 23 17.6411 23 16.5C23 15.3589 21.7542 14.3847 20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 19C2.24575 18.6153 1 17.6411 1 16.5C1 15.3589 2.24575 14.3847 4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
