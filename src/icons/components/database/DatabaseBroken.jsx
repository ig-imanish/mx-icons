import React from "react";
import Icon from "../../Icon";

export default function DatabaseBroken({
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
      <path d="M4 18V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 12L20 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20 12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
