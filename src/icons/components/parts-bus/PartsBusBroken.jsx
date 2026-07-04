import React from "react";
import Icon from "../../Icon";

export default function PartsBusBroken({
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
      <path d="M10 2.00879C7.52043 2.04466 6.11466 2.22859 5.17157 3.17167C4 4.34324 4 6.22886 4 10.0001V12.0001C4 15.7713 4 17.657 5.17157 18.8285C6.34315 20.0001 8.22876 20.0001 12 20.0001C15.7712 20.0001 17.6569 20.0001 18.8284 18.8285C20 17.657 20 15.7713 20 12.0001V10.0001C20 6.22886 20 4.34324 18.8284 3.17167C17.8853 2.22859 16.4796 2.04466 14 2.00879" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 13H16M4 13H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5 16H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 16H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 19.5V21C6 21.5523 6.44772 22 7 22H8.5C9.05228 22 9.5 21.5523 9.5 21V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 19.5V21C18 21.5523 17.5523 22 17 22H15.5C14.9477 22 14.5 21.5523 14.5 21V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 9H21C21.5523 9 22 9.44772 22 10V11C22 11.3148 21.8518 11.6111 21.6 11.8L20 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 9H3C2.44772 9 2 9.44772 2 10V11C2 11.3148 2.14819 11.6111 2.4 11.8L4 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 5H8.25M19.5 5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
