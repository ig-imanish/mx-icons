import React from "react";
import Icon from "../../Icon";

export default function Bag3Broken({
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
      <path d="M20.232 10.5257C19.6468 7.40452 19.3542 5.84393 18.2433 4.92196C17.1324 4 15.5446 4 12.369 4H11.6479C8.47228 4 6.8845 4 5.7736 4.92196C4.66271 5.84393 4.37009 7.40452 3.78487 10.5257C2.96195 14.9146 2.55049 17.1091 3.75011 18.5545C4.94973 20 7.18244 20 11.6478 20H12.369C16.8344 20 19.0672 20 20.2668 18.5545C20.9628 17.7159 21.1165 16.6252 20.9621 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9.1709 8C9.58273 9.16519 10.694 10 12.0002 10C13.3064 10 14.4177 9.16519 14.8295 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
