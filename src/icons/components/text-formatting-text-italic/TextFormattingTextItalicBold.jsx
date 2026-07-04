import React from "react";
import Icon from "../../Icon";

export default function TextFormattingTextItalicBold({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M14.9768 1.00002H9C8.44772 1.00002 8 1.44773 8 2.00002C8 2.5523 8.44772 3.00002 9 3.00002H13.656L8.25597 21H3C2.44772 21 2 21.4477 2 22C2 22.5523 2.44772 23 3 23H8.97753C8.99281 23.0004 9.00805 23.0004 9.02325 23H15C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21H10.344L15.744 3.00002H21C21.5523 3.00002 22 2.5523 22 2.00002C22 1.44773 21.5523 1.00002 21 1.00002H15.0225C15.0072 0.999667 14.992 0.999669 14.9768 1.00002Z" fill="currentColor"/>
    </Icon>
  );
}
