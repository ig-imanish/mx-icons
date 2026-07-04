import React from "react";
import Icon from "../../Icon";

export default function GolfLinear({
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
      <ellipse cx="12" cy="18.5" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 18V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 3.5L17.4224 6.21114C18.9835 6.99169 19.764 7.38196 19.764 8C19.764 8.61804 18.9835 9.00831 17.4224 9.78886L12 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
