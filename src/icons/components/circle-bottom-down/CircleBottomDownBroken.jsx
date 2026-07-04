import React from "react";
import Icon from "../../Icon";

export default function CircleBottomDownBroken({
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
      <path d="M10 14L2 22M2 22H8M2 22V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7M2 12C2 6.47715 6.47715 2 12 2C13.8214 2 15.5291 2.48697 17 3.33782" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
