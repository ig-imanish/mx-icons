import React from "react";
import Icon from "../../Icon";

export default function GoogleLensBulk({
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
      <path
        opacity="0.6"
        fill="currentColor"
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h3V1h-3A5.5 5.5 0 0 0 1 6.5v3h3v-3ZM17.5 4h-3V1h3A5.5 5.5 0 0 1 23 6.5v3h-3v-3A2.5 2.5 0 0 0 17.5 4Z"
      />

      <path
        opacity="0.7"
        fill="currentColor"
        d="M16 12a4 4 0 1 1 -8 0 4 4 0 0 1 8 0Z"
      />

      <path
        opacity="0.9"
        fill="currentColor"
        d="M22 19.5a2.5 2.5 0 1 1 -5 0 2.5 2.5 0 0 1 5 0Z"
      />``

      <path
        opacity="0.9"
        fill="currentColor"
        d="M1 14.5v3A5.5 5.5 0 0 0 6.5 23h3v-3h-3A2.5 2.5 0 0 1 4 17.5v-3H1Z"
      />
    </Icon>
  );
}
