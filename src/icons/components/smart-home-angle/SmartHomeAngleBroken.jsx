import React from "react";
import Icon from "../../Icon";

export default function SmartHomeAngleBroken({
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
      <path d="M21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.3822 21.9085 16.8599 21.9917 14 21.9993M21.6646 7.87495C21.1242 6.7476 19.9738 6.06233 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495C2.04852 8.47327 1.96736 9.12544 2.01108 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 22C11 17.0294 6.97056 13 2 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 22C8 18.6863 5.31371 16 2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 22C5 20.3431 3.65685 19 2 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
