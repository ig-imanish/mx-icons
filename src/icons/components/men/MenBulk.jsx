import React from "react";
import Icon from "../../Icon";

export default function MenBulk({
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
      <circle opacity="0.5" cx="10" cy="14" r="8" fill="currentColor"/>
      <path d="M16.9998 1.25C16.5856 1.25 16.2498 1.58579 16.2498 2C16.2498 2.41421 16.5856 2.75 16.9998 2.75H20.1891L15.1016 7.83758C15.4873 8.15728 15.8425 8.5125 16.1622 8.89824L21.2498 3.81066V7C21.2498 7.41421 21.5856 7.75 21.9998 7.75C22.414 7.75 22.7498 7.41421 22.7498 7V2.25C22.7498 1.69772 22.3021 1.25 21.7498 1.25H16.9998Z" fill="currentColor"/>
    </Icon>
  );
}
