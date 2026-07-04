import React from "react";
import Icon from "../../Icon";

export default function TextBoldSquareBroken({
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
      <path d="M8 7.52174C8 6.68131 8.68131 6 9.52174 6H12C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12H8V7.52174Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 12H13C14.6569 12 16 13.3431 16 15C16 16.6569 14.6569 18 13 18H9.17647C8.52672 18 8 17.4733 8 16.8235V12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
