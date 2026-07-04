import React from "react";
import Icon from "../../Icon";

export default function NotificationUnreadLinesBroken({
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
      <circle cx="19" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 17.5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12V10.5M13.5 2H12C7.28595 2 4.92893 2 3.46447 3.46447C2.49073 4.43821 2.16444 5.80655 2.0551 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
