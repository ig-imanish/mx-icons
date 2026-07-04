import React from "react";
import Icon from "../../Icon";

export default function SkipNextTwotone({
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
      <path d="M16.6598 9.35258C18.4467 10.5065 18.4467 13.4935 16.6598 14.6474L5.87084 21.6145C4.13419 22.736 2 21.2763 2 18.9671L2 5.0329C2 2.72368 4.13419 1.26402 5.87083 2.38548L16.6598 9.35258Z" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M22 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
