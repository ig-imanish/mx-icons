import React from "react";
import Icon from "../../Icon";

export default function SmartphoneVibrationTwotone({
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
      <path d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M14.5 19H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M21.9999 6L21.2235 7.55279C21.0827 7.83431 21.0827 8.16569 21.2235 8.44721L21.7763 9.55279C21.917 9.83431 21.917 10.1657 21.7763 10.4472L21.2235 11.5528C21.0827 11.8343 21.0827 12.1657 21.2235 12.4472L21.7763 13.5528C21.917 13.8343 21.917 14.1657 21.7763 14.4472L21.2235 15.5528C21.0827 15.8343 21.0827 16.1657 21.2235 16.4472L21.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.5" d="M2 6L2.77639 7.55279C2.91716 7.83431 2.91716 8.16569 2.77639 8.44721L2.22361 9.55279C2.08284 9.83431 2.08284 10.1657 2.22361 10.4472L2.77639 11.5528C2.91716 11.8343 2.91716 12.1657 2.77639 12.4472L2.22361 13.5528C2.08284 13.8343 2.08284 14.1657 2.22361 14.4472L2.77639 15.5528C2.91716 15.8343 2.91716 16.1657 2.77639 16.4472L2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
