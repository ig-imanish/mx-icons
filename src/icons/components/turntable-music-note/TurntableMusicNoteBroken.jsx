import React from "react";
import Icon from "../../Icon";

export default function TurntableMusicNoteBroken({
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
      <path d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12M21.9948 10C21.9658 6.58687 21.7764 4.70529 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2.49073 4.43821 2.16444 5.80655 2.0551 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 20V16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M22 15C20.3431 15 19 13.6569 19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
