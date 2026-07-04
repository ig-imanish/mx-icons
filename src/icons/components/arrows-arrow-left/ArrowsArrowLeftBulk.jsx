import React from "react";
import Icon from "../../Icon";

export default function ArrowsArrowLeftBulk({
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
      <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H10.75V12.75H20C20.4142 12.75 20.75 12.4142 20.75 12Z" fill="currentColor"/>
      <path d="M10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V18Z" fill="currentColor"/>
    </Icon>
  );
}
