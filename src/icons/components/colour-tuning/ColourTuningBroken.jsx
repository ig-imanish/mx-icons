import React from "react";
import Icon from "../../Icon";

export default function ColourTuningBroken({
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
      <path d="M2 12H9.5M22 12H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20.0002 15.6843C20.0002 19 17.7345 22 16.0002 22C14.7427 22 13.6725 21.0299 12.9682 18.9999M4.14404 8.31567C4.14404 4.99988 6.40978 1.99988 8.14404 1.99988C10.4128 1.99988 12.0723 5.15794 12.0723 12C12.0723 13.0933 12.1146 14.0926 12.1951 14.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
