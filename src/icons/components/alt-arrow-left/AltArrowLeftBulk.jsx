import React from "react";
import Icon from "../../Icon";

export default function AltArrowLeftBulk({
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
      <path d="M11.5956 8.30273L8.16485 11.6296C7.94505 11.8428 7.94505 12.1573 8.16485 12.3704L14.7953 18.8001C15.2091 19.2013 16 18.9581 16 18.4297V12.7071L11.5956 8.30273Z" fill="currentColor"/>
      <path opacity="0.5" d="M15.9999 11.2929L15.9999 5.5703C15.9999 5.04189 15.2089 4.79869 14.7952 5.1999L12.3135 7.60648L15.9999 11.2929Z" fill="currentColor"/>
    </Icon>
  );
}
