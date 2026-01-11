import React from "react";
import Icon from "../../Icon";

export default function GooglePlayBulk({
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
      {/* Top right triangle - lightest */}
      <path
        opacity="0.4"
        fill="currentColor"
        d="M21.333 14.061c1.5555 -0.915 1.5555 -3.2055 0 -4.122L17.292 7.56 12.48 12l4.8105 4.44z"
      />
      {/* Bottom right triangle - medium */}
      <path
        opacity="0.6"
        fill="currentColor"
        d="M15.9405 17.235L11.3745 13.02 1.545 22.095c0.3015 1.5435 2.04 2.415 3.4545 1.5825z"
      />
      {/* Left triangle - darker */}
      <path
        opacity="0.8"
        fill="currentColor"
        d="M1.5 20.094V3.9045L10.269 12z"
      />
      {/* Top left triangle - full opacity */}
      <path
        fill="currentColor"
        d="M1.545 1.905l9.8295 9.075 4.566 -4.215L4.9995 0.3225C3.585 -0.5115 1.8465 0.36 1.545 1.905"
      />
    </Icon>
  );
}
