import React from "react";
import Icon from "../../Icon";

export default function RewindBackTwotone({
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
      <path opacity="0.5" d="M13.0002 8.76844L19.0969 4.30838C20.3994 3.41122 22 4.57895 22 6.42632L22 17.5737C22 19.4211 20.3994 20.5888 19.0969 19.6916L13.0002 15.2316" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2.92136 10.1468C1.69288 10.9545 1.69288 13.0455 2.92135 13.8532L10.3388 18.7302C11.5327 19.5152 13 18.4934 13 16.877V7.12303C13 5.50658 11.5327 4.48482 10.3388 5.26983L2.92136 10.1468Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
