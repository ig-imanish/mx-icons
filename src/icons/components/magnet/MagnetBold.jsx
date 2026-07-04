import React from "react";
import Icon from "../../Icon";

export default function MagnetBold({
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
      <path d="M16.25 2H13C7.47715 2 3 6.47715 3 12C3 17.5228 7.47715 22 13 22H16.25V17H13C10.2386 17 8 14.7614 8 12C8 9.23858 10.2386 7 13 7H16.25V2Z" fill="currentColor"/>
      <path d="M17.75 7H19.5C20.3284 7 21 6.32843 21 5.5V3.5C21 2.67157 20.3284 2 19.5 2H17.75V7Z" fill="currentColor"/>
      <path d="M17.75 17V22H19.5C20.3284 22 21 21.3284 21 20.5V18.5C21 17.6716 20.3284 17 19.5 17H17.75Z" fill="currentColor"/>
    </Icon>
  );
}
