import React from "react";
import Icon from "../../Icon";

export default function MapPointBroken({
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
      <path d="M12.5 7.04148C12.3374 7.0142 12.1704 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 9.82964 14.9858 9.6626 14.9585 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 15.2161C4.35254 13.5622 4 11.8013 4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C9.26474 21.0797 8.13831 20.1439 7.19438 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
