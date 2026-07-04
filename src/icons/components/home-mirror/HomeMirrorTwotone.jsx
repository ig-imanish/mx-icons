import React from "react";
import Icon from "../../Icon";

export default function HomeMirrorTwotone({
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
      <path d="M5 9.5V19C5 19.6491 4.78947 20.2807 4.4 20.8L3.5 22M19 9.5V19C19 19.6491 19.2105 20.2807 19.6 20.8L20.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 9.5C18 13.6421 15.3137 17 12 17C8.68629 17 6 13.6421 6 9.5C6 5.35786 8.68629 2 12 2C15.3137 2 18 5.35786 18 9.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.4" d="M5 20H19" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.4" d="M13 5.2561C13.9608 5.76552 14.697 6.98832 14.9257 8.50024" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
