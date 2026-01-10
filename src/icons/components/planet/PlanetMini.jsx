import React from "react";
import Icon from "../../Icon";

export default function PlanetMini({
  size = 16,
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
        cx="8" 
        cy="8" 
        r="7" 
        fill="currentColor"
      />
      <circle cx="5" cy="6" r="1.5" fill="white" fillOpacity="0.4" />
      <circle cx="11" cy="10" r="2" fill="white" fillOpacity="0.4" />
      <circle cx="7" cy="11" r="1" fill="white" fillOpacity="0.4" />
      
      {/* Texture Dot */}
      <circle cx="9" cy="7" r="0.6" fill="white" fillOpacity="0.4" />
    </Icon>
  );
}
