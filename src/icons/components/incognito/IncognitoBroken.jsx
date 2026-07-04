import React from "react";
import Icon from "../../Icon";

export default function IncognitoBroken({
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
      <path d="M21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5C14 15.567 15.567 14 17.5 14C19.433 14 21 15.567 21 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 11H14M22 11H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 11L4.6138 8.54479C5.15947 6.36211 5.43231 5.27077 6.24609 4.63538C7.0057 4.0423 8.03639 4.00282 10 4.00019M20 11L19.3862 8.54479C18.8405 6.36211 18.5677 5.27077 17.7539 4.63538C16.9943 4.0423 15.9636 4.00282 14 4.00019" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14C8.433 14 10 15.567 10 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 17.4999L10.6584 17.1707C11.5029 16.7484 12.4971 16.7484 13.3416 17.1707L14 17.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
