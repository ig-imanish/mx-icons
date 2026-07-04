import React from "react";
import Icon from "../../Icon";

export default function TextFormattingTextItalicBulk({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9 1.00002H14.9768C14.992 0.999669 15.0072 0.999667 15.0225 1.00002H21C21.5523 1.00002 22 1.44773 22 2.00002C22 2.5523 21.5523 3.00002 21 3.00002H15.744H13.656H9C8.44772 3.00002 8 2.5523 8 2.00002C8 1.44773 8.44772 1.00002 9 1.00002ZM8.25597 21H3C2.44772 21 2 21.4477 2 22C2 22.5523 2.44772 23 3 23H8.97753C8.99281 23.0004 9.00805 23.0004 9.02325 23H15C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21H10.344H8.25597Z" fill="currentColor"/>
      <path opacity="0.5" d="M13.6559 3L8.25586 21H10.3439L15.7439 3H13.6559Z" fill="currentColor"/>
    </Icon>
  );
}
