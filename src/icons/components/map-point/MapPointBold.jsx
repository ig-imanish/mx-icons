import React from "react";
import Icon from "../../Icon";

export default function MapPointBold({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C7.58172 2 4 6.00258 4 10.5C4 14.9622 6.55332 19.8124 10.5371 21.6744C11.4657 22.1085 12.5343 22.1085 13.4629 21.6744C17.4467 19.8124 20 14.9622 20 10.5C20 6.00258 16.4183 2 12 2ZM12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" fill="currentColor"/>
    </Icon>
  );
}
