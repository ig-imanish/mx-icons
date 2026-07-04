import React from "react";
import Icon from "../../Icon";

export default function Cart5Linear({
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
      <path d="M3.55514 14.2572C2.83668 10.9043 2.47745 9.22793 3.378 8.11397C4.27855 7 5.99302 7 9.42196 7H14.5781C18.0071 7 19.7215 7 20.6221 8.11397C21.5226 9.22793 21.1634 10.9043 20.4449 14.2572L20.0164 16.2572C19.5294 18.5297 19.2859 19.666 18.4608 20.333C17.6357 21 16.4737 21 14.1495 21H9.85053C7.52639 21 6.36432 21 5.53925 20.333C4.71418 19.666 4.47069 18.5297 3.98372 16.2572L3.55514 14.2572Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 15H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 9L15 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 9L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
