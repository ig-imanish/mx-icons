import React from "react";
import Icon from "../../Icon";

export default function WeatherSunFogBroken({
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
      <path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 19H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 16H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 6.34141C10.6256 6.12031 11.2987 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5217 17.4335 14.911 16.5 15.9687H7.5C6.56645 14.911 6 13.5217 6 12C6 11.2987 6.12031 10.6256 6.34141 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.0708 4.92969L18.678 5.32252" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5.32178 5.32227L4.92894 4.92943" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
