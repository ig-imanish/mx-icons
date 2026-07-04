import React from "react";
import Icon from "../../Icon";

export default function ArrowToDownLeftBroken({
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
      <path d="M12 19.5L17 14.5M12 19.5L7 14.5M12 19.5L12 13M12 9.5C12 7.83333 11 4.5 7 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
