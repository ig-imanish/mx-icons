import React from "react";
import Icon from "../../Icon";

export default function ArrowToDownRightTwotone({
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
      <path d="M7 14.5L12 19.5L17 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.5" d="M12 19.5C12 19.5 12 11.1667 12 9.5C12 7.83333 13 4.5 17 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
