import React from "react";
import Icon from "../../Icon";

export default function VideoRecordBold({
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
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
    </Icon>
  );
}
