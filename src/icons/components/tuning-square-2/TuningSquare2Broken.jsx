import React from "react";
import Icon from "../../Icon";

export default function TuningSquare2Broken({
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
      <path d="M10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14Z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="2" cy="2" r="2" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 16 10)" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 16L19 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 8L5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 16L6 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 8L18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
