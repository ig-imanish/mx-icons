import React from "react";
import Icon from "../../Icon";

export default function RewindBackBroken({
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
      <path d="M13.0002 15.2316L19.0969 19.6916C20.3994 20.5888 22 19.4211 22 17.5737L22 15M13.0002 8.76844L19.0969 4.30838C20.3994 3.41122 22 4.57894 22 6.42631L22 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6.63008 7.70832L10.3388 5.26983C11.5327 4.48482 13 5.50658 13 7.12303V16.877C13 18.4934 11.5327 19.5152 10.3388 18.7302L2.92135 13.8532C1.69288 13.0455 1.69288 10.9545 2.92136 10.1468L3.84854 9.53719" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
