import React from "react";
import Icon from "../../Icon";

export default function ClapperboardBulk({
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
      <path d="M10.0955 2.00445C6.62176 2.03072 4.71666 2.2121 3.46429 3.46447C2.60663 4.32213 2.25125 5.48593 2.104 7.25002H6.59844L10.0955 2.00445Z" fill="currentColor"/>
      <path d="M21.8956 7.25002C21.7484 5.48593 21.393 4.32213 20.5354 3.46447C19.938 2.86714 19.1922 2.51345 18.1985 2.30403L14.9012 7.25002H21.8956Z" fill="currentColor"/>
      <path d="M16.5399 2.08783C15.3291 2 13.845 2 11.9998 2C11.9668 2 11.934 2 11.9012 2L8.40121 7.25002H13.0984L16.5399 2.08783Z" fill="currentColor"/>
      <path opacity="0.5" d="M2.02644 8.75C2 9.68872 2 10.7632 2 12C2 16.714 2 19.071 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.071 22 16.714 22 12C22 10.7632 22 9.68872 21.9736 8.75H2.02644Z" fill="currentColor"/>
    </Icon>
  );
}
