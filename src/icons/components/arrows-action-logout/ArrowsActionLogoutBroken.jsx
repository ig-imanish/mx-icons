import React from "react";
import Icon from "../../Icon";

export default function ArrowsActionLogoutBroken({
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
      <path d="M10 12H20M20 12L17 9M20 12L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 12C4 7.58172 7.58172 4 12 4M12 20C9.47362 20 7.22075 18.8289 5.75463 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
