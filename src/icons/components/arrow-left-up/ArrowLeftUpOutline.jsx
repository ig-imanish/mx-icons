import React from "react";
import Icon from "../../Icon";

export default function ArrowLeftUpOutline({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M5.25 6C5.25 5.58579 5.58579 5.25 6 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H7.81066L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L6.75 7.81066V15C6.75 15.4142 6.41421 15.75 6 15.75C5.58579 15.75 5.25 15.4142 5.25 15V6Z" fill="currentColor"/>
    </Icon>
  );
}
