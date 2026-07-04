import React from "react";
import Icon from "../../Icon";

export default function PowerLinear({
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
      <path d="M12 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8.5 3.70605C5.26806 5.07157 3 8.27099 3 12.0001C3 16.9707 7.02944 21.0001 12 21.0001C16.9706 21.0001 21 16.9707 21 12.0001C21 8.27099 18.7319 5.07157 15.5 3.70605" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
