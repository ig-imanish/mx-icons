import React from "react";
import Icon from "../../Icon";

export default function StreetsBulk({
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
      <path d="M21.0119 4.04785L13.0602 11.9995L21.0119 19.9512C21.9995 18.4549 21.9995 16.1335 21.9995 11.9995C21.9995 7.86553 21.9995 5.54419 21.0119 4.04785Z" fill="currentColor"/>
      <path d="M11.9995 13.0602L4.04785 21.0119C5.54419 21.9995 7.86553 21.9995 11.9995 21.9995C16.1335 21.9995 18.4549 21.9995 19.9512 21.0119L11.9995 13.0602Z" fill="currentColor"/>
      <path opacity="0.5" d="M3.46447 3.46447C2 4.92893 2 7.28596 2 12C2 16.134 2 18.4553 2.98767 19.9517L19.9517 2.98766C18.4553 2 16.134 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z" fill="currentColor"/>
    </Icon>
  );
}
