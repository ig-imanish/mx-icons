import React from "react";
import Icon from "../../Icon";

export default function VirusLinear({
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
      <path d="M12.0565 18.9998C15.9224 19.031 19.031 15.9224 18.9998 12.0565C18.9686 8.19062 15.8094 5.03143 11.9435 5.00023C8.07765 4.96904 4.96904 8.07765 5.00023 11.9435C5.03143 15.8094 8.19062 18.9686 12.0565 18.9998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 6L16.95 7.05003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 5L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17.0498 18.0498L16.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 19.0498L7.05003 17.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16.5 13C16.5 14.1046 15.6046 15 14.5 15C13.3954 15 12.5 14.1046 12.5 13C12.5 11.8954 13.3954 11 14.5 11C15.6046 11 16.5 11.8954 16.5 13Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11 9C11 9.55228 10.5523 10 10 10C9.44772 10 9 9.55228 9 9C9 8.44772 9.44772 8 10 8C10.5523 8 11 8.44772 11 9Z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="9" cy="13" r="1" fill="currentColor"/>
      <circle cx="19.5" cy="4.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="1.5" cy="1.5" r="1.5" transform="matrix(-1 0 0 1 5 2)" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 12C2 12.8284 2.67157 13.5 3.5 13.5C4.32843 13.5 5 12.8284 5 12C5 11.1716 4.32843 10.5 3.5 10.5C2.67157 10.5 2 11.1716 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="1.5" cy="1.5" r="1.5" transform="matrix(1 0 0 -1 17.0498 21.0498)" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="4.5" cy="20.5" r="1.5" transform="rotate(180 4.5 20.5)" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19.5 13.5C20.3284 13.5 21 12.8284 21 12C21 11.1716 20.3284 10.5 19.5 10.5C19.3247 10.5 19.1564 10.5301 19 10.5854V13.4146C19.1564 13.4699 19.3247 13.5 19.5 13.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10.5852 19C10.7911 19.5826 11.3468 20.0001 11.9999 20.0001C12.653 20.0001 13.2086 19.5826 13.4146 19L10.5852 19Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
