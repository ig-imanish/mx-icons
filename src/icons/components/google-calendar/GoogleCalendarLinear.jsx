import React from "react";
import Icon from "../../Icon";

export default function GoogleCalendarLinear({
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
        stroke="currentColor"
        stroke-linejoin="round"
        d="m13.055 10.25 2 -1.5v6.5"
        stroke-width="1"
      ></path>
      <path
        stroke="currentColor"
        stroke-linejoin="round"
        d="M7.945 9.857c0.2 -0.489 0.41 -1.107 1.61 -1.107 1.2 0 1.5 1 1.5 1.5s-0.5 1.5 -2 1.5c1.5 0 2 1 2 1.5s-0.3 1.5 -1.5 1.5 -1.41 -0.618 -1.61 -1.107"
        stroke-width="1"
      ></path>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M22.5 2.5v3h-17v17h-3a1 1 0 0 1 -1 -1v-19a1 1 0 0 1 1 -1h19a1 1 0 0 1 1 1Z"
        stroke-width="1"
      ></path>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M1.5 18h21L18 22.5H5.5"
        stroke-width="1"
      ></path>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M18 22.5v-17h4.5V18"
        stroke-width="1"
      ></path>
    </Icon>
  );
}
