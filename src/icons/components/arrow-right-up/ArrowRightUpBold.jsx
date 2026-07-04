import React from "react";
import Icon from "../../Icon";

export default function ArrowRightUpBold({
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
      <path d="M5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L13.5 11.5607L17.4697 15.5303C17.6842 15.7448 18.0068 15.809 18.287 15.6929C18.5673 15.5768 18.75 15.3033 18.75 15V6C18.75 5.58579 18.4142 5.25 18 5.25L9 5.25C8.69665 5.25 8.42318 5.43273 8.30709 5.71299C8.19101 5.99324 8.25517 6.31583 8.46967 6.53033L12.4393 10.5L5.46967 17.4697Z" fill="currentColor"/>
    </Icon>
  );
}
