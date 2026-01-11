import React from "react";
import Icon from "../../Icon";

export default function GooglePlayBroken({
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
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 20.548 16.73 7.745"
        strokeWidth="1.5"
        strokeDasharray="12 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.051 10.274 6.511 1.762C5.176 0.982 3.5 1.943 3.5 3.488v17.024c0 1.545 1.677 2.506 3.01 1.726l14.541 -8.512c1.32 -0.772 1.32 -2.68 0 -3.452Z"
        strokeWidth="1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.73 16.256 3.5 3.452"
        strokeWidth="1.5"
        strokeDasharray="12 4"
      />
    </Icon>
  );
}
