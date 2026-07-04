import React from "react";
import Icon from "../../Icon";

export default function MenBold({
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
      <path d="M17.0001 1.25C16.5858 1.25 16.2501 1.58579 16.2501 2C16.2501 2.41421 16.5858 2.75 17.0001 2.75H20.1894L15.1018 7.8376C13.717 6.68989 11.9391 6 10 6C5.58172 6 2 9.58172 2 14C2 18.4183 5.58172 22 10 22C14.4183 22 18 18.4183 18 14C18 12.0609 17.3101 10.283 16.1624 8.89827L21.2501 3.81066V7C21.2501 7.41421 21.5858 7.75 22.0001 7.75C22.4143 7.75 22.7501 7.41421 22.7501 7V2C22.7501 1.58579 22.4143 1.25 22.0001 1.25H17.0001Z" fill="currentColor"/>
    </Icon>
  );
}
