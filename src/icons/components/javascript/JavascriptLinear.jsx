import React from "react";
import Icon from "../../Icon";

export default function JavascriptLinear({
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
        d="M8 6V16 C8 18 7 19 5.8 19  C4.9 19 4.2 18.5 3.8 17.5
  M14.5 16.5  C15 18 16.2 19 18 19  C19.8 19 21 18 21 16.5  C21 15.2 20.2 14.5 18.2 13.8  C16.2 13.1 15.5 12.4 15.5 11.2  C15.5 9.9 16.5 9 18 9  C19.2 9 20.1 9.6 20.6 10.8
  "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
