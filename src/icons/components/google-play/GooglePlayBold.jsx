import React from "react";
import Icon from "../../Icon";

export default function GooglePlayBold({
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
      <path
        fill="currentColor"
        d="M21.333 14.061c1.5554999999999999 -0.915 1.5554999999999999 -3.2055 0 -4.122L17.292 7.5600000000000005 12.48 12l4.810499999999999 4.4399999999999995zm-5.3925 3.1740000000000004L11.374500000000001 13.02 1.545 22.095c0.3015 1.5434999999999999 2.04 2.415 3.4545 1.5825zM1.5 20.094V3.9045000000000005L10.269 12zM1.545 1.905l9.8295 9.075 4.566 -4.215L4.9995 0.3225C3.585 -0.5115000000000001 1.8465000000000003 0.36 1.545 1.905"
        stroke-width="1.5"
      ></path>
    </Icon>
  );
}
