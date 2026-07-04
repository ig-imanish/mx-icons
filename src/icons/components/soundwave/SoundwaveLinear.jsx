import React from "react";
import Icon from "../../Icon";

export default function SoundwaveLinear({
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
      <path d="M12 4L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 7L16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 7L8 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 11L20 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 11L4 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
