import React from "react";
import Icon from "../../Icon";

export default function JavascriptBroken({
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
      <path
        d="M8 3H18C19.6569 3 21 4.34315 21 6V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16 21H6C4.34315 21 3 19.6569 3 18V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 15.5C9.5 16.6 10.4 17.5 11.5 17.5C12.6 17.5 13.4 16.8 13.4 15.8C13.4 13.8 9.7 14 9.7 12.1C9.7 11.2 10.4 10.5 11.4 10.5C12.2 10.5 12.9 10.9 13.2 11.6"
        transform="translate(4.8 0)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2 10.6V15.3C17.2 16.5 16.4 17.4 15.3 17.4"
        transform="translate(-4.8 0)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
