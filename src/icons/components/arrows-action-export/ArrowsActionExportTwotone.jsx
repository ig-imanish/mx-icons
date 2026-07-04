import React from "react";
import Icon from "../../Icon";

export default function ArrowsActionExportTwotone({
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
      <path opacity="0.5" d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 14L12 4M12 4L15 7M12 4L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
