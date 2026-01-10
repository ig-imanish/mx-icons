import React from "react";
import Icon from "../../Icon";

export default function PlanetLinear({
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
      {/* Planet Body */}
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      {/* Craters */}
      <circle cx="7" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="8" r="1.2" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Texture Dots (Reverted positions) */}
      <circle cx="13" cy="12" r="0.8" fill="currentColor" />
      <circle cx="6" cy="14" r="0.6" fill="currentColor" />
    </Icon>
  );
}