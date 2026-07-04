import React from "react";
import Icon from "../../Icon";

export default function DevicesMouseBold({
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
      <path d="M19 8.97414V14.9861C19 18.8598 15.866 22 12 22C8.13401 22 5 18.8598 5 14.9861V8.97414C5 5.35433 7.73668 2.37497 11.25 2V5.38542C10.6588 5.66685 10.25 6.27067 10.25 6.97016V8.97414C10.25 9.94256 11.0335 10.7276 12 10.7276C12.9665 10.7276 13.75 9.94256 13.75 8.97414V6.97016C13.75 6.27067 13.3412 5.66685 12.75 5.38542V2C16.2633 2.37497 19 5.35433 19 8.97414Z" fill="currentColor"/>
    </Icon>
  );
}
