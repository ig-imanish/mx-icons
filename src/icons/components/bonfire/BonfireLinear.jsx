import React from "react";
import Icon from "../../Icon";

export default function BonfireLinear({
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
      <path d="M18 8.80745C18 13.7615 13.7333 15 11.6 15C9.73333 15 6 13.7615 6 8.80745C6 6.71017 7.20839 5.35826 8.26099 4.65274C8.79638 4.29388 9.48354 4.55201 9.57296 5.17624C9.75127 6.421 10.8777 7.34944 11.5596 6.27998C12.1424 5.36614 12.3529 4.13169 12.3529 3.38896C12.3529 2.28965 13.503 1.59108 14.4009 2.2646C16.1512 3.5774 18 5.776 18 8.80745Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20 15L4 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 15L9 17.1875M20 22L14.5 19.5938" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 10C14.8 10.6667 13.92 12 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
