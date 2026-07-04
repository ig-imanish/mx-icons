import React from "react";
import Icon from "../../Icon";

export default function ArrowLeftUpBroken({
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
      <path d="M6 6H15M6 6V15M6 6L12.5 12.5M18 18L15.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
