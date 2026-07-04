import React from "react";
import Icon from "../../Icon";

export default function MenuDotsTwotone({
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
      <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
