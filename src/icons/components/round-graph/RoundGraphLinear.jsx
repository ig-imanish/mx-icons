import React from "react";
import Icon from "../../Icon";

export default function RoundGraphLinear({
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
      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 9.20261 3.14864 6.67349 5 4.85857" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
