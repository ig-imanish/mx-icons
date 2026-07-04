import React from "react";
import Icon from "../../Icon";

export default function GalleryCircleTwotone({
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
      <circle opacity="0.5" cx="15" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M19.9999 17.6001L17.7764 15.599C16.7368 14.6634 15.1887 14.5702 14.0445 15.3744L13.7463 15.5839C12.9511 16.1428 11.8693 16.0491 11.1821 15.3618L6.89237 11.0721C6.03616 10.2159 4.66274 10.1702 3.75147 10.9675L2.28101 12.2542" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
