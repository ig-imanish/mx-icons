import React from "react";
import Icon from "../../Icon";

export default function RewindBackBold({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M21.9998 17.5737L21.9998 6.42632C21.9998 4.57895 20.3991 3.41122 19.0966 4.30838L13 8.76844L13 7.12303C13 5.50658 11.5327 4.48482 10.3388 5.26983L2.92136 10.1468C1.69288 10.9545 1.69288 13.0455 2.92135 13.8532L10.3388 18.7302C11.5327 19.5152 13 18.4934 13 16.877V15.2316L19.0966 19.6916C20.3991 20.5888 21.9998 19.4211 21.9998 17.5737Z" fill="currentColor"/>
    </Icon>
  );
}
