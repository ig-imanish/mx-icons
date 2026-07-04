import React from "react";
import Icon from "../../Icon";

export default function UserCrossRoundedBroken({
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
      <path d="M20 17.5L18 19.5M18 17.5L20 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 13C14.6083 13 16.8834 13.8152 18.0877 15.024M15.5841 20.4366C14.5358 20.7944 13.3099 21 12 21C8.13401 21 5 19.2091 5 17C5 15.6407 6.18652 14.4398 8 13.717" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
