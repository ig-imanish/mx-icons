import React from "react";
import Icon from "../../Icon";

export default function StretchingRoundBroken({
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
      <circle cx="14.5" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19 21.9959V18.0489C19 16.273 17.395 14.9199 15.6265 15.2047M7.94806 13.4348L7.92328 13.4109C6.88143 12.404 7.6864 10.7852 8.5932 10.1427C9.5 9.50016 13.3451 8.50016 13.3451 13.4345C13.3451 15.1273 12.8704 16.7131 12.0433 18.0489M5 22.0003C6.46053 22.0003 7.82003 21.6256 9 20.9679" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
