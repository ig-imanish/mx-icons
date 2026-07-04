import React from "react";
import Icon from "../../Icon";

export default function TargetLinear({
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
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 12L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 12L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 22L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 5L12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 12H12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 14L12 12L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
