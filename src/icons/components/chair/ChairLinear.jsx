import React from "react";
import Icon from "../../Icon";

export default function ChairLinear({
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
      <path d="M17 21V16M7 21V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15.4998 12H8.49977C6.84985 12 6.02489 12 5.51233 12.5858C5.22645 12.9125 5.10002 13.3503 5.0441 14.0008C4.96666 14.9018 4.92793 15.3523 5.22514 15.6762C5.52235 16 6.01482 16 6.99977 16H16.9998C17.9847 16 18.4772 16 18.7744 15.6762C19.0716 15.3523 19.0329 14.9018 18.9554 14.0008C18.8995 13.3503 18.7731 12.9125 18.4872 12.5858C17.9746 12 17.1497 12 15.4998 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 8C7 6.13077 7 5.19615 7.40192 4.5C7.66523 4.04394 8.04394 3.66523 8.5 3.40192C9.19615 3 10.1308 3 12 3C13.8692 3 14.8038 3 15.5 3.40192C15.9561 3.66523 16.3348 4.04394 16.5981 4.5C17 5.19615 17 6.13077 17 8V12H7V8Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
