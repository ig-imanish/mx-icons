import React from "react";
import Icon from "../../Icon";

export default function DiagramUpLinear({
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
      <path d="M22 22H12C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.0002 7L15.8821 10.9264C15.4045 11.5278 15.1657 11.8286 14.8916 11.9751C14.47 12.2005 13.9663 12.2114 13.5354 12.0046C13.2551 11.8701 13.0035 11.5801 12.5002 11C11.9968 10.4199 11.7452 10.1299 11.4649 9.99535C11.034 9.78855 10.5303 9.7995 10.1088 10.0248C9.83461 10.1714 9.5958 10.4721 9.11819 11.0735L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
