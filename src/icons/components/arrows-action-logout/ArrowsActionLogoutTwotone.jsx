import React from "react";
import Icon from "../../Icon";

export default function ArrowsActionLogoutTwotone({
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
      <path opacity="0.5" d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 12H20M20 12L17 9M20 12L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
