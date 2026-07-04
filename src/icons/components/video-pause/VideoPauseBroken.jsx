import React from "react";
import Icon from "../../Icon";

export default function VideoPauseBroken({
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
      <path d="M2 18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22C7.88562 22 8.82843 22 9.41421 21.4142C10 20.8284 10 19.8856 10 18V6C10 4.11438 10 3.17157 9.41421 2.58579C8.82843 2 7.88562 2 6 2C4.11438 2 3.17157 2 2.58579 2.58579C2 3.17157 2 4.11438 2 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 6C22 4.11438 22 3.17157 21.4142 2.58579C20.8284 2 19.8856 2 18 2C16.1144 2 15.1716 2 14.5858 2.58579C14 3.17157 14 4.11438 14 6V18C14 19.8856 14 20.8284 14.5858 21.4142C15.1716 22 16.1144 22 18 22C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
