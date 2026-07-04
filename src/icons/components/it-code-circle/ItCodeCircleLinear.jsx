import React from "react";
import Icon from "../../Icon";

export default function ItCodeCircleLinear({
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.2939 7.17041L11.9998 12L10.7058 16.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8.50019 9L8.32861 9.17157C6.99528 10.5049 6.32861 11.1716 6.32861 12C6.32861 12.8284 6.99528 13.4951 8.32861 14.8284L8.50019 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
