import React from "react";
import Icon from "../../Icon";

export default function FiltersBulk({
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
      <path d="M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z" fill="currentColor"/>
      <path opacity="0.7" d="M13.5798 13.7899C13.0765 13.9269 12.5468 14 12 14C9.46679 14 7.30024 12.4302 6.42018 10.2102C3.87293 10.9036 2 13.2331 2 16C2 19.3138 4.68629 22 8 22C11.3137 22 14 19.3138 14 16C14 15.2195 13.851 14.4739 13.5798 13.7899Z" fill="currentColor"/>
      <path opacity="0.4" d="M13.5798 13.7896C13.851 14.4736 14 15.2193 14 15.9998C14 17.7768 13.2275 19.3734 12 20.472C13.0615 21.4221 14.4633 21.9998 16 21.9998C19.3137 21.9998 22 19.3135 22 15.9998C22 13.2329 20.1271 10.9034 17.5798 10.21C16.8897 11.9508 15.4085 13.2918 13.5798 13.7896Z" fill="currentColor"/>
    </Icon>
  );
}
