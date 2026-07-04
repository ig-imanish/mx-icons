import React from "react";
import Icon from "../../Icon";

export default function AltArrowDownOutline({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z" fill="currentColor"/>
    </Icon>
  );
}
