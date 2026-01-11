import React from "react";
import Icon from "../../Icon";

export default function GoogleLinear({
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
        d="M21.95 11a10 10 0 1 1 -3.65-6.664L15.35 6.994A5.996 5.996 0 1 0 17.66 14.19H13.1v-3h8.795"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
