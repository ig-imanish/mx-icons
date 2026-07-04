import React from "react";
import Icon from "../../Icon";

export default function ArrowRightDownBold({
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
      <path d="M5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L13.5 12.4393L17.4697 8.46967C17.6842 8.25517 18.0068 8.191 18.287 8.30709C18.5673 8.42318 18.75 8.69665 18.75 9V18C18.75 18.4142 18.4142 18.75 18 18.75L9 18.75C8.69665 18.75 8.42318 18.5673 8.30709 18.287C8.19101 18.0068 8.25517 17.6842 8.46967 17.4697L12.4393 13.5L5.46967 6.53033Z" fill="currentColor"/>
    </Icon>
  );
}
