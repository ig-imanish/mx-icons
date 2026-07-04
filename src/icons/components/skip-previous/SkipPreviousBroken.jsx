import React from "react";
import Icon from "../../Icon";

export default function SkipPreviousBroken({
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
      <path d="M22 11L22 18.9671C22 21.2763 19.8658 22.736 18.1292 21.6145L7.34016 14.6474C5.55328 13.4935 5.55328 10.5065 7.34015 9.35258L18.1292 2.38548C19.8658 1.26402 22 2.72368 22 5.03289V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 5V12M2 19V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
