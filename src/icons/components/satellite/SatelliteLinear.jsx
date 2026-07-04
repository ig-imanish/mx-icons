import React from "react";
import Icon from "../../Icon";

export default function SatelliteLinear({
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
      <path d="M20.4699 10.918C18.4298 12.9581 15.1221 12.9581 13.082 10.918C11.0418 8.87785 11.0418 5.57019 13.082 3.53008M20.4699 10.918C22.51 8.87785 22.51 5.57019 20.4699 3.53008C18.4298 1.48997 15.1221 1.48997 13.082 3.53008M20.4699 10.918C20.4699 10.918 18.6229 10.3025 16.1602 7.8399M20.4699 10.918L14.3132 22M13.082 3.53008C13.082 3.53008 13.6976 5.37728 16.1602 7.8399M13.082 3.53008L2 9.68687M16.1602 7.8399L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
