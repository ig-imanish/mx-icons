import React from "react";
import Icon from "../../Icon";

export default function MoneyCardReceiveLinear({
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
      <path d="M19 14V20M19 20L21 18M19 20L17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 16H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13 16H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 10L22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
