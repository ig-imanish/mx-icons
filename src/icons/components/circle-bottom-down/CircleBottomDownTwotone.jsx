import React from "react";
import Icon from "../../Icon";

export default function CircleBottomDownTwotone({
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
      <path opacity="0.5" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
