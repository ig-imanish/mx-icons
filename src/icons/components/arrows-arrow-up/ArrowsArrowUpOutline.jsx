import React from "react";
import Icon from "../../Icon";

export default function ArrowsArrowUpOutline({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967L18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303C18.2374 10.8232 17.7626 10.8232 17.4697 10.5303L12.75 5.81066L12.75 20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20L11.25 5.81066L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L11.4697 3.46967Z" fill="currentColor"/>
    </Icon>
  );
}
