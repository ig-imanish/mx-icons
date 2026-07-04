import React from "react";
import Icon from "../../Icon";

export default function ArrowToTopRightLinear({
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
      <path d="M12 4.5L7 9.5M12 4.5L17 9.5M12 4.5C12 4.5 12 12.8333 12 14.5C12 16.1667 13 19.5 17 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
