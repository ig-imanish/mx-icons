import React from "react";
import Icon from "../../Icon";

export default function TeaCupLinear({
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
      <path d="M2.3153 12.6978C2.26536 12.2706 2.2404 12.057 2.2509 11.8809C2.30599 10.9577 2.98677 10.1928 3.89725 10.0309C4.07094 10 4.286 10 4.71612 10H15.2838C15.7139 10 15.929 10 16.1027 10.0309C17.0132 10.1928 17.694 10.9577 17.749 11.8809C17.7595 12.057 17.7346 12.2706 17.6846 12.6978L17.284 16.1258C17.1031 17.6729 16.2764 19.0714 15.0081 19.9757C14.0736 20.6419 12.9546 21 11.8069 21H8.19303C7.04537 21 5.9263 20.6419 4.99182 19.9757C3.72352 19.0714 2.89681 17.6729 2.71598 16.1258L2.3153 12.6978Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M17 17H19C20.6569 17 22 15.6569 22 14C22 12.3431 20.6569 11 19 11H17.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10.0002 2C9.44787 2.55228 9.44787 3.44772 10.0002 4C10.5524 4.55228 10.5524 5.44772 10.0002 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.00018 7.5L5.1163 7.38388C5.62347 6.87671 5.68053 6.0738 5.25018 5.5C4.81983 4.9262 4.8769 4.12329 5.38407 3.61612L5.50018 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5002 7.5L14.6163 7.38388C15.1235 6.87671 15.1805 6.0738 14.7502 5.5C14.3198 4.9262 14.3769 4.12329 14.8841 3.61612L15.0002 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
