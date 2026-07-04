import React from "react";
import Icon from "../../Icon";

export default function BlackHole2Twotone({
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
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M10.1418 10.3628C13.6876 6.81707 21.9137 15.6105 16.5242 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <path opacity="0.5" d="M13.8582 13.6372C10.3124 17.1829 2.08634 8.38952 7.47584 3.00001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <path opacity="0.5" d="M10.3628 13.8579C6.81707 10.3122 15.6105 2.08609 21 7.4756" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <path opacity="0.5" d="M13.6372 10.1421C17.1829 13.6878 8.38952 21.9139 3.00002 16.5244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
    </Icon>
  );
}
