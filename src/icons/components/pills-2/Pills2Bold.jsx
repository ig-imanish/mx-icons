import React from "react";
import Icon from "../../Icon";

export default function Pills2Bold({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12.0261 9.96544C12.6382 9.13578 13 8.11014 13 7C13 4.23858 10.7614 2 8 2C6.88986 2 5.86422 2.36179 5.03456 2.9739L12.0261 9.96544Z" fill="currentColor"/>
      <path d="M10.9654 11.0261C10.1358 11.6382 9.11014 12 8 12C5.23858 12 3 9.76142 3 7C3 5.88986 3.36179 4.86422 3.9739 4.03456L10.9654 11.0261Z" fill="currentColor"/>
      <path d="M21.9437 16.25C21.7898 15.2305 21.3204 14.2495 20.5354 13.4645C18.5828 11.5118 15.417 11.5118 13.4644 13.4645C12.6794 14.2495 12.21 15.2305 12.0562 16.25H21.9437Z" fill="currentColor"/>
      <path d="M21.9437 17.75H12.0562C12.21 18.7695 12.6794 19.7505 13.4644 20.5355C15.417 22.4882 18.5828 22.4882 20.5354 20.5355C21.3204 19.7505 21.7898 18.7695 21.9437 17.75Z" fill="currentColor"/>
    </Icon>
  );
}
