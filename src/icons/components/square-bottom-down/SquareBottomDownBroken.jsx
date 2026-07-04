import React from "react";
import Icon from "../../Icon";

export default function SquareBottomDownBroken({
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
      <path d="M11 13L3 21M3 21H9M3 21V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.9999 12C21.9999 16.714 21.9999 19.0711 20.5354 20.5355C19.1784 21.8926 17.055 21.9921 12.9999 21.9994M2.00049 11C2.00779 6.94493 2.10734 4.8215 3.46438 3.46447C4.92884 2 7.28587 2 11.9999 2C16.714 2 19.071 2 20.5354 3.46447C21.5092 4.43821 21.8355 5.80655 21.9448 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
