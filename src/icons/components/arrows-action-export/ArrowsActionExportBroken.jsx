import React from "react";
import Icon from "../../Icon";

export default function ArrowsActionExportBroken({
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
      <path d="M12 20C7.58172 20 4 16.4183 4 12M20 12C20 14.5264 18.8289 16.7792 17 18.2454" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 14L12 4M12 4L15 7M12 4L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
