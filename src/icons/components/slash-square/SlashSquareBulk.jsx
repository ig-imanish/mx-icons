import React from "react";
import Icon from "../../Icon";

export default function SlashSquareBulk({
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
      <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill="currentColor"/>
      <path d="M14.0179 7.36447C14.1251 6.96437 13.8877 6.55311 13.4876 6.44591C13.0875 6.3387 12.6762 6.57614 12.569 6.97624L9.98082 16.6355C9.87361 17.0356 10.1111 17.4468 10.5111 17.5541C10.9112 17.6613 11.3225 17.4238 11.4297 17.0237L14.0179 7.36447Z" fill="currentColor"/>
    </Icon>
  );
}
