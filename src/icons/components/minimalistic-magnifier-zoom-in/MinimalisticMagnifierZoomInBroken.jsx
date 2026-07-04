import React from "react";
import Icon from "../../Icon";

export default function MinimalisticMagnifierZoomInBroken({
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
      <path d="M9 11.5H11.5M11.5 11.5H14M11.5 11.5V14M11.5 11.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 20L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6.75 3.27093C8.14732 2.46262 9.76964 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 9.76964 2.46262 8.14732 3.27093 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
