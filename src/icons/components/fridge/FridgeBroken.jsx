import React from "react";
import Icon from "../../Icon";

export default function FridgeBroken({
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
      <path d="M4 10V13C4 16.7712 4 18.6569 5.17157 19.8284C6.34315 21 8.22876 21 12 21C15.7712 21 17.6569 21 18.8284 19.8284C20 18.6569 20 16.7712 20 13V10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2C8.22876 2 6.34315 2 5.17157 3.17157C4.51839 3.82475 4.22937 4.69989 4.10149 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 21V22H16V21M8 21V22H7V21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M20 11.5H15M4 11.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 7L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 14L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
