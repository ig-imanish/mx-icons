import React from "react";
import Icon from "../../Icon";

export default function GalleryCircleLinear({
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
      <circle cx="15" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20.0001 17.6001L17.7766 15.599C16.7371 14.6634 15.189 14.5702 14.0447 15.3744L13.7465 15.5839C12.9514 16.1428 11.8696 16.0491 11.1823 15.3618L6.89262 11.0721C6.03641 10.2159 4.66299 10.1702 3.75172 10.9675L2.28125 12.2542" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
