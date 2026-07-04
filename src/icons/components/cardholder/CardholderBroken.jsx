import React from "react";
import Icon from "../../Icon";

export default function CardholderBroken({
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
      <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 10.9996V9.99956C17 8.11394 17 7.17113 16.4142 6.58535C15.9427 6.1138 15.2398 6.02184 14 6.00391M7 10.9996V9.99956C7 8.11394 7 7.17113 7.58579 6.58535C8.05733 6.1138 8.76022 6.02184 10 6.00391" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 11H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 16H9M16 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
