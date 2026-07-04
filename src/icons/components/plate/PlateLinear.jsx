import React from "react";
import Icon from "../../Icon";

export default function PlateLinear({
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
      <path d="M15 4.00098C18.1143 4.01009 19.7653 4.10853 20.8284 5.17162C22 6.34319 22 8.22881 22 12C22 15.7713 22 17.6569 20.8284 18.8285C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8285C2 17.6569 2 15.7713 2 12C2 8.22881 2 6.34319 3.17157 5.17162C4.23467 4.10853 5.8857 4.01009 9 4.00098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 14H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
