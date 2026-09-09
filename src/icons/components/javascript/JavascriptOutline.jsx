import React from "react";
import Icon from "../../Icon";

export default function JavascriptOutline({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3ZM6 4.5C5.17157 4.5 4.5 5.17157 4.5 6V18C4.5 18.8284 5.17157 19.5 6 19.5H18C18.8284 19.5 19.5 18.8284 19.5 18V6C19.5 5.17157 18.8284 4.5 18 4.5H6Z"
        fill="currentColor"
      />
      <path
        d="M13.19 11.03C13.02 10.63 12.72 10.34 12.14 10.24C11.51 10.13 10.95 10.5 10.95 11.05C10.95 12.55 13.9 12.4 13.9 14.85C13.9 16.15 12.87 17 11.55 17C10.3 17 9.44 16.35 9.09 15.34L10.28 14.86C10.42 15.35 10.79 15.75 11.4 15.8C12.05 15.85 12.55 15.5 12.55 14.95C12.55 13.35 9.68 13.6 9.68 11.25C9.68 9.95 10.7 9.1 12 9.2C13.06 9.28 13.72 9.85 14.02 10.55L13.19 11.03Z"
        transform="translate(4.8 0)"
        fill="currentColor"
      />
      <path
        d="M17.7 10.6H16.45V15.3C16.45 16.05 16.02 16.15 15.5 15.9L15.05 17.05C15.9 17.55 17.7 17.6 17.7 15.35V10.6Z"
        transform="matrix(1.8 0 0 1.1 -18 -2.4)"
        fill="currentColor"
      />
    </Icon>
  );
}
