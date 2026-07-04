import React from "react";
import Icon from "../../Icon";

export default function CalculatorMinimalisticTwotone({
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
      <path d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z" stroke="#1C274D" strokeWidth="1.5"/>
      <path opacity="0.5" d="M18 8.49998H14M18 14.5H14M18 17.5H14M10 8.49999H8M8 8.49999L6 8.49999M8 8.49999L8 6.49998M8 8.49999L8 10.5M9.5 14.5L8.00001 16M8.00001 16L6.50001 17.5M8.00001 16L6.5 14.5M8.00001 16L9.49999 17.5" stroke="#1C274D" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
