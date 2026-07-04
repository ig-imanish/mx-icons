import React from "react";
import Icon from "../../Icon";

export default function BicyclingRoundTwotone({
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
      <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle opacity="0.5" cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle opacity="0.5" cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M18.4999 9.99997H14.5822C14.2052 9.99997 13.8393 9.87213 13.5444 9.63733L11.386 7.91916C10.1193 6.91084 8.25168 7.27102 7.45083 8.67806C6.67562 10.0401 7.25192 11.7736 8.68829 12.4004L11.779 13.749C12.7312 14.1646 13.1695 15.2708 12.7603 16.2258L11.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
