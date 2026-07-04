import React from "react";
import Icon from "../../Icon";

export default function CardTransferTwotone({
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
      <path d="M21.9991 11C21.99 7.8857 21.8915 6.23467 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M20 20V14M20 14L22 16M20 14L18 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5 14V20M15.5 20L17.5 18M15.5 20L13.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.5" d="M10 16H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.4" d="M2 10L22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
