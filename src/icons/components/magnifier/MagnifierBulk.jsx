import React from "react";
import Icon from "../../Icon";

export default function MagnifierBulk({
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
      <path opacity="0.5" d="M20.3133 11.1566C20.3133 16.2137 16.2137 20.3133 11.1566 20.3133C6.09956 20.3133 2 16.2137 2 11.1566C2 6.09956 6.09956 2 11.1566 2C16.2137 2 20.3133 6.09956 20.3133 11.1566Z" fill="currentColor"/>
      <path d="M17.1001 18.1219L20.7664 21.7882C21.0487 22.0705 21.5064 22.0705 21.7887 21.7882C22.071 21.5059 22.071 21.0482 21.7887 20.7659L18.1224 17.0996C17.809 17.4666 17.4671 17.8085 17.1001 18.1219Z" fill="currentColor"/>
    </Icon>
  );
}
