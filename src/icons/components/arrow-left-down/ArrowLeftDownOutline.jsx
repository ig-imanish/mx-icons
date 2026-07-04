import React from "react";
import Icon from "../../Icon";

export default function ArrowLeftDownOutline({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L7.81066 17.25L15 17.25C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75L6 18.75C5.58579 18.75 5.25 18.4142 5.25 18L5.25 9C5.25 8.58579 5.58579 8.25 6 8.25C6.41421 8.25 6.75 8.58579 6.75 9L6.75 16.1893L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z" fill="currentColor"/>
    </Icon>
  );
}
