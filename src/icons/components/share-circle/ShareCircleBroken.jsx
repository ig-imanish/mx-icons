import React from "react";
import Icon from "../../Icon";

export default function ShareCircleBroken({
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
      <path d="M12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9C13.6569 9 15 7.65685 15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5.5 15C7.15685 15 8.5 16.3431 8.5 18C8.5 19.6569 7.15685 21 5.5 21C3.84315 21 2.5 19.6569 2.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18.5 21C16.8431 21 15.5 19.6569 15.5 18C15.5 16.3431 16.8431 15 18.5 15C20.1569 15 21.5 16.3431 21.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 13C20 10.6106 18.9525 8.46589 17.2916 7M4 13C4 10.6106 5.04752 8.46589 6.70838 7M10 20.748C10.6392 20.9125 11.3094 21 12 21C12.6906 21 13.3608 20.9125 14 20.748" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
