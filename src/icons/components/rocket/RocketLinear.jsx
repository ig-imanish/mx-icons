import React from "react";
import Icon from "../../Icon";

export default function RocketLinear({
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
      <g transform="rotate(45 12 12) translate(12 12) scale(0.75) translate(-12 -12)">
        {/* Pointy Main Body */}
        <path
          d="M12 1C7 1 5 10 5 15C5 18 6 21 6 21H18C18 21 19 18 19 15C19 10 17 1 12 1Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Horizontal Body Line */}
        <path
          d="M5.2 10H18.8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Closed Fins */}
        <path
          d="M5 15H2L4 21L6 21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 15H22L20 21L18 21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Window */}
        <circle
          cx="12"
          cy="15.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Trapezium Nozzle */}
        <path
          d="M8 21L9 23H15L16 21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Long Exhaust Lines */}
        <path
          d="M12 23V28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10 23V26"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 23V26"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </Icon>
  );
}