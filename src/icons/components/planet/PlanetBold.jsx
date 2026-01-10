import React from "react";
import Icon from "../../Icon";

export default function PlanetBold({
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
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        fill="currentColor"
      />
      {/* Craters */}
      <circle cx="7" cy="9" r="2" fill="white" fillOpacity="0.4" />
      <circle cx="16" cy="15" r="2.5" fill="white" fillOpacity="0.4" />
      <circle cx="10" cy="16" r="1.5" fill="white" fillOpacity="0.4" />
      <circle cx="15" cy="8" r="1.2" fill="white" fillOpacity="0.4" />
      <circle cx="8" cy="13" r="1" fill="white" fillOpacity="0.4" />
      
      {/* Single Texture Dot in the Middle */}
      <circle cx="12" cy="12" r="0.8" fill="white" fillOpacity="0.4" />
    </Icon>
  );
}