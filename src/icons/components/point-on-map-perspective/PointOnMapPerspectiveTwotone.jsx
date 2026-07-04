import React from "react";
import Icon from "../../Icon";

export default function PointOnMapPerspectiveTwotone({
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
      <path opacity="0.5" d="M21 21L3 11M3.5 21L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M17 8C18.6569 8 20 6.65685 20 5C20 3.34315 18.6569 2 17 2C15.3431 2 14 3.34315 14 5C14 6.65685 15.3431 8 17 8ZM17 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21.1213 21.1213C22 20.2426 22 18.8284 22 16C22 13.1716 22 11.7574 21.1213 10.8787M21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213M21.1213 21.1213V21.1213ZM21.1213 10.8787C20.2426 10 18.8284 10 16 10L8 10C5.17157 10 3.75736 10 2.87868 10.8787M21.1213 10.8787V10.8787ZM2.87868 10.8787C2 11.7574 2 13.1716 2 16C2 18.8284 2 20.2426 2.87868 21.1213M2.87868 10.8787V10.8787ZM2.87868 21.1213V21.1213Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
