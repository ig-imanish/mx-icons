import React from "react";
import Icon from "../../Icon";

export default function ArrowToTopLeftBroken({
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
      <path d="M12 4.5L17 9.5M12 4.5L7 9.5M12 4.5L12 11M12 14.5C12 16.1667 11 19.5 7 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
