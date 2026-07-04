import React from "react";
import Icon from "../../Icon";

export default function AltArrowRightBulk({
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
      <path d="M12.4044 8.30273L15.8351 11.6296C16.0549 11.8428 16.0549 12.1573 15.8351 12.3704L9.20467 18.8001C8.79094 19.2013 8 18.9581 8 18.4297V12.7071L12.4044 8.30273Z" fill="currentColor"/>
      <path opacity="0.5" d="M8 11.2929L8 5.5703C8 5.04189 8.79094 4.79869 9.20467 5.1999L11.6864 7.60648L8 11.2929Z" fill="currentColor"/>
    </Icon>
  );
}
