import React from "react";
import Icon from "../../Icon";

export default function BodyShapeMinimalisticBroken({
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
      <path d="M20 2C20 2 18 6.68839 18 10.5714C18 11.8147 18.426 12.855 19 13.8912C19.6606 15.0836 20.5171 16.2704 21.1457 17.7543C21.6446 18.932 22 20.2968 22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 2C4 2 6 6.68839 6 10.5714C6 11.8147 5.57398 12.855 5.00001 13.8912C4.33945 15.0836 3.48291 16.2704 2.85426 17.7543C2.35537 18.932 2 20.2968 2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 13H11M18 13H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 22C12.5 20.5 15 17.5 21 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 22C11.5 20.5 9 17.5 3 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
