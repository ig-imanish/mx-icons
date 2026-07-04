import React from "react";
import Icon from "../../Icon";

export default function UserBlockBroken({
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
      <path d="M15.5 13.5351C14.4704 13.1948 13.275 13 12 13C8.13401 13 5 14.7909 5 17C5 17.3453 5 17.6804 5.02673 18M13 20.9867C12.6836 20.9955 12.3506 21 12 21C10.2776 21 8.97906 20.8916 8 20.6952" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.9502 17.0498L16.0502 20.9497" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
