import React from "react";
import Icon from "../../Icon";

export default function RoundArrowRightDownBold({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM9.75 15C9.75 15.4142 10.0858 15.75 10.5 15.75H15C15.4142 15.75 15.75 15.4142 15.75 15V10.5C15.75 10.0858 15.4142 9.75 15 9.75C14.5858 9.75 14.25 10.0858 14.25 10.5V13.1893L9.53033 8.46967C9.23744 8.17678 8.76256 8.17678 8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033L13.1893 14.25H10.5C10.0858 14.25 9.75 14.5858 9.75 15Z" fill="currentColor"/>
    </Icon>
  );
}
