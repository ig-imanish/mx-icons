import React from "react";
import Icon from "../../Icon";

export default function AndroidLinear({
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
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.17 1.165a0.75 0.75 0 0 0 -1.34 0.67l0.837 1.675a6.004 6.004 0 0 0 -2.568 3.9L5.99 8h12.02l-0.109 -0.59a6.004 6.004 0 0 0 -2.568 -3.9l0.838 -1.675a0.75 0.75 0 0 0 -1.342 -0.67l-0.837 1.674A5.99 5.99 0 0 0 12 2.5a5.99 5.99 0 0 0 -1.992 0.339L9.17 1.165ZM3.5 9A1.5 1.5 0 0 0 2 10.5v5a1.5 1.5 0 0 0 3 0v-5A1.5 1.5 0 0 0 3.5 9Zm17 0a1.5 1.5 0 0 0 -1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5A1.5 1.5 0 0 0 20.5 9ZM18 9H6v8.5A1.5 1.5 0 0 0 7.5 19H8v2.5a1.5 1.5 0 0 0 3 0V19h2v2.5a1.5 1.5 0 0 0 3 0V19h0.5a1.5 1.5 0 0 0 1.5 -1.5V9Z"
      />
    </Icon>
  );
}
