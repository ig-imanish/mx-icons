import React from "react";
import Icon from "../../Icon";

export default function HeartAngleBulk({
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
      <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M2 9.1371C2 13.5422 5.29819 16.0833 8.10627 18.2468C8.39814 18.4717 8.68471 18.6925 8.96173 18.9109C10 19.7294 11 20.5 12 20.5V5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="currentColor"/>
      <path d="M14 7.49928L12 5.50063V20.5C13 20.5 14 19.7294 15.0383 18.9109C15.3153 18.6925 15.6019 18.4717 15.8937 18.2468C18.7018 16.0833 22 13.5422 22 9.1371C22 4.67465 17.3685 1.40309 13.1285 4.50712L15.0605 6.43843C15.3534 6.73127 15.3535 7.20614 15.0607 7.49908C14.7678 7.79203 14.2929 7.79212 14 7.49928Z" fill="currentColor"/>
    </Icon>
  );
}
