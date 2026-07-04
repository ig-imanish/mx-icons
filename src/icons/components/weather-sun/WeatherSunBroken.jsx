import React from "react";
import Icon from "../../Icon";

export default function WeatherSunBroken({
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
      <path d="M12 2V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 21V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.0708 4.92969L18.678 5.32252" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5.32178 18.6777L4.92894 19.0706" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.0708 19.0703L18.678 18.6775" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5.32178 5.32227L4.92894 4.92943" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
