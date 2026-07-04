import React from "react";
import Icon from "../../Icon";

export default function SoundwaveCircleTwotone({
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
      <path d="M12 7L12 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 10L17 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 9L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
