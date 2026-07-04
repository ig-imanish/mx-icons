import React from "react";
import Icon from "../../Icon";

export default function UserBlockRoundedBroken({
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
      <path d="M19.9502 16.0498L16.0502 19.9497" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13 20.9595C12.6734 20.9862 12.3395 21 12 21C8.13401 21 5 19.2091 5 17C5 16.6547 5.07657 16.3196 5.22053 16M14.5 13.2626C13.7236 13.093 12.8808 13 12 13C10.9264 13 9.90926 13.1381 9 13.3849" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
